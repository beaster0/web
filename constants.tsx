
import React from 'react';
import { NavItem, ResearchDirection, Equipment, TeamMember, Publication, NewsItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { name: '实验室首页', path: '/' },
  { name: '实验室概况', path: '/about' },
  { name: '研究方向', path: '/research' },
  { name: '人才队伍', path: '/people' },
  { name: '学术成果', path: '/publications' },
  { name: '设施平台', path: '/facilities' },
  { name: '基因组数据库', path: '/database' },
  { name: '生活影像', path: '/gallery' },
];

export const RESEARCH_DIRECTIONS: ResearchDirection[] = [
  {
    id: "dir1",
    title: "高通量计算与模拟",
    subtitle: "MGE Computation",
    description: "利用多尺度模拟与机器学习算法，构建高分子链段基因图谱，实现物理性能的精准预测与逆向设计。",
    tags: ["多尺度模拟", "机器学习", "基因组数据库"],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    color: "bg-blue-50",
  },
  {
    id: "dir2",
    title: "高通量合成与制备",
    subtitle: "High-Throughput Synthesis",
    description: "开发自动化、微流控及机器人辅助的高分子合成平台，实现材料样品的并行制备与工艺快速筛选。",
    tags: ["自动化平台", "受限空间合成", "动态共价键"],
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    color: "bg-white",
  },
  {
    id: "dir3",
    title: "高通量表征与机理",
    subtitle: "Precise Characterization",
    description: "依托同步辐射及中子散射技术，开展高分子多级结构的原位实时表征，揭示材料基因与性能的映射规律。",
    tags: ["原位表征", "同步辐射", "结构机理"],
    imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800",
    color: "bg-blue-50",
  }
];

export const EQUIPMENTS: Equipment[] = [
  {
    id: 'eq1',
    name: '自动化高分子合成机器人系统',
    manufacturer: 'Chemspeed Technologies',
    specifications: '支持并行32通道合成，温控范围-20至200℃，集成粘度及电导率监测。',
    status: 'Operational',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=600',
    category: 'Synthesis'
  },
  {
    id: 'eq2',
    name: 'GPU加速高性能计算集群',
    manufacturer: 'NVIDIA DGX Station',
    specifications: '4x A100 GPU, 320GB HBM2, 5 petaFLOPS AI性能，专用于分子动力学模拟。',
    status: 'Operational',
    imageUrl: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=600',
    category: 'Computation'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'pi',
    name: '张三 (演示)',
    role: '教授 · 实验室主任',
    category: 'Faculty',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    description: '国家杰出青年基金获得者，专注于高分子材料基因组工程方法论研究。'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub1',
    title: 'Machine Learning Accelerated Discovery of High-Performance Dielectric Polymers',
    authors: 'Zhang, L., et al., Li, M.*',
    journal: 'Nature Communications',
    year: 2024,
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=300',
    doi: '10.1038/s41467-024-XXXXX',
    isFeatured: true
  }
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: '2024-10-25',
    title: '本实验室承办“第三届材料基因组工程国际论坛”',
    excerpt: '论坛聚焦高分子领域数字化转型，吸引了来自全球的200余位专家学者参与。',
    imageUrl: 'https://images.unsplash.com/photo-1540575861501-7ad0582373f2?auto=format&fit=crop&q=80&w=600'
  }
];
