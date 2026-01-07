
import React from 'react';

const Database: React.FC = () => {
  const mockData = [
    { id: 'ENTRY-001', name: '[条目/材料/数据集名称]', method: '[所选技术/算法]', properties: '[核心属性 A]', status: '已验证' },
    { id: 'ENTRY-002', name: '[条目/材料/数据集名称]', method: '[所选技术/算法]', properties: '[核心属性 B]', status: '待审核' },
    { id: 'ENTRY-003', name: '[条目/材料/数据集名称]', method: '[所选技术/算法]', properties: '[核心属性 C]', status: '已验证' },
    { id: 'ENTRY-004', name: '[条目/材料/数据集名称]', method: '[所选技术/算法]', properties: '[核心属性 D]', status: '已验证' },
    { id: 'ENTRY-005', name: '[条目/材料/数据集名称]', method: '[所选技术/算法]', properties: '[核心属性 E]', status: '已验证' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold mb-4">[实验室名称] 核心资源/数据库</h1>
            <p className="text-slate-400 max-w-xl">
              [此处填写该数据库的简要介绍，例如：收录了实验室历年来在 XXXX 方向积累的 XXXX 条数据。]
            </p>
          </div>
          <div className="flex gap-4">
             <div className="relative">
                <input 
                  type="text" 
                  placeholder="搜索条目..." 
                  className="bg-slate-800 border-none rounded-lg py-3 px-10 text-sm focus:ring-2 focus:ring-blue-500 w-64"
                />
                <svg className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
             </div>
             <button className="bg-blue-600 px-6 py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors">导出 CSV</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
           <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                 <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">唯一 ID</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">名称/标识</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">处理方法/来源</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">关键参数/性能</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">状态标签</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">操作</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                 {mockData.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                       <td className="px-6 py-4 font-mono text-xs text-blue-600">{item.id}</td>
                       <td className="px-6 py-4 text-sm font-bold text-slate-900">{item.name}</td>
                       <td className="px-6 py-4 text-sm text-slate-600">{item.method}</td>
                       <td className="px-6 py-4 text-sm text-slate-600">{item.properties}</td>
                       <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                            item.status === '已验证' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                          }`}>
                            {item.status}
                          </span>
                       </td>
                       <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-blue-600 transition-colors group-hover:scale-110" title="查看详情">
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                             </svg>
                          </button>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
           <div className="p-6 bg-slate-50 border-t border-slate-200 text-center">
              <button className="text-sm font-bold text-blue-600 hover:underline">点击加载更多条目</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Database;
