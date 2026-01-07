
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-3">
               <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-xs">BJTU</div>
               北京交通大学 物理科学与工程学院
            </h3>
            <p className="mb-6 text-sm leading-relaxed max-w-sm">
              [此处填写实验室/研究中心的官方名称]
              致力于通过先进的物理手段与工程技术，探索物质科学的前沿规律，培养具有国际竞争力的研究型人才。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-weixin"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-weibo"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">网站导航</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/research" className="hover:text-blue-400 transition-colors">研究方向</Link></li>
              <li><Link to="/people" className="hover:text-blue-400 transition-colors">团队成员</Link></li>
              <li><Link to="/publications" className="hover:text-blue-400 transition-colors">论文成果</Link></li>
              <li><Link to="/facilities" className="hover:text-blue-400 transition-colors">实验室设施</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">联系方式</h4>
            <ul className="space-y-3 text-sm">
              <li>北京市海淀区上园村3号</li>
              <li>北京交通大学 物理科学与工程学院</li>
              <li>[此处填写具体楼宇及房间号]</li>
              <li>邮编：100044</li>
              <li className="pt-2 text-blue-400">contact@[实验室域名].bjtu.edu.cn</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 北京交通大学 物理科学与工程学院. 保留所有权利。</p>
          <div className="flex gap-6">
            <a href="https://phy.bjtu.edu.cn" target="_blank" className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">学院官网</a>
            <a href="https://www.bjtu.edu.cn" target="_blank" className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">学校主页</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
