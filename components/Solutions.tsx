
import React from 'react';
import { SOLUTIONS } from '../constants';

const Solutions: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#3dcd58] font-semibold tracking-wide uppercase">Solusi Kami</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Inovasi di Setiap Level
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Teknologi terintegrasi yang dirancang untuk efisiensi, keandalan, dan keberlanjutan bisnis Anda.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <div key={solution.id} className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 p-3 bg-white rounded-lg shadow-md text-[#3dcd58]">
                  {solution.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-semibold text-[#3dcd58] hover:text-[#34b14b]"
                >
                  Pelajari lebih lanjut
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
