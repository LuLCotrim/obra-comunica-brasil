
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  // Assuming the placeholder image is available at this path.
  // The placeholder_images context provided 'photo-1488590528505-98d2b5aba04b'
  const backgroundImageUrl = '/placeholder_images/photo-1488590528505-98d2b5aba04b.jpg';

  return (
    <section 
      id="hero" 
      className="relative bg-cover bg-center py-20 md:py-32"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-co-purple-dark bg-opacity-60"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-co-white mb-6">
          Revolucione suas cotações de<br className="hidden sm:block" /> materiais de construção.
        </h1>
        <p className="text-lg sm:text-xl text-co-gray-light max-w-3xl mx-auto mb-10">
          Com o Comunica Obra, utilize WhatsApp e Inteligência Artificial para automatizar, padronizar e agilizar suas compras. Economize tempo, dinheiro e evite desperdícios.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            size="lg" 
            onClick={() => window.location.href = '#how-it-works'}
            className="bg-co-purple-primary hover:bg-co-purple-secondary text-co-white group w-full sm:w-auto"
          >
            Descubra Como <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.location.href = '#cta'}
            className="border-co-white text-co-white hover:bg-co-white hover:text-co-purple-primary w-full sm:w-auto"
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
