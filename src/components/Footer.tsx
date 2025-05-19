
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-co-gray-light border-t border-co-purple-dark/10 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-co-purple-dark/70">
        <div className="mb-4">
          <Logo />
        </div>
        <p className="text-sm">
          &copy; {currentYear} Comunica Obra. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
          Simplificando a construção, uma cotação por vez.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
