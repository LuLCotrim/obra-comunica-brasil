
import React from 'react';

const FloatingWhatsAppButton = () => {
  const whatsappLink = "https://wa.me/5543999441212?text=Ol%C3%A1!%20Como%20funciona%20para%20fazer%20a%20compra%20de%20materiais%20por%20aqui%3F";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img 
        src="/lovable-uploads/23105bc1-fd9b-4181-a0fc-ce643c654f87.png" 
        alt="WhatsApp" 
        className="w-8 h-8 sm:w-10 sm:h-10" 
      />
    </a>
  );
};

export default FloatingWhatsAppButton;
