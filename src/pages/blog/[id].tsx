
// src/pages/blog/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import { blogPosts, BlogPost } from '../../data/blogPosts';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const ArticlePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const post: BlogPost | undefined = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#151822]">
        <h1 className="text-3xl text-white">Article non trouvé</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#151822]">
      {/* Header Section */}
      <motion.section
        className="relative py-16 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-green-600/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex justify-center items-center text-gray-400 mb-6">
              <span className="flex items-center mr-4">
                <ArrowLeft className="h-5 w-5 mr-1" />
                {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center">
                <ArrowLeft className="h-5 w-5 mr-1" />
                {post.author}
              </span>
            </div>
            <img src={post.coverImage} alt={post.title} className="w-full h-64 object-cover rounded-lg" />
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        className="py-12 bg-[#1a1f2d]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="prose prose-lg prose-teal text-gray-300 max-w-none">
            {post.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index}>{line.replace('# ', '')}</h1>;
              } else if (line.startsWith('## ')) {
                return <h2 key={index}>{line.replace('## ', '')}</h2>;
              } else if (line.startsWith('### ')) {
                return <h3 key={index}>{line.replace('### ', '')}</h3>;
              } else {
                return <p key={index}>{line}</p>;
              }
            })}
          </div>
        </div>
      </motion.section>

      {/* Back to Blog Button */}
      <motion.div
        className="py-8 bg-gradient-to-br from-teal-900/30 via-green-900/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.button
            onClick={() => router.push('/blog')}
            className="inline-flex items-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Retour au Blog</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ArticlePage;

