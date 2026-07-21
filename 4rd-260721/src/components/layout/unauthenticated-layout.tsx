import React from 'react';
import { Outlet } from 'react-router-dom';

export default function UnauthenticatedLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-border p-8">
        {children || <Outlet />}
      </div>
    </div>
  );
}
