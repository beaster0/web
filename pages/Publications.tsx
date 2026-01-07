
import React from 'react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-20 px-8 text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">精选论文成果</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          我们的研究成果发表在国际顶级期刊上。我们强调科学结论的视觉传达。
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="flex flex-col h-full bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden bg-slate-200 relative">
                <img src={pub.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={pub.title} />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded text-[10px] font-bold text-slate-800 shadow-sm uppercase tracking-widest">
                    {pub.year} 年
                  </span>
                </div>
                {pub.isFeatured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 rounded text-[10px] font-bold text-white shadow-sm uppercase tracking-widest animate-pulse">
                      精选
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">{pub.journal}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2 italic">
                  {pub.authors}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                   <a 
                    href={`https://doi.org/${pub.doi}`} 
                    target="_blank" 
                    className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1"
                   >
                     DOI: {pub.doi}
                     <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                     </svg>
                   </a>
                   <button className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400" title="下载原文">
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                     </svg>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
