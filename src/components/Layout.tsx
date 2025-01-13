import React from 'react';
import Header from './Layout/Header/Header';
import ChatBot from './ChatBot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <ChatBot />
    </div>
  );
};

export default Layout;