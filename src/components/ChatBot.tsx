import React, { useState, useRef, useEffect } from 'react';  
import { motion, AnimatePresence } from 'framer-motion';  
import { MessageCircle, X, Send, Loader2, MinimizeIcon, Bot } from 'lucide-react';  
import { GoogleGenerativeAI } from "@google/generative-ai";  

// Initialiser l'API Gemini  
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');  

// Contexte initial pour le chatbot  
// Contexte initial pour le chatbot  
const INITIAL_CONTEXT = `Tu es l'assistant virtuel d'AfricoreAI, une entreprise spécialisée dans les solutions d'intelligence artificielle en Afrique.   

Format tes réponses de manière structurée :  
• Commence par une salutation personnalisée  
• Utilise des tirets (-) pour les listes  
• Mets en MAJUSCULES les mots importants  
• Utilise des émojis appropriés pour rendre la conversation plus engageante  
• Sépare les paragraphes avec des sauts de ligne  

Ton rôle est d'aider les visiteurs en :  
- Répondant à leurs questions sur les services d'AfricoreAI  
- Expliquant comment l'IA peut transformer leur business  
- Les guidant vers les solutions appropriées  
- Collectant leurs informations pour les mettre en relation avec l'équipe  

Pour cela, tu peux te référer aux informations disponibles sur notre site, y compris des liens vers des pages ou sections pertinentes. Par exemple :  
- Pour en savoir plus sur nos **services**, consulte la page [Services](https://www.africoreai.com/services).  
- Si un utilisateur souhaite des **études de cas**, dirige-le vers [Études de cas](https://www.africoreai.com/casestudies).  
- Pour des **témoignages clients**, mentionne la section [Témoignages](https://www.africoreai.com/testimonials).  

Sois professionnel mais chaleureux. Utilise "je" et "nous" pour personnifier AfricoreAI.  
Termine toujours par une question ou une invitation à poursuivre la conversation. N'hésite pas à poser des questions pour mieux comprendre les besoins de l'utilisateur.`;  

// Interface pour les messages  
interface Message {  
  id: string;  
  content: string;  
  type: 'user' | 'bot';  
  timestamp: Date;  
}  

// Message initial  
const initialMessage: Message = {  
  id: '1',  
  content: "👋 Bonjour ! Je suis l'assistant virtuel d'AfricoreAI.\n\nComment puis-je vous aider aujourd'hui ?\n\n- Solutions d'IA sur mesure\n- Transformation digitale\n- Consultation expert\n- Support technique",  
  type: 'bot',  
  timestamp: new Date()  
};  

// Fonction pour obtenir la réponse de Gemini  
async function getGeminiResponse(userMessage: string, chatHistory: string = "") {  
  try {  
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });  
    const prompt = `${INITIAL_CONTEXT}\n\nHistorique de la conversation:\n${chatHistory}\n\nUtilisateur: ${userMessage}\nAssistant:`;  
    const result = await model.generateContent(prompt);  
    const response = await result.response;  
    return response.text();  
  } catch (error) {  
    console.error('Erreur Gemini:', error);  
    return "Désolé, je rencontre des difficultés techniques. Veuillez réessayer plus tard.";  
  }  
}  

// Composant principal du ChatBot  
const ChatBot: React.FC = () => {  
  const [isOpen, setIsOpen] = useState(false);  
  const [messages, setMessages] = useState<Message[]>([initialMessage]);  
  const [inputMessage, setInputMessage] = useState('');  
  const [isTyping, setIsTyping] = useState(false);  
  const messagesEndRef = useRef<HTMLDivElement>(null);  
  const [isMinimized, setIsMinimized] = useState(false);  
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);  

  const scrollToBottom = () => {  
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });  
  };  

  useEffect(() => {  
    scrollToBottom();  
    if (!isOpen && messages.length > 1) {  
      setHasUnreadMessages(true);  
    }  
  }, [messages, isOpen]);  

  const prepareChatHistory = () => {  
    return messages  
      .map(msg => `${msg.type === 'user' ? 'Utilisateur' : 'Assistant'}: ${msg.content}`)  
      .join('\n');  
  };  

  const handleSendMessage = async () => {  
    if (!inputMessage.trim()) return;  

    const userMessage: Message = {  
      id: Date.now().toString(),  
      content: inputMessage.trim(),  
      type: 'user',  
      timestamp: new Date()  
    };  

    setMessages(prev => [...prev, userMessage]);  
    setInputMessage('');  
    setIsTyping(true);  

    try {  
      const chatHistory = prepareChatHistory();  
      const response = await getGeminiResponse(userMessage.content, chatHistory);  

      const botMessage: Message = {  
        id: (Date.now() + 1).toString(),  
        content: response,  
        type: 'bot',  
        timestamp: new Date()  
      };  

      setMessages(prev => [...prev, botMessage]);  
    } catch (error) {  
      console.error('Erreur lors de la communication avec Gemini:', error);  
      const errorMessage: Message = {  
        id: (Date.now() + 1).toString(),  
        content: "Désolé, je rencontre des difficultés techniques. Puis-je vous mettre en relation avec un membre de notre équipe ?",  
        type: 'bot',  
        timestamp: new Date()  
      };  
      setMessages(prev => [...prev, errorMessage]);  
    } finally {  
      setIsTyping(false);  
    }  
  };  

  const handleKeyPress = (e: React.KeyboardEvent) => {  
    if (e.key === 'Enter' && !e.shiftKey) {  
      e.preventDefault();  
      handleSendMessage();  
    }  
  };  

  const handleOpen = () => {  
    setIsOpen(true);  
    setHasUnreadMessages(false);  
  };  

  return (  
    <>  
      {/* Bouton flottant */}  
      {!isOpen && (  
        <motion.button  
          initial={{ scale: 0 }}  
          animate={{ scale: 1 }}  
          whileHover={{ scale: 1.1 }}  
          whileTap={{ scale: 0.9 }}  
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50 flex items-center justify-center"  
          onClick={handleOpen}  
        >  
          <MessageCircle size={24} />  
          {hasUnreadMessages && (  
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">  
              !  
            </span>  
          )}  
        </motion.button>  
      )}  

      {/* Fenêtre de chat */}  
      <AnimatePresence>  
        {isOpen && (  
          <motion.div  
            initial={{ opacity: 0, y: 100 }}  
            animate={{ opacity: 1, y: 0 }}  
            exit={{ opacity: 0, y: 100 }}  
            className="fixed bottom-6 right-6 w-96 bg-white rounded-lg shadow-xl overflow-hidden z-50"  
            style={{ height: isMinimized ? '60px' : '600px' }}  
          >  
            {/* Header */}  
            <div className="bg-blue-600 p-4 flex items-center justify-between">  
              <div className="flex items-center space-x-2">  
                <Bot className="text-white" size={24} />  
                <h3 className="text-white font-semibold">Assistant AfricoreAI</h3>  
              </div>  
              <div className="flex items-center space-x-2">  
                <button  
                  onClick={() => setIsMinimized(!isMinimized)}  
                  className="text-white hover:text-gray-200 transition-colors"  
                >  
                  <MinimizeIcon size={20} />  
                </button>  
                <button  
                  onClick={() => setIsOpen(false)}  
                  className="text-white hover:text-gray-200 transition-colors"  
                >  
                  <X size={20} />  
                </button>  
              </div>  
            </div>  

            {!isMinimized && (  
              <>  
                {/* Messages */}  
                <div className="h-[456px] overflow-y-auto p-4 bg-gray-50">  
                  {messages.map((message) => (  
                    <div  
                      key={message.id}  
                      className={`mb-4 flex ${  
                        message.type === 'user' ? 'justify-end' : 'justify-start'  
                      }`}  
                    >  
                      <div  
                        className={`max-w-[80%] p-3 rounded-lg ${  
                          message.type === 'user'  
                            ? 'bg-blue-600 text-white'  
                            : 'bg-white text-gray-800 shadow-sm'  
                        }`}  
                      >  
                        <div className="message-content" dangerouslySetInnerHTML={{ __html: formatMessage(message.content, message.type) }} />  
                        <div  
                          className={`text-xs mt-2 ${  
                            message.type === 'user' ? 'text-blue-100' : 'text-gray-400'  
                          }`}  
                        >  
                          {message.timestamp.toLocaleTimeString([], {  
                            hour: '2-digit',  
                            minute: '2-digit'  
                          })}  
                        </div>  
                      </div>  
                    </div>  
                  ))}  
                  {isTyping && (  
                    <div className="flex items-center space-x-2 text-gray-500 bg-white p-3 rounded-lg shadow-sm">  
                      <Loader2 className="animate-spin" size={20} />  
                      <span>L'assistant AfricoreAI rédige une réponse...</span>  
                    </div>  
                  )}  
                  <div ref={messagesEndRef} />  
                </div>  

                {/* Input */}  
                <div className="p-4 border-t">  
                  <div className="flex items-center space-x-2">  
                    <textarea  
                      value={inputMessage}  
                      onChange={(e) => setInputMessage(e.target.value)}  
                      onKeyPress={handleKeyPress}  
                      placeholder="Écrivez votre message..."  
                      className="flex-1 resize-none border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"  
                      rows={1}  
                    />  
                    <button  
                      onClick={handleSendMessage}  
                      disabled={!inputMessage.trim()}  
                      className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"  
                    >  
                      <Send size={20} />  
                    </button>  
                  </div>  
                </div>  
              </>  
            )}  
          </motion.div>  
        )}  
      </AnimatePresence>  
    </>  
  );  
};  

export default ChatBot;  

// Fonction pour formater le texte des messages  
const formatMessage = (content: string, type: 'user' | 'bot') => {  
  if (type === 'user') return content;  

  // Formatage pour les messages du bot  
  return content  
    .split('\n')  
    .map((line) => {  
      // Mise en forme des listes  
      if (line.startsWith('-')) {  
        return `<div class="flex items-center space-x-2 my-1">  
                  <span class="text-blue-500">•</span>  
                  <span>${line.substring(1)}</span>  
                </div>`;  
      }  
      // Mise en forme des mots en majuscules  
      line = line.replace(/([A-Z]{2,})/g, '<span class="font-semibold text-blue-600">$1</span>');  
      
      return `<div class="my-1">${line}</div>`;  
    })  
    .join('');  
};
