
import React from 'react';
import { Send, Zap, FileText } from 'lucide-react'; // Example icons

const steps = [
  {
    icon: <Send className="h-10 w-10 text-co-purple-primary mb-4" />,
    title: 'Envie sua Solicitação',
    description: 'Utilize o WhatsApp para enviar sua lista de materiais ou serviços de forma simples e rápida.',
  },
  {
    icon: <Zap className="h-10 w-10 text-co-purple-primary mb-4" />,
    title: 'IA em Ação',
    description: 'Nossa Inteligência Artificial processa, padroniza e encaminha sua solicitação aos fornecedores.',
  },
  {
    icon: <FileText className="h-10 w-10 text-co-purple-primary mb-4" />,
    title: 'Receba e Compare',
    description: 'Receba cotações organizadas, compare preços facilmente e tome a melhor decisão para sua obra.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-co-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-co-purple-dark mb-4">Como Funciona? É Simples!</h2>
          <p className="text-lg text-co-purple-dark/80 max-w-2xl mx-auto">
            Otimizar suas compras nunca foi tão fácil. Veja como o Comunica Obra transforma seu processo de cotação:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-co-gray-light p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              {step.icon}
              <h3 className="text-xl font-semibold text-co-purple-dark mb-2">{step.title}</h3>
              <p className="text-co-purple-dark/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
