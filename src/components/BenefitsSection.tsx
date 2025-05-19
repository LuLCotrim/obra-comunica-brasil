
import React from 'react';
import { Check, Clock, DollarSign } from 'lucide-react'; // Ícones atualizados

const benefits = [
  {
    icon: <DollarSign className="h-8 w-8 text-green-500" />,
    title: 'Economia',
    description: 'Compare preços de forma eficiente, encontre as melhores ofertas e planeje suas compras com precisão para reduzir custos e evitar desperdícios.',
  },
  {
    icon: <Clock className="h-8 w-8 text-co-purple-primary" />,
    title: 'Agilidade',
    description: 'Automatize o processo de cotação, receba respostas rápidas e padronize suas solicitações, melhorando a comunicação e economizando horas de trabalho.',
  },
  {
    icon: <Check className="h-8 w-8 text-blue-500" />, // Usando a cor que estava no ícone de comunicação
    title: 'Confiança',
    description: 'Melhore a clareza na comunicação com todos os fornecedores, padronizando suas solicitações e construindo um processo transparente e confiável.',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Layout ajustado para 3 colunas */}
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-co-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="flex items-center mb-4">
                {benefit.icon}
                <h3 className="ml-3 text-xl font-semibold text-co-purple-dark">{benefit.title}</h3>
              </div>
              <p className="text-co-purple-dark/70 flex-grow">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
