
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const backgroundImageUrl = "/lovable-uploads/099176ba-112c-4d60-8179-30b22cde9a23.png"; // Nova imagem de fundo

  return (
    <section id="hero" className="relative py-20 md:py-32 text-co-white">
      {/* Background Image and Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />
      <div className="absolute inset-0 z-10 bg-co-purple-dark/75" /> {/* Mantém o overlay escuro para contraste */}

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          Revolucione suas cotações de<br className="hidden sm:block" /> materiais de construção.
        </h1>
        <p className="text-lg sm:text-xl text-co-white/90 max-w-3xl mx-auto mb-10">
          Com o Comunica Obra, utilize WhatsApp e Inteligência Artificial para automatizar, padronizar e agilizar suas compras. Economize tempo, dinheiro e evite desperdícios.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            size="lg" 
            onClick={() => window.location.href = '#how-it-works'}
            className="bg-co-yellow text-co-blue-dark hover:bg-co-yellow/90 group w-full sm:w-auto" // Botão amarelo mantido
          >
            Descubra Como <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            onClick={() => window.location.href = '#cta'}
            className="bg-co-blue-dark text-co-white hover:bg-co-blue-dark/90 w-full sm:w-auto" // Botão "Fale Conosco" ajustado
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
