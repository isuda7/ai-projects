import React, { useState, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

type PageType = 'Page' | 'Popup';
type PageStatus = 'Published' | 'Review' | 'Draft';

interface PageItem {
  no: string;
  path: string;
  type: PageType;
  url: string;
  date: string;
  status: PageStatus;
  remarks: string;
}

interface PageGroup {
  name: string;
  items: PageItem[];
}

const DASHBOARD_DATA: PageGroup[] = [
  {
    name: 'Foundation (가이드)',
    items: [
      { no: '01', path: 'Colors', type: 'Page', url: '/guide/colors', date: '2026-07-22', status: 'Published', remarks: '완료' },
      { no: '02', path: 'Typography', type: 'Page', url: '/guide/typography', date: '2026-07-22', status: 'Published', remarks: '완료' },
      { no: '03', path: 'Elevator', type: 'Page', url: '/guide/elevator', date: '2026-07-22', status: 'Published', remarks: '완료' },
      { no: '04', path: 'Utilities', type: 'Page', url: '/guide/utilities', date: '2026-07-22', status: 'Published', remarks: '완료' },
    ]
  },
  {
    name: 'Forms (가이드)',
    items: [
      { no: '05', path: 'Input', type: 'Page', url: '/guide/input', date: '2026-07-22', status: 'Published', remarks: '완료' },
      { no: '06', path: 'Checkbox', type: 'Page', url: '/guide/checkbox', date: '2026-07-22', status: 'Published', remarks: '완료' },
    ]
  },
  {
    name: 'Elements',
    items: [
      { no: '07', path: 'Button', type: 'Page', url: '/guide/button', date: '2026-07-22', status: 'Published', remarks: '완료' },
      { no: '11', path: 'AspectRatio', type: 'Page', url: '/guide/aspect-ratio', date: '2026-07-22', status: 'Published', remarks: 'Batch 1' },
      { no: '12', path: 'Avatar', type: 'Page', url: '/guide/avatar', date: '2026-07-22', status: 'Published', remarks: 'Batch 1' },
      { no: '13', path: 'Badge', type: 'Page', url: '/guide/badge', date: '2026-07-22', status: 'Published', remarks: 'Batch 1' },
    ]
  },
  {
    name: 'Navigation',
    items: [
      { no: '14', path: 'Breadcrumb', type: 'Page', url: '/guide/breadcrumb', date: '2026-07-22', status: 'Published', remarks: 'Batch 1' },
    ]
  },
  {
    name: 'Data Display',
    items: [
      { no: '08', path: 'Accordion', type: 'Page', url: '/guide/accordion', date: '2026-07-22', status: 'Published', remarks: 'Batch 1' },
      { no: '15', path: 'Calendar', type: 'Page', url: '/guide/calendar', date: '2026-07-22', status: 'Published', remarks: 'Batch 1' },
    ]
  },
  {
    name: 'Feedback & Overlays',
    items: [
      { no: '09', path: 'AlertDialog', type: 'Page', url: '/guide/alert-dialog', date: '2026-07-22', status: 'Published', remarks: 'Batch 1' },
      { no: '10', path: 'Alert', type: 'Page', url: '/guide/alert', date: '2026-07-22', status: 'Published', remarks: 'Batch 1' },
    ]
  },
  {
    name: 'Remaining UI (대기)',
    items: [
      { no: '16~53', path: 'Card ~ Tooltip 등 (나머지)', type: 'Page', url: '#', date: '-', status: 'Draft', remarks: 'Batch 2~6 예정' },
    ]
  }
];

export default function DashboardPage() {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    DASHBOARD_DATA.reduce((acc, group) => ({ ...acc, [group.name]: true }), {})
  );

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [group]: !prev[group]
    }));
  };

  const getStatusStyle = (status: PageStatus) => {
    switch (status) {
      case 'Published': return { color: '#059669', backgroundColor: '#ecfdf5' };
      case 'Review': return { color: '#f57c00', backgroundColor: '#fff3e0' };
      case 'Draft': return { color: '#9e9e9e', backgroundColor: '#f5f5f5' };
    }
  };

  // 통계 계산
  const stats = useMemo(() => {
    let total = 0, published = 0, review = 0, draft = 0;
    DASHBOARD_DATA.forEach(group => {
      group.items.forEach(item => {
        total++;
        if (item.status === 'Published') published++;
        if (item.status === 'Review') review++;
        if (item.status === 'Draft') draft++;
      });
    });
    return { total, published, review, draft };
  }, []);

  return (
    <div className="w-full flex flex-col gap-6 font-sans">
      <header className="flex flex-col gap-2 mb-4 border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 m-0 flex justify-between items-end">
          Publishing Dashboard
          <Link to="/" className="text-sm font-medium text-blue-500 hover:underline">← Home</Link>
        </h1>
        <p className="text-sm text-gray-500 m-0">프로젝트 내 전체 화면 단위 퍼블리싱 진척도 및 링크를 관리합니다.</p>
      </header>

      {/* 요약 (Summary Dashboard) - 미니멀 레이아웃 */}
      <div className="flex items-center gap-12 py-4">
        <div className="flex flex-col">
          <span className="text-[14px] font-[700] uppercase tracking-[1px] text-gray-500 mb-1">Total</span>
          <span className="text-[30px] font-[500] tracking-[-0.6px] text-gray-900 leading-none">{stats.total}</span>
        </div>
        <div className="w-px h-12 bg-gray-200"></div>
        
        <div className="flex flex-col">
          <span className="text-[14px] font-[700] uppercase tracking-[1px] text-emerald-600 mb-1">Published</span>
          <span className="text-[30px] font-[500] tracking-[-0.6px] text-emerald-700 leading-none">{stats.published}</span>
        </div>
        <div className="w-px h-12 bg-gray-200"></div>

        <div className="flex flex-col">
          <span className="text-[14px] font-[700] uppercase tracking-[1px] text-amber-600 mb-1">Review</span>
          <span className="text-[30px] font-[500] tracking-[-0.6px] text-amber-700 leading-none">{stats.review}</span>
        </div>
        <div className="w-px h-12 bg-gray-200"></div>

        <div className="flex flex-col">
          <span className="text-[14px] font-[700] uppercase tracking-[1px] text-gray-400 mb-1">Draft</span>
          <span className="text-[30px] font-[500] tracking-[-0.6px] text-gray-500 leading-none">{stats.draft}</span>
        </div>
      </div>

      {/* 데이터 테이블 (Table Layout) */}
      <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse" style={{ fontSize: '12px' }}>
          <thead>
            <tr style={{ background: '#edf1fd' }}>
              <th className="py-2.5 px-4 font-bold text-gray-700 w-12 text-center uppercase tracking-wider">No</th>
              <th className="py-2.5 px-4 font-bold text-gray-700 w-1/4 uppercase tracking-wider">Path (메뉴 경로)</th>
              <th className="py-2.5 px-4 font-bold text-gray-700 w-24 uppercase tracking-wider">Type</th>
              <th className="py-2.5 px-4 font-bold text-gray-700 uppercase tracking-wider">URL</th>
              <th className="py-2.5 px-4 font-bold text-gray-700 w-24 text-center uppercase tracking-wider">Status</th>
              <th className="py-2.5 px-4 font-bold text-gray-700 w-32 uppercase tracking-wider text-right">Date</th>
              <th className="py-2.5 px-4 font-bold text-gray-700 uppercase tracking-wider w-1/4">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {DASHBOARD_DATA.map((group) => {
              const isExpanded = expandedGroups[group.name];
              return (
                <React.Fragment key={group.name}>
                  {/* Group Row */}
                  <tr 
                    onClick={() => toggleGroup(group.name)}
                    className="border-b border-gray-200 cursor-pointer select-none transition-colors"
                    style={{ background: '#f8fafc', height: '36px' }}
                  >
                    <td colSpan={7} className="px-4 font-semibold text-gray-800 text-[13px] hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-2">
                        <ChevronDown 
                          size={16} 
                          className="text-gray-500 transition-transform duration-300"
                          style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(-180deg)' }}
                        />
                        {group.name} <span className="text-gray-400 font-normal ml-1">({group.items.length})</span>
                      </div>
                    </td>
                  </tr>

                  {/* Item Rows */}
                  {isExpanded && group.items.map((item) => (
                    <tr 
                      key={item.no} 
                      className="border-b border-gray-100 transition-colors hover:bg-[rgba(15,23,42,0.025)]"
                      style={{ height: '36px' }}
                    >
                      <td className="px-4 text-center text-gray-500 font-mono">{item.no}</td>
                      <td className="px-4 text-gray-700 font-medium">{item.path}</td>
                      <td className="px-4 text-gray-500">{item.type}</td>
                      <td className="px-4">
                        <Link 
                          to={item.url} 
                          className="text-[#0294de] hover:underline font-mono"
                          target={item.url !== '#' ? "_blank" : undefined}
                        >
                          {item.url}
                        </Link>
                      </td>
                      <td className="px-4 text-center">
                        <span 
                          className="inline-flex items-center justify-center px-2 py-0.5 rounded-sm font-semibold"
                          style={{ ...getStatusStyle(item.status), fontSize: '11px', letterSpacing: '0.5px' }}
                        >
                          {item.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-4 text-gray-400 font-mono text-right">{item.date}</td>
                      <td className="px-4 text-gray-500 truncate max-w-[200px]" title={item.remarks}>{item.remarks}</td>
                    </tr>
                  ))}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
