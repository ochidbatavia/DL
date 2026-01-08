
import React from 'react';
import { TRANSLATIONS, getSolutions } from '../constants';
import { Solution } from '../types';

interface SolutionsProps {
  language: 'ID' | 'EN';
  onSelectSolution: (solution: Solution) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ language, onSelectSolution }) => {
  const t = TRANSLATIONS[language].solutions;
  const solutions = getSolutions(language);
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">{t.tag}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{t.title}</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">{t.desc}</p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div key={solution.id} className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={solution.image} alt={solution.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform" />
                <div className="absolute top-4 left-4 p-3 bg-white rounded-lg shadow-md text-red-600">{solution.icon}</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">{solution.description}</p>
                <button 
                  onClick={() => onSelectSolution(solution)}
                  className="inline-flex items-center font-semibold text-red-600 hover:text-red-700 transition-colors"
                >
                  {t.learnMore}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
