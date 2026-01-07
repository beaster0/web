
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-32 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://picsum.photos/seed/bjtu-campus/1920/600" className="w-full h-full object-cover" alt="BJTU Campus" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">Established [20XX] · Beijing</div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">实验室概况</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            依托北京交通大学物理科学与工程学院，[此处填写实验室/中心全称] 致力于 XXXX 前沿领域的学术探索，是学院科研创新的重要基地。
          </p>
        </div>
      </div>

      {/* PI Spotlight */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-slate-50 rounded-full -z-10"></div>
              <img 
                src="https://picsum.photos/seed/faculty-placeholder/800/1000" 
                className="w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                alt="PI Placeholder" 
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-10">
            <div>
              <h2 className="text-blue-700 font-black uppercase tracking-[0.2em] text-xs mb-3">Principal Investigator</h2>
              <h3 className="text-5xl font-extrabold text-slate-900 mb-6">[PI 姓名]</h3>
              <div className="h-1.5 w-20 bg-blue-700 mb-8 rounded-full"></div>
              <p className="text-2xl italic text-slate-400 font-light border-l-4 border-blue-700 pl-8 my-10">
                “[此处填写 PI 的个人科研格言或治学理念，体现物理学家的追求。]”
              </p>
            </div>
            <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
              <p>
                [此处填写 PI 的学术头衔、社会兼职。例如：国家杰出青年科学基金获得者、北京交通大学教授、博士生导师。]
              </p>
              <p>
                [此处简述 PI 的研究方向、学术影响力。长期致力于 XXXX 研究，在 Nature/Science 等国际学术期刊发表论文 XXX 余篇，获省部级奖项 XXX 项。]
              </p>
            </div>
            <div className="pt-6">
              <button className="px-10 py-4 bg-slate-950 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center gap-3 shadow-lg shadow-slate-200">
                下载个人简历 / View Full CV
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lab History / Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">实验室发展里程碑</h2>
            <p className="text-slate-500">从初创到成长，我们每一步都走得坚定有力。</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-200"></div>
            
            <div className="space-y-24">
              {/* Year 1 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-700 border-4 border-white shadow-md"></div>
                  <div className="grid grid-cols-2 w-full">
                    <div className="text-right pr-12">
                      <span className="text-3xl font-black text-slate-300">[20XX]</span>
                    </div>
                    <div className="pl-12">
                      <h4 className="font-bold text-xl mb-2">[成立里程碑]</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">[此处填写事件描述，例如：实验室在物理学院正式挂牌成立，首批成员入驻。]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Year 2 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-700 border-4 border-white shadow-md"></div>
                  <div className="grid grid-cols-2 w-full">
                    <div className="text-right pr-12">
                      <h4 className="font-bold text-xl mb-2">[荣誉里程碑]</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">[此处填写事件描述，例如：获批省部级重点实验室，科研条件大幅提升。]</p>
                    </div>
                    <div className="pl-12">
                       <span className="text-3xl font-black text-slate-300">[20XX]</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Year 3 */}
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-700 border-4 border-white shadow-md"></div>
                  <div className="grid grid-cols-2 w-full">
                    <div className="text-right pr-12">
                      <span className="text-3xl font-black text-slate-300">[20XX]</span>
                    </div>
                    <div className="pl-12">
                      <h4 className="font-bold text-xl mb-2">[学术里程碑]</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">[此处填写事件描述，例如：在 XXX 期刊发表首篇具有重大国际影响力的封面文章。]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation Section */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs mb-12">Affiliations & Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-30">
             <div className="flex flex-col items-center">
               <div className="text-lg font-bold text-slate-900 mb-1">BJTU</div>
               <div className="text-[10px] uppercase font-bold text-slate-400">北京交通大学</div>
             </div>
             <div className="flex flex-col items-center">
               <div className="text-lg font-bold text-slate-900 mb-1">SPSE</div>
               <div className="text-[10px] uppercase font-bold text-slate-400">物理科学与工程学院</div>
             </div>
             <div className="flex flex-col items-center">
               <div className="text-lg font-bold text-slate-900 mb-1">NSFC</div>
               <div className="text-[10px] uppercase font-bold text-slate-400">国家自然科学基金委</div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
