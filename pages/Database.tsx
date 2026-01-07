
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 声明全局 window 对象上的 SmilesDrawer
declare global {
  interface Window {
    SmilesDrawer: any;
  }
}

// 定义化学数据接口
interface ChemicalEntry {
  cas: string;
  nameEn: string;
  nameCn: string;
  formula: string;
  mw: string; // Molecular Weight
  properties: string; // Changed from category to properties string
  smiles: string; // SMILES string for structure drawing
}

// 分子结构绘制组件
const MoleculeViewer: React.FC<{ smiles: string; cas: string }> = ({ smiles, cas }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 初始化绘图
  useEffect(() => {
    if (window.SmilesDrawer && canvasRef.current && wrapperRef.current && smiles) {
       const wrapper = wrapperRef.current;
       const canvas = canvasRef.current;
       
       // 获取容器尺寸
       const width = wrapper.clientWidth || 400;
       const height = wrapper.clientHeight || 300;
       
       // 处理高清屏 (Retina Display)
       const pixelRatio = window.devicePixelRatio || 2; // 强制至少 2x 使得线条更锐利
       canvas.width = width * pixelRatio;
       canvas.height = height * pixelRatio;
       canvas.style.width = `${width}px`;
       canvas.style.height = `${height}px`;

       // 学术风格配置 (ChemDraw / ACS Style)
       const options = {
         width: width * pixelRatio,
         height: height * pixelRatio,
         scale: 0, // 自动缩放以适应画布
         bondThickness: 1.2 * pixelRatio,      // 适中的线条粗细
         bondLength: 20 * pixelRatio,          // 较短的键长使分子更紧凑精致
         shortBondLength: 0.85,
         bondSpacing: 0.18 * 20 * pixelRatio,  // 双键间距
         atomVisualization: 'default',
         isomeric: true,
         debug: false,
         terminalCarbons: false,               // 关闭末端碳显示 (骨架式结构更专业)
         explicitHydrogens: true,              // 显示杂原子上的氢
         overlapSensitivity: 0.42,
         overlapResolutionIterations: 5,       // 增加迭代减少重叠
         fontSizeLarge: 8 * pixelRatio,        // 字体大小
         fontSizeSmall: 5 * pixelRatio,
         padding: 25 * pixelRatio,
         colorBond: '#334155',                 // Slate-700 (深灰而非纯黑，更柔和)
         colorAtom: '#334155',                 
         backgroundColor: '#ffffff',           // 纯白背景
         fontFamily: 'Times New Roman, serif', // 使用衬线体，更有学术刊物质感
         themes: {
            light: {
                C: '#334155', 
                O: '#dc2626', // Red-600 (Classic CPK Red)
                N: '#1d4ed8', // Blue-700 (Classic CPK Blue)
                F: '#15803d', // Green-700
                Cl: '#15803d',
                Br: '#b45309', // Amber-700
                I: '#7e22ce', // Purple-700
                S: '#d97706', // Yellow/Orange
                P: '#ea580c'  
            }
         }
       };
       
       try {
         const drawer = new window.SmilesDrawer.Drawer(options);
         window.SmilesDrawer.parse(smiles, (tree: any) => {
           // 绘制白色背景
           const ctx = canvas.getContext('2d');
           if (ctx) {
             ctx.fillStyle = '#FFFFFF';
             ctx.fillRect(0, 0, canvas.width, canvas.height);
           }
           drawer.draw(tree, canvas, 'light', false);
         }, (err: any) => {
           console.error('SmilesDrawer Parse Error:', err);
         });
       } catch (e) {
         console.error('SmilesDrawer Init Error:', e);
       }
    }
  }, [smiles]);

  // 下载功能
  const downloadImage = () => {
    if (canvasRef.current) {
        const link = document.createElement('a');
        link.download = `${cas}_Structure.png`;
        link.href = canvasRef.current.toDataURL('image/png', 1.0);
        link.click();
    }
  };

  return (
    <div className="relative group w-full h-full flex items-center justify-center bg-white">
        <div ref={wrapperRef} className="w-full h-full flex items-center justify-center">
            <canvas ref={canvasRef} className="block max-w-full max-h-full" />
        </div>
        
        {/* 悬浮下载按钮 - 样式优化 */}
        <button 
            onClick={downloadImage}
            className="absolute bottom-4 right-4 flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-200"
        >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            导出图片
        </button>
    </div>
  );
};

const Database: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMol, setSelectedMol] = useState<ChemicalEntry | null>(null);
  
  // 数据来源 - 更新 properties 字段为中文
  const mockData: ChemicalEntry[] = [
    { 
      cas: '82212-14-4', 
      nameEn: '4-Amino-2-chloro-5-(1H-tetrazol-5-yl)benzenesulfonamide', 
      nameCn: '5-(2-氨基-4-氯-5-苯磺酰胺)-1H-四唑', 
      formula: 'C7H7ClN6O2S', 
      mw: '274.69', 
      properties: '密度: 1.8±0.1 g/cm3 | 沸点: 633.9±65.0 °C (760 mmHg) | pKa: 3.42±0.10',
      smiles: 'NS(=O)(=O)c1cc(c(Cl)cc1N)c2[nH]nnn2'
    },
    { 
      cas: '58068-80-7', 
      nameEn: 'N-octanoyl benzotriazole', 
      nameCn: 'n-辛酰苯并三唑', 
      formula: 'C14H19N3O', 
      mw: '245.32', 
      properties: '密度: 1.1±0.1 g/cm3 | 沸点: 379.3±25.0 °C | 熔点: 38-40 °C',
      smiles: 'CCCCCCCC(=O)n1nnc2ccccc12'
    },
    { 
      cas: '175202-26-3', 
      nameEn: '3-Chloro-4-(isopropylsulfonyl)thiophene-2-carboxylic acid', 
      nameCn: '3-氯-4-(异丙基磺酰基)噻吩-2-羧酸', 
      formula: 'C8H9ClO4S2', 
      mw: '268.74', 
      properties: '密度: 1.5±0.1 g/cm3 | 沸点: 450.2±45.0 °C | pKa: 2.85±0.10',
      smiles: 'CC(C)S(=O)(=O)c1c(Cl)c(s1)C(=O)O'
    },
    { 
      cas: '92878-95-0', 
      nameEn: '2-(3-Chloropropoxy)-1-methoxy-4-nitrobenzene', 
      nameCn: '2-(3-氯丙氧基)-1-甲氧基-4-硝基苯', 
      formula: 'C10H12ClNO4', 
      mw: '245.66', 
      properties: '密度: 1.3±0.1 g/cm3 | 沸点: 388.3±27.0 °C | 熔点: 62-64 °C',
      smiles: 'COc1cc([N+](=O)[O-])ccc1OCCCCl'
    },
    { 
      cas: '16490-02-1', 
      nameEn: '4,6-Pyrimidinedicarboxylic acid', 
      nameCn: '嘧啶-4,6-二羧酸', 
      formula: 'C6H4N2O4', 
      mw: '168.11', 
      properties: '密度: 1.7±0.1 g/cm3 | 沸点: 497.4±30.0 °C | pKa: 1.58±0.10',
      smiles: 'OC(=O)c1cc(ncn1)C(=O)O'
    },
    { 
      cas: '69099-99-6', 
      nameEn: '6-Amino-5-nitro-2(1H)-pyrimidinone', 
      nameCn: '6-氨基-5-硝基-2(1H)-嘧啶', 
      formula: 'C4H4N4O3', 
      mw: '156.10', 
      properties: '密度: 2.02 g/cm3 | 沸点: 553.4°C (760 mmHg) | 熔点: >300 °C',
      smiles: 'Nc1nc(=O)[nH]cc1[N+](=O)[O-]'
    },
    { 
      cas: '109715-12-0', 
      nameEn: '5-(p-Toluenesulfonate)-2,3-O-isopropylidene-2-C-methyl-D-ribonolactone', 
      nameCn: '5-(对甲苯磺酰基)-2,3-O-异丙亚基-2-C-甲基-D-核糖酸内酯', 
      formula: 'C15H18O7S', 
      mw: '342.36', 
      properties: '密度: 1.293 g/cm3 | 沸点: N/A | 熔点: 98-100 °C',
      smiles: 'Cc1ccc(S(=O)(=O)OC[C@@]2(C)OC(=O)[C@@H]3OC(C)(C)O[C@H]23)cc1'
    },
    { 
      cas: '704911-47-7', 
      nameEn: 'Methyl 5-bromo-1H-1,2,4-triazole-3-carboxylate', 
      nameCn: '5-溴-1,2,4-三唑-3-甲酸甲酯', 
      formula: 'C4H4BrN3O2', 
      mw: '205.99', 
      properties: '密度: 1.902±0.06 g/cm3 | 沸点: 352.1±32.0 °C | pKa: 6.81±0.20',
      smiles: 'COC(=O)c1nc(Br)[nH]n1'
    },
    { 
      cas: '77077-83-9', 
      nameEn: '4-Methyl-2H-isoquinolin-1-one', 
      nameCn: '4-甲基-1(2H)-异喹啉酮', 
      formula: 'C10H9NO', 
      mw: '159.19', 
      properties: '密度: 1.22±0.1 g/cm3 | 沸点: 360.5±0.0 °C | 熔点: 218-220 °C',
      smiles: 'Cc1c[nH]c(=O)c2ccccc12'
    },
    { 
      cas: '62484-16-6', 
      nameEn: '6-Methyl-2,4(1H,3H)-quinazolinedione', 
      nameCn: '6-甲基喹唑啉-2,4-二酮', 
      formula: 'C9H8N2O2', 
      mw: '176.17', 
      properties: '密度: 1.3±0.1 g/cm3 | 沸点: N/A | 熔点: >300 °C',
      smiles: 'Cc1ccc2[nH]c(=O)[nH]c(=O)c2c1'
    },
    { 
      cas: '848691-22-5', 
      nameEn: '5-Amino[1,3]thiazolo[4,5-d]pyrimidin-2(3H)-one', 
      nameCn: '5-氨基噻唑并[4,5-d]嘧啶-2(3H)-酮', 
      formula: 'C5H4N4OS', 
      mw: '168.18', 
      properties: '密度: 1.7±0.1 g/cm3 | 沸点: N/A | pKa: 7.5±0.2',
      smiles: 'Nc1nc2sc(=O)[nH]c2cn1'
    },
    { 
      cas: '13480-95-0', 
      nameEn: '2-Ethylthio-5-methyl-3H-pyrimidin-4-one', 
      nameCn: '2-乙基硫代-5-甲基-3H-嘧啶-4-酮', 
      formula: 'C7H10N2OS', 
      mw: '170.23', 
      properties: '密度: 1.25 g/cm3 | 沸点: 274.4°C (760 mmHg) | 熔点: 135-138 °C',
      smiles: 'CCSc1nc(O)cc(C)n1'
    },
    { 
      cas: '25957-58-8', 
      nameEn: '4-Ethoxy-2-hydroxypyrimidine', 
      nameCn: '2-乙氧基嘧啶-4-醇', 
      formula: 'C6H8N2O2', 
      mw: '140.14', 
      properties: '密度: 1.2±0.1 g/cm3 | 沸点: 280.5±0.0 °C | 熔点: 165-167 °C',
      smiles: 'CCOc1ccnc(O)n1'
    },
    { 
      cas: '908128-94-9', 
      nameEn: '5-O-Methanesulfonate-2,3-O-isopropylidene-2-C-methyl-D-ribonolactone', 
      nameCn: '5-O-甲基磺酰基-2,3-O-异丙亚基-2-C-甲基-D-核糖酸内酯', 
      formula: 'C10H16O7S', 
      mw: '280.30', 
      properties: '密度: 1.33 g/cm3 | 沸点: N/A | 熔点: 82-84 °C',
      smiles: 'CS(=O)(=O)OC[C@@]1(C)OC(=O)[C@@H]2OC(C)(C)O[C@H]12'
    },
    { 
      cas: '50440-88-5', 
      nameEn: '4-Aminoquinazolin-2-ol', 
      nameCn: '4-氨基-2-羟基喹唑啉', 
      formula: 'C8H7N3O', 
      mw: '161.16', 
      properties: '密度: 1.5±0.1 g/cm3 | 沸点: 489.6±37.0 °C | 熔点: >300 °C',
      smiles: 'Nc1nc(O)c2ccccc2n1'
    },
    { 
      cas: '82439-87-0', 
      nameEn: '3-(4-Nitrobenzyl)-5-hydroxy-3H-imidazole-4-carboxamide', 
      nameCn: '1-(4-硝基苄基)-4-羟基-1H-咪唑-5-羧酰胺', 
      formula: 'C11H10N4O4', 
      mw: '262.22', 
      properties: '密度: 1.6±0.1 g/cm3 | 沸点: N/A | pKa: 5.4±0.1',
      smiles: 'NC(=O)c1c(O)n(Cc2ccc([N+](=O)[O-])cc2)cn1'
    },
    { 
      cas: '19693-54-0', 
      nameEn: '6-Methyl-1,6-naphthyridin-5(6H)-one', 
      nameCn: '6-甲基-1,6-萘啶-5(6h)-酮', 
      formula: 'C9H8N2O', 
      mw: '160.17', 
      properties: '密度: 1.229 g/cm3 | 沸点: 340.609°C (760 mmHg) | 熔点: 180-182 °C',
      smiles: 'Cn1ccc2cccnc2c1=O'
    },
    { 
      cas: '103626-36-4', 
      nameEn: 'N-Cyclopentyl-9H-purin-6-amine', 
      nameCn: '9H-嘌呤-6-胺, n-环戊基-', 
      formula: 'C10H13N5', 
      mw: '203.24', 
      properties: '密度: 1.4±0.1 g/cm3 | 沸点: N/A | 熔点: 160-162 °C',
      smiles: 'NC1=NC=NC2=C1N=CN2C3CCCC3'
    }
  ];

  const filteredData = mockData.filter(item => 
    item.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.nameCn.includes(searchTerm) ||
    item.cas.includes(searchTerm) ||
    item.properties.includes(searchTerm) // Also search in properties
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-24 relative">
      
      {/* 2D Structure Modal */}
      <AnimatePresence>
        {selectedMol && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMol(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            {/* Modal Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl relative z-10 overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button Mobile */}
              <button 
                onClick={() => setSelectedMol(null)}
                className="absolute top-4 right-4 z-50 p-2 md:hidden bg-white/80 rounded-full"
              >
                 <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                 </svg>
              </button>

              {/* Left Side: Visual Structure */}
              <div className="w-full md:w-3/5 bg-slate-50/50 flex flex-col p-8 border-r border-slate-100 relative">
                <div className="flex justify-between items-start mb-6">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                      二维结构 (2D)
                   </div>
                </div>
                
                {/* Canvas Container */}
                <div className="flex-grow flex items-center justify-center min-h-[300px] bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 p-6 overflow-hidden">
                   <MoleculeViewer smiles={selectedMol.smiles} cas={selectedMol.cas} />
                </div>
                
                <div className="mt-4 text-center">
                   <p className="font-mono text-[10px] text-slate-400 break-all select-all hover:text-slate-600 transition-colors">
                     SMILES: {selectedMol.smiles}
                   </p>
                </div>
              </div>

              {/* Right Side: Data Info */}
              <div className="w-full md:w-2/5 p-10 flex flex-col bg-white overflow-y-auto custom-scrollbar">
                <div className="hidden md:flex justify-end mb-8">
                    <button 
                        onClick={() => setSelectedMol(null)}
                        className="text-slate-400 hover:text-slate-800 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="mb-8">
                    {/* Removed category badge */}
                    <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-3 font-mono tracking-tight">{selectedMol.cas}</h2>
                    <h3 className="text-base font-bold text-slate-700 leading-snug mb-2">{selectedMol.nameEn}</h3>
                    <p className="text-sm text-slate-400">{selectedMol.nameCn}</p>
                </div>

                <div className="space-y-6">
                    <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 flex flex-col gap-4">
                        <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                            <span className="text-xs font-bold text-slate-400 uppercase">分子式 (Formula)</span>
                            <span className="font-mono text-sm font-bold text-slate-800">{selectedMol.formula}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-slate-400 uppercase">分子量 (Mol. Weight)</span>
                            <span className="font-mono text-sm font-bold text-slate-800">{selectedMol.mw} g/mol</span>
                        </div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase mb-3">理化性质 (Physical Properties)</div>
                        <div className="text-xs text-slate-700 font-mono leading-relaxed space-y-2">
                            {selectedMol.properties.split('|').map((prop, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                                    <span>{prop.trim()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">库存状态 (Status)</h4>
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                             <div className="w-2 h-2 rounded-full bg-green-500"></div>
                             <span>现有库存 (302实验室, B柜)</span>
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-10">
                    <button className="w-full bg-slate-900 text-white py-4 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2 group">
                        <span>申请样品</span>
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="bg-slate-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold mb-4">化学品数据库与 CAS 索引</h1>
            <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
              Materials Genome Engineering Database (MGED) 收录了本实验室常用的有机合成中间体、杂环化合物及精细化学品数据。
            </p>
          </div>
          <div className="flex gap-4">
             <div className="relative group">
                <input 
                  type="text" 
                  placeholder="搜索 CAS、名称、性质..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-lg py-3 px-10 text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-72 transition-all group-hover:bg-slate-800/80"
                />
                <svg className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
             </div>
             <button className="bg-blue-600 px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50">
               导出数据
             </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
           <div className="overflow-x-auto">
             <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                   <tr>
                      <th className="px-6 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">CAS 登记号</th>
                      <th className="px-6 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">化学名称</th>
                      <th className="px-6 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">分子式</th>
                      <th className="px-6 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">分子量 (g/mol)</th>
                      <th className="px-6 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest w-1/4">理化性质</th>
                      <th className="px-6 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">操作</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {filteredData.map((item) => (
                      <tr key={item.cas} className="hover:bg-blue-50/30 transition-colors group">
                         <td className="px-6 py-4 font-mono text-xs font-medium text-blue-600">{item.cas}</td>
                         <td className="px-6 py-4">
                           <div className="text-sm font-bold text-slate-900">{item.nameEn}</div>
                           <div className="text-xs text-slate-400 mt-0.5">{item.nameCn}</div>
                         </td>
                         <td className="px-6 py-4 font-mono text-xs text-slate-600">
                            {item.formula}
                         </td>
                         <td className="px-6 py-4 font-mono text-xs text-slate-600">{item.mw}</td>
                         <td className="px-6 py-4">
                            <div className="text-[10px] text-slate-500 font-mono leading-relaxed line-clamp-2" title={item.properties}>
                               {item.properties}
                            </div>
                         </td>
                         <td className="px-6 py-4 text-right">
                            <button 
                              onClick={() => setSelectedMol(item)}
                              className="p-2 text-blue-500 hover:text-white hover:bg-blue-600 rounded-full transition-all shadow-sm border border-blue-100 hover:border-blue-600" 
                              title="查看结构与性质"
                            >
                               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                               </svg>
                            </button>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
             {filteredData.length === 0 && (
                <div className="p-12 text-center text-slate-400 text-sm">
                   未找到匹配项: "{searchTerm}".
                </div>
             )}
           </div>
           
           <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <div>显示 {filteredData.length} 条记录</div>
              <div className="flex gap-2">
                 <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50 disabled:opacity-50" disabled>上一页</button>
                 <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50">下一页</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Database;
