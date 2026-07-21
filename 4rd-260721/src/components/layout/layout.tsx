import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { cn } from '@/utils/utils';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans antialiased">
      <header className="h-14 border-b border-border bg-white flex items-center px-6 sticky top-0 z-50 shadow-sm">
        <Link to="/" className="text-lg font-bold tracking-tight text-gray-900 mr-8">Universal Portal</Link>
        <nav className="flex items-center h-full gap-6">
          <NavLink 
            to="/"
            end
            className={({ isActive }) => cn(
              "flex items-center h-full text-sm font-medium transition-colors border-b-2",
              isActive 
                ? "border-[#0294de] text-[#0294de]" 
                : "border-transparent text-gray-500 hover:text-gray-900"
            )}
          >
            Home
          </NavLink>
          <NavLink 
            to="/guide/dashboard"
            className={({ isActive }) => cn(
              "flex items-center h-full text-sm font-medium transition-colors border-b-2",
              isActive 
                ? "border-[#0294de] text-[#0294de]" 
                : "border-transparent text-gray-500 hover:text-gray-900"
            )}
          >
            Guide & Dashboard
          </NavLink>
        </nav>
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto p-6">
        {children || <Outlet />}
      </main>
    </div>
  );
}
