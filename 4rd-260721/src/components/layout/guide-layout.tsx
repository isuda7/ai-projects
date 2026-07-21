import React from 'react';
import { Outlet, NavLink, useLocation, Link } from 'react-router-dom';
import { LayoutDashboard, Palette, Type, MousePointerClick, CheckSquare } from 'lucide-react';
import { cn } from '@/utils/utils';

const GUIDE_MENU = [
  {
    title: 'Overview',
    items: [
      { name: 'Dashboard', path: '/guide/dashboard', icon: <LayoutDashboard size={16} /> }
    ]
  },
  {
    title: 'Foundation',
    items: [
      { name: 'Colors', path: '/guide/colors', icon: <Palette size={16} /> },
      { name: 'Typography', path: '/guide/typography', icon: <Type size={16} /> },
      { name: 'Elevator', path: '/guide/elevator', icon: <Type size={16} /> },
      { name: 'Utilities', path: '/guide/utilities', icon: <Type size={16} /> },
    ]
  },
  {
    title: 'Elements',
    items: [
      { name: 'AspectRatio', path: '/guide/aspect-ratio', icon: <Type size={16} /> },
      { name: 'Avatar', path: '/guide/avatar', icon: <Type size={16} /> },
      { name: 'Badge', path: '/guide/badge', icon: <Type size={16} /> },
      { name: 'Button', path: '/guide/button', icon: <MousePointerClick size={16} /> },
    ]
  },
  {
    title: 'Forms',
    items: [
      { name: 'Input', path: '/guide/input', icon: <Type size={16} /> },
      { name: 'Checkbox', path: '/guide/checkbox', icon: <CheckSquare size={16} /> },
    ]
  },
  {
    title: 'Navigation',
    items: [
      { name: 'Breadcrumb', path: '/guide/breadcrumb', icon: <Type size={16} /> },
    ]
  },
  {
    title: 'Data Display',
    items: [
      { name: 'Accordion', path: '/guide/accordion', icon: <Type size={16} /> },
      { name: 'Calendar', path: '/guide/calendar', icon: <Type size={16} /> },
    ]
  },
  {
    title: 'Feedback & Overlays',
    items: [
      { name: 'Alert', path: '/guide/alert', icon: <Type size={16} /> },
      { name: 'AlertDialog', path: '/guide/alert-dialog', icon: <Type size={16} /> },
    ]
  }
];

export default function GuideLayout({ children }: { children?: React.ReactNode }) {
  const location = useLocation();
  const isDashboard = location.pathname === '/guide/dashboard';

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Global Navigation Bar (GNB) - 100vw Width */}
      <header className="h-14 border-b border-border bg-white flex items-center px-6 sticky top-0 z-50 w-full">
        <Link to="/" className="text-lg font-bold tracking-tight text-gray-900 mr-10">Universal Portal</Link>
        <nav className="flex items-center h-full gap-8">
          <NavLink 
            to="/guide/dashboard"
            className={({ isActive }) => cn(
              "flex items-center h-full text-sm font-medium transition-colors border-b-2",
              isActive 
                ? "border-[#0294de] text-[#0294de]" 
                : "border-transparent text-gray-500 hover:text-gray-900"
            )}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/guide/colors" // Dashboard가 아닌 가이드 메인으로 매핑 (Foundation 첫 메뉴)
            className={({ isActive }) => cn(
              "flex items-center h-full text-sm font-medium transition-colors border-b-2",
              (location.pathname.startsWith('/guide') && !isDashboard)
                ? "border-[#0294de] text-[#0294de]" 
                : "border-transparent text-gray-500 hover:text-gray-900"
            )}
          >
            Design System
          </NavLink>
        </nav>
      </header>

      <div className="flex flex-1 relative">
        {/* Sidebar */}
        {!isDashboard && (
          <aside className="w-64 border-r border-border flex flex-col absolute inset-y-0 left-0 bg-gray-50 h-[calc(100vh-56px)] sticky top-14">
            <div className="p-6 border-b border-border bg-white">
              <h2 className="text-xl font-bold tracking-tight">Design System</h2>
              <p className="text-sm text-gray-500 mt-1">Component Guides</p>
            </div>
            <nav className="flex-1 overflow-y-auto p-4 space-y-6">
              {GUIDE_MENU.map((group, idx) => (
                <div key={idx}>
                  <h3 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {group.title}
                  </h3>
                  <ul className="space-y-1">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <NavLink
                          to={item.path}
                          className={({ isActive }) => cn(
                            "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                            isActive 
                              ? "bg-[#0294de]/10 text-[#0294de] font-semibold" 
                              : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                          )}
                        >
                          {item.icon}
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className={cn("flex-1 min-w-0 w-full", !isDashboard && "ml-64")}>
          <div className={cn("mx-auto p-10", isDashboard ? "max-w-[100%]" : "max-w-5xl")}>
            {children || <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
}
