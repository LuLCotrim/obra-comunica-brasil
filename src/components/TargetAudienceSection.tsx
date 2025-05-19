
import React from 'react';
import { Building, User, Wrench } from 'lucide-react';

const audiences = [
  {
    icon: <Building className="h-10 w-10 text-co-purple-primary mb-3" />,
    name: 'Construtoras e Empreiteiras',
    description: 'Otimize o fluxo de compras de grande volume e melhore a gestão de custos.',
  },
  {
    icon: <User className="h-10 w-10 text-co-purple-primary mb-3" />, // Representing engineer/admin
    name: 'Engenheiros e Administradores de Obras',
    description: 'Ganhe agilidade e precisão nas cotações para um planejamento impecável.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-co-purple-primary mb-3" />, // Representing general public/small projects
    name: 'Síndicos e Público Geral',
    description: 'Facilite pequenas reformas e manutenções com cotações rápidas e comparáveis.',
  },
];

const TargetAudienceSection = () => {
  return (
    <section id="target-audience" className="py-16 md:py-24 bg-co-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-co-purple-dark mb-4">Para Quem é o Comunica Obra?</h2>
          <p className="text-lg text-co-purple-dark/80 max-w-2xl mx-auto">
            Nossa plataforma é ideal para todos que buscam eficiência e economia na compra de materiais e serviços de engenharia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-co-gray-light p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              {audience.icon}
              <h3 className="text-xl font-semibold text-co-purple-dark mb-2">{audience.name}</h3>
              <p className="text-co-purple-dark/70">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
