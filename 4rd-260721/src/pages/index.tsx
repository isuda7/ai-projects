import React from 'react';
import Layout from '@/components/layout/layout';
import { Link } from 'react-router-dom';

export default function IndexPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Universal Portal</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Welcome to the new Universal Portal. This environment is built with React 19, Vite, and Tailwind CSS v4.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link 
            to="/guide/dashboard" 
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Open Design System Guide
          </Link>
        </div>
      </div>
    </Layout>
  );
}
