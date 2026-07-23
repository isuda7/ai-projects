import React from 'react';
import Gnb from '../components/Gnb';

export default function GnbDemoPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fd]">
      {/* 1. Global Navigation Bar Component */}
      <Gnb />

      {/* 2. Main Content Mockup to show layout */}
      <main className="max-w-[1280px] mx-auto mt-[50px] p-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center min-h-[500px] flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
            <span className="text-3xl text-red-500">🎉</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">GNB 화면 퍼블리싱 완료</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Figma 디자인을 바탕으로 제작된 반응형 네비게이션 컴포넌트입니다. 상단의 메뉴들을 클릭하여 상호작용을 테스트해보세요.
          </p>
        </div>
      </main>
    </div>
  );
}
