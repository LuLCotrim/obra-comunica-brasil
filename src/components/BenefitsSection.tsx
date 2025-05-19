
import React from 'react';
import { Check, Users, Hammer, MessageSquare } from 'lucide-react'; // Using Hammer as a generic construction icon

const benefits = [
  {
    icon: <Check className="h-8 w-8 text-green-500" />,
    title: 'Economia Real',
    description: 'Compare preços de forma eficiente e encontre as melhores ofertas, reduzindo custos na sua obra.',
  },
  {
    icon: <Users className="h-8 w-8 text-co-purple-primary" />,
    title: 'Agilidade Total',
    description: 'Automatize o processo de cotação e receba respostas rápidas, economizando horas de trabalho.',
  },
  {
    icon: <Hammer className="h-8 w-8 text-orange-500" />,
    title: 'Menos Desperdício',
    description: 'Planeje suas compras com precisão e evite sobras de material, contribuindo para uma obra mais sustentável.',
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
    title: 'Comunicação Eficaz',
    description: 'Padronize suas solicitações e melhore a clareza na comunicação com todos os fornecedores.',
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-co-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-co-purple-dark mb-4">Vantagens que Constroem Resultados</h2>
          <p className="text-lg text-co-purple-dark/80 max-w-2xl mx-auto">
            Descubra como o Comunica Obra pode transformar a gestão de compras da sua construção:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-co-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {benefit.icon}
                <h3 className="ml-3 text-xl font-semibold text-co-purple-dark">{benefit.title}</h3>
              </div>
              <p className="text-co-purple-dark/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
