
import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../constants';

const People: React.FC = () => {
  type Category = '全部' | '教职员工' | '博士后' | '博士生' | '硕士生' | '校友';
  const [filter, setFilter] = useState<Category>('全部');

  const categoryMap: Record<string, Category> = {
    'Faculty': '教职员工',
    'Postdoc': '博士后',
    'PhD': '博士生',
    'Master': '硕士生',
    'Alumni': '校友'
  };

  const filteredMembers = filter === '全部' 
    ? TEAM_MEMBERS 
    : TEAM_MEMBERS.filter(m => categoryMap[m.category] === filter);

  const categories: Category[] = ['全部', '教职员工', '博士后', '博士生', '硕士生', '校友'];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-24 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between relative z-10">
          <div>
            <h1 className="text-5xl font-extrabold mb-4 tracking-tight">我们的团队</h1>
            <p className="text-slate-400 text-xl max-w-xl">
              认识驱动研究前进的杰出头脑。我们是一个由物理学家、化学家和工程师组成的共同体。
            </p>
          </div>
          <div className="mt-8 md:mt-0">
             <div className="flex bg-slate-800 p-1 rounded-xl">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      filter === cat ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-24"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {filteredMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-md relative">
                <img src={member.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={member.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              <p className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-2">{member.role}</p>
              {member.description && <p className="text-slate-500 text-sm leading-relaxed">{member.description}</p>}
              {member.dest && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">当前去向</div>
                  <div className="text-xs font-semibold text-slate-800">{member.dest}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Recruitment CTA */}
        <div className="mt-32 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
           <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
           </div>
           <h3 className="text-2xl font-bold mb-4">加入我们的研究小组</h3>
           <p className="text-slate-500 max-w-2xl mx-auto mb-8">
             我们一直在寻找对数字化材料感兴趣的优秀博士生和博士后。 
             如果你具有聚合物化学或机器学习背景，我们期待你的加入。
           </p>
           <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
             立即申请
           </button>
        </div>
      </div>
    </div>
  );
};

export default People;
