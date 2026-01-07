
import React from 'react';

const Gallery: React.FC = () => {
  const photos = [
    { src: 'https://picsum.photos/seed/life1/800/800', title: '2024课题组团建晚宴' },
    { src: 'https://picsum.photos/seed/life2/800/600', title: '夏季远足郊游' },
    { src: 'https://picsum.photos/seed/life3/600/800', title: '实验室深夜奋战' },
    { src: 'https://picsum.photos/seed/life4/1000/1000', title: '威尼斯学术会议' },
    { src: 'https://picsum.photos/seed/life5/800/400', title: '年度实验室大扫除' },
    { src: 'https://picsum.photos/seed/life6/400/800', title: '毕业生欢送会' },
    { src: 'https://picsum.photos/seed/life7/1200/800', title: '新实验区落成' },
    { src: 'https://picsum.photos/seed/life8/800/800', title: '2023年度工作研讨会' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-24 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">生活剪影</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
          在论文和实验之外，我们是一个温馨的大家庭。这里记录了我们的一些珍贵瞬间。
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
           {photos.map((photo, i) => (
             <div key={i} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <img src={photo.src} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" alt={photo.title} />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-white font-bold text-lg">{photo.title}</span>
                </div>
             </div>
           ))}
        </div>
        
        {/* Social Feed Placeholder */}
        <div className="mt-32 border-t border-slate-100 pt-20">
           <h2 className="text-3xl font-bold text-center mb-12">最新动态摘要</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs italic">M</div>
                      <div>
                         <div className="text-sm font-bold text-slate-900">先进材料研究实验室</div>
                         <div className="text-[10px] text-slate-400">2天前 发布</div>
                      </div>
                   </div>
                   <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      今天在同步辐射线站收获颇丰！成功解析了我们新型聚合物共混物的结晶结构... ⚛️🧪 #材料科学 #研究进展
                   </p>
                   <div className="h-40 bg-slate-200 rounded-lg"></div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
