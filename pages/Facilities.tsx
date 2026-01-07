
import React from 'react';
import { EQUIPMENTS } from '../constants';

const Facilities: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-20 px-8 text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">实验室设施</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          我们的实验室配备了用于精密合成和高分辨率材料表征的国际领先仪器设备。
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EQUIPMENTS.map((eq) => (
            <div key={eq.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col">
              <div className="aspect-video overflow-hidden bg-slate-100 relative">
                <img src={eq.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={eq.name} />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    eq.status === 'Operational' ? 'bg-green-100 text-green-700' :
                    eq.status === 'In Use' ? 'bg-blue-100 text-blue-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {eq.status === 'Operational' ? '运行良好' : eq.status === 'In Use' ? '在使用中' : '维护中'}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                  {eq.category === 'Characterization' ? '物性表征' : eq.category === 'Computation' ? '计算资源' : '化学合成'}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{eq.name}</h3>
                <p className="text-sm text-slate-500 mb-4 italic">{eq.manufacturer}</p>
                <div className="bg-slate-50 p-4 rounded-xl flex-grow mb-6">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">技术参数</div>
                  <p className="text-xs text-slate-700 leading-relaxed">{eq.specifications}</p>
                </div>
                <button className="w-full py-3 bg-slate-100 text-slate-700 text-sm font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  查看预约状态
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Support Section */}
        <div className="mt-20 bg-blue-600 rounded-3xl p-12 text-white flex flex-col md:flex-row items-center gap-8 justify-between">
           <div className="max-w-xl text-center md:text-left">
             <h2 className="text-3xl font-bold mb-4">共享设施访问</h2>
             <p className="text-blue-100">
               我们的设备可供协作使用。校内师生及合作伙伴可通过内部门户申请访问权限。
             </p>
           </div>
           <button className="whitespace-nowrap px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
              联系设施管理员
           </button>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
