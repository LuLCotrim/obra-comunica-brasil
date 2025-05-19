
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react'; // Phone e Mail não são mais usados, mas MessageSquare sim.

const CTASection = () => {
  return (
    <section id="cta" className="py-16 md:py-24 bg-co-blue-dark text-co-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Pronto para Transformar suas Compras?</h2>
        <p className="text-lg text-co-white/80 max-w-xl mx-auto mb-10">
          Entre em contato conosco e descubra como o Comunica Obra pode otimizar seu tempo e seus custos.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            size="lg"
            className="bg-co-yellow text-co-blue-dark hover:bg-co-yellow/90 group w-full sm:w-auto"
            onClick={() => window.open('https://wa.me/5543999441212?text=Ol%C3%A1!%20Como%20funciona%20para%20fazer%20a%20compra%20de%20materiais%20por%20aqui%3F', '_blank')}
          >
            <MessageSquare className="mr-2 h-5 w-5" /> Iniciar via WhatsApp
          </Button>
          {/* O botão de E-mail foi removido daqui */}
        </div>
        <p className="mt-8 text-co-white/70 text-sm">
          Ou salve o número do WhatsApp (43) 99944-1212
        </p>
      </div>
    </section>
  );
};

export default CTASection;
