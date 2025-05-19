
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button'; // Assuming shadcn button is available

const Navbar = () => {
  const navItems = [
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Público', href: '#target-audience' },
  ];

  return (
    <header className="bg-co-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-co-purple-dark hover:text-co-purple-primary transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
          <Button 
            onClick={() => window.location.href = '#cta'}
            className="bg-co-purple-primary hover:bg-co-purple-secondary text-co-white"
          >
            Entre em Contato
          </Button>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button - can be implemented later */}
          <Button variant="outline" className="text-co-purple-primary border-co-purple-primary">Menu</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
