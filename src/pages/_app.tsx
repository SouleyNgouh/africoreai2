import "@/styles/globals.css";  
import type { AppProps } from "next/app";  
import ChatBot from "@/components/ChatBot";  
import { useState, useEffect } from "react";  

export default function App({ Component, pageProps }: AppProps) {  
  const [isMounted, setIsMounted] = useState(false);  

  useEffect(() => {  
    setIsMounted(true);  
  }, []);  

  return (  
    <>  
      <Component {...pageProps} />  
      {isMounted && <ChatBot />}  
    </>  
  );  
}