
import React from 'react';
import { RESEARCH_DIRECTIONS } from '../constants';

const Research: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-32 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-600 opacity-20 mix-blend-multiply"></div>
          <img src="https://picsum.photos/seed/res-banner/1920/600" className="w-full h-full object-cover opacity-30" alt="Research Background" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">研究全景图</h1>
          <p className="text-slate-300 text-xl font-light">
            我们致力于填补虚拟理论与实体制造之间的鸿沟。我们的工作是一个发现的闭环系统。
          </p>
        </div>
      </div>

      {/* Directions List */}
      <div className="max-w-7xl mx-auto">
        {RESEARCH_DIRECTIONS.map((dir, index) => (
          <div key={dir.id} className={`${dir.color} py-32 px-8 border-b border-slate-100 last:border-0`}>
            <div className={`flex flex-col md:flex-row items-center gap-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Section */}
              <div className="flex-1 w-full">
                <div className="group relative rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                  <img src={dir.imageUrl} className="w-full aspect-video object-cover" alt={dir.title} />
                  <div className="absolute bottom-6 left-6 z-20 text-white">
                    <span className="text-sm font-bold uppercase tracking-widest text-blue-400">项目 {dir.id.toUpperCase()}</span>
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="flex-1 space-y-8">
                <div>
                  <div className="text-6xl font-black text-slate-100 mb-2 leading-none">0{index + 1}</div>
                  <h2 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">{dir.title}</h2>
                  <h3 className="text-xl text-blue-600 font-semibold mb-6">{dir.subtitle}</h3>
                  <div className="h-1 w-20 bg-blue-600 rounded"></div>
                </div>
                
                <p className="text-slate-600 leading-relaxed text-lg">
                  {dir.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {dir.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-6">
                  <button className="px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all flex items-center gap-3 group">
                    查看相关项目
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
      
      {/* Visual Roadmap Placeholder */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">集成工作流</h2>
          <div className="aspect-[21/9] bg-slate-800 rounded-3xl flex items-center justify-center border border-slate-700 shadow-inner">
             <div className="text-slate-500 font-bold italic text-2xl">
               [ 交互式工作流图：计算 → 合成 → 表征 ]
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
