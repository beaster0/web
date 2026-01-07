
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { PUBLICATIONS, RESEARCH_DIRECTIONS } from '../constants';

const PageSection: React.FC<{ children: React.ReactNode; bgClass?: string }> = ({ children, bgClass = "bg-white" }) => {
  return (
    <section className={`w-full ${bgClass} py-24 md:py-40 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  const featuredPub = PUBLICATIONS.find(p => p.isFeatured) || PUBLICATIONS[0];
  
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgImageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const smoothOpacity = useSpring(heroOpacity, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-slate-950 overflow-hidden">
      
      {/* 1. ACADEMIC HERO SECTION */}
      <section 
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center bg-slate-950 overflow-hidden py-16" 
      >
        <motion.div 
          style={{ scale: heroScale, y: bgImageY }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <div className="absolute inset-0 academic-grid opacity-30"></div>
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 2 }}
            src="https://images.unsplash.com/photo-1532187863486-abf91ad1b099?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover mix-blend-luminosity grayscale" 
            alt="Research Ambience"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950"></div>
        </motion.div>
        
        <div className="relative z-20 text-center px-4 max-w-7xl mx-auto w-full">
          <motion.div style={{ opacity: smoothOpacity, y: heroTextY }}>
            
            {/* NEW: University Header - High Visibility */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mb-8 md:mb-10"
            >
               <div className="flex items-center gap-3">
                 <span className="text-2xl md:text-3xl font-black text-white tracking-widest shadow-black drop-shadow-lg">北京交通大学</span>
               </div>
               <span className="hidden md:block w-px h-6 bg-slate-600"></span>
               <div className="flex items-center gap-3">
                 <span className="text-xl md:text-2xl font-bold text-slate-300 tracking-wider shadow-black drop-shadow-md">物理科学与工程学院</span>
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-flex items-center gap-4 px-6 py-2 bg-blue-500/5 border border-blue-400/20 backdrop-blur-xl rounded-full mb-6 md:mb-8"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_15px_#3b82f6]"></div>
              <span className="text-blue-200 text-[11px] font-bold tracking-[0.4em] uppercase">北京市重点实验室 · BEIJING KEY LABORATORY</span>
            </motion.div>
            
            {/* Boxed Title Style */}
            <div className="flex flex-col items-center gap-3 mb-8 md:mb-10">
               <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white px-6 py-2 md:px-12 md:py-4 transform -skew-x-6"
               >
                 <h1 className="text-4xl sm:text-5xl md:text-[6rem] lg:text-[7.5rem] font-black text-slate-950 leading-none tracking-tighter skew-x-6">
                   高分子材料
                 </h1>
               </motion.div>
               
               <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2 md:px-12 md:py-4 transform -skew-x-6 shadow-[0_20px_50px_rgba(37,99,235,0.3)]"
               >
                 <h1 className="text-4xl sm:text-5xl md:text-[6rem] lg:text-[7.5rem] font-black text-white leading-none tracking-tighter skew-x-6">
                   基因组工程
                 </h1>
               </motion.div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.9 }}
              className="text-base md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed tracking-wide px-4"
            >
              融合多尺度计算模拟、高通量合成制备与精准实验表征，<br className="hidden md:block" />
              构建数据驱动的高分子研发新体系，加速跨尺度材料设计的智能化进程。
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-col md:flex-row justify-center items-center gap-6"
            >
              {/* Button 1: Research (White to Blue) */}
              <Link to="/research" className="group relative w-72 h-16 flex items-center justify-center bg-white rounded-xl overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer z-30">
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                
                {/* Chinese Text (Fades Out) */}
                <span className="relative z-10 text-slate-950 font-black text-lg group-hover:opacity-0 transition-opacity duration-200">
                  进入研究范式
                </span>
                
                {/* English Text (Fades In & Moves Up) */}
                <span className="absolute z-20 inset-0 flex items-center justify-center text-white font-black text-xs tracking-[0.2em] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  DISCOVER MGE
                </span>
              </Link>

              {/* Button 2: Database (Transparent to White) */}
              <Link to="/database" className="group relative w-72 h-16 flex items-center justify-center bg-slate-900/40 border border-white/20 backdrop-blur-md rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 hover:border-white/50 cursor-pointer z-30">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                
                {/* Chinese Text (Fades Out) */}
                <span className="relative z-10 text-white font-bold text-lg group-hover:opacity-0 transition-opacity duration-200">
                  访问基因组数据库
                </span>
                
                {/* English Text (Fades In & Moves Up) */}
                <span className="absolute z-20 inset-0 flex items-center justify-center text-slate-950 font-black text-xs tracking-[0.2em] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  ACCESS DATABASE
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Positioned securely at bottom with lower z-index */}
        <motion.div 
          style={{ opacity: smoothOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none z-10"
        >
          <span className="text-[9px] text-slate-500 font-black tracking-[0.5em] uppercase">Scroll</span>
          <div className="w-px h-12 md:h-16 bg-gradient-to-b from-blue-500/50 via-blue-500/10 to-transparent"></div>
        </motion.div>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <div className="relative z-20">
        <PageSection bgClass="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <div className="inline-block px-4 py-1 bg-blue-50 text-blue-700 text-[10px] font-black tracking-[0.3em] uppercase rounded mb-8">Lab Philosophy</div>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tighter">
                从计算探索<br/><span className="text-blue-600">到物理现实</span>
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed mb-12 font-light">
                实验室致力于攻克关键工程应用中的高分子材料瓶颈。通过材料基因组工程（MGE）方法论，我们建立了一套涵盖理论模拟、自动化合成及原位表征的数字化全生命周期研发流程。
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div className="border-t border-slate-100 pt-8">
                  <div className="text-4xl font-black text-slate-900 mb-2">150+</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Authorized Patents</div>
                </div>
                <div className="border-t border-slate-100 pt-8">
                  <div className="text-4xl font-black text-slate-900 mb-2">10X</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">R&D Efficiency</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative group"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1530639834082-05bafb67dfbe?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Core Experiment" />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl max-w-xs hidden md:block border border-white/10">
                <p className="italic text-slate-300 font-light text-base leading-relaxed">“数字化时代的材料研发，不仅是实验的累积，更是算法与物质的深度共鸣。”</p>
              </div>
            </motion.div>
          </div>
        </PageSection>
      </div>

      {/* 3. DIRECTIONS - Scientific Matrix */}
      <PageSection bgClass="bg-slate-50">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1 bg-slate-200 text-slate-600 text-[10px] font-black tracking-[0.3em] uppercase rounded mb-6">Scientific Matrix</div>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">核心科研矩阵</h3>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {RESEARCH_DIRECTIONS.map((dir, i) => (
            <motion.div 
              key={dir.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="bg-white p-12 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="text-blue-600 font-black text-6xl opacity-10 mb-8 group-hover:opacity-20 transition-opacity italic">0{i+1}</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">{dir.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-12 font-light line-clamp-3">{dir.description}</p>
              <Link to="/research" className="inline-flex items-center gap-2 text-blue-600 text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                Explore Core <span className="text-lg">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </PageSection>

      {/* 4. PUBLICATION - Academic Spotlight */}
      <PageSection bgClass="bg-slate-950">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-[4rem] overflow-hidden bg-slate-900/50 shadow-3xl min-h-[60vh] flex items-center border border-white/5"
        >
          <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-15" alt="Publication Spotlight" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
          
          <div className="relative z-10 p-12 lg:p-28 max-w-4xl">
             <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black rounded mb-10 tracking-[0.2em]">
               LATEST TOP JOURNAL
             </div>
             <h3 className="text-4xl md:text-6xl font-black text-white mb-10 leading-[1.1] tracking-tighter">
               {featuredPub.title}
             </h3>
             <p className="text-slate-400 text-xl mb-14 italic font-light tracking-wide">{featuredPub.authors}</p>
             <div className="flex flex-wrap gap-8">
                <a href={`https://doi.org/${featuredPub.doi}`} target="_blank" className="px-10 py-5 bg-white text-slate-950 font-black rounded-xl hover:bg-blue-400 hover:text-white transition-all">
                  Read Full Paper
                </a>
                <Link to="/publications" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm">
                  Publications Library
                </Link>
             </div>
          </div>
        </motion.div>
      </PageSection>

      {/* 5. FOOTER & CTA */}
      <section className="bg-slate-950 pt-32">
        <div className="max-w-5xl mx-auto px-4 text-center mb-40">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
           >
             <h3 className="text-5xl md:text-8xl font-black text-white mb-14 tracking-tighter leading-none">共绘材料基因蓝图</h3>
             <p className="text-slate-400 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
               实验室长期面向全球招募具有材料学、物理学、AI算法等跨学科背景的博士后及研究生。
             </p>
             <div className="flex flex-wrap justify-center gap-8">
                <Link to="/people" className="px-12 py-6 bg-white text-slate-950 font-black rounded-xl hover:scale-105 transition-all shadow-2xl">
                  Meet Our Team
                </Link>
                <a href="mailto:lab@bjtu.edu.cn" className="px-12 py-6 bg-blue-800 text-white font-black rounded-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900/40">
                  Contact PI
                </a>
             </div>
           </motion.div>
        </div>
        
        <div className="w-full bg-slate-900/20 py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] gap-8 font-bold uppercase tracking-[0.3em]">
            <div className="flex items-center gap-8">
               <span className="text-slate-200 font-black text-sm tracking-tighter">BJTU POLYMER GENOME</span>
               <span className="hidden md:block w-px h-6 bg-slate-800"></span>
               <span>北京市重点实验室</span>
            </div>
            <div className="flex gap-12">
              <a href="https://phy.bjtu.edu.cn" target="_blank" className="hover:text-blue-400 transition-colors">College of Physics</a>
              <p>© 2024 · Lab Academic Site</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
