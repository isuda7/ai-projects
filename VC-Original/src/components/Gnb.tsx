import React, { useState } from 'react';
import { Home, Search, Star, HelpCircle, Video, Menu, ChevronRight } from 'lucide-react';

export default function Gnb() {
  const [activeMenu, setActiveMenu] = useState<string | null>('학교 자율 시간');

  return (
    <div className="w-full relative bg-white font-sans text-sm">
      {/* 1. Header / Util Bar */}
      <div className="bg-[#f4f4f4] h-[40px] w-full flex justify-center border-b border-gray-200">
        <div className="w-full max-w-[1280px] flex justify-between items-center h-full px-4 text-[#565656]">
          {/* Left Menu */}
          <div className="flex items-center h-full">
            <button className="flex items-center justify-center w-[40px] h-full hover:bg-gray-200 transition-colors">
              <Home size={18} />
            </button>
            <div className="flex h-full">
              <a href="#" className="flex items-center px-4 font-bold text-[#ff6652] border-b-2 border-[#ff6652] bg-white">초등</a>
              <a href="#" className="flex items-center px-4 hover:bg-gray-200 transition-colors">중학</a>
              <a href="#" className="flex items-center px-4 hover:bg-gray-200 transition-colors">고등</a>
              <a href="#" className="flex items-center px-4 hover:bg-gray-200 transition-colors">스마트스쿨</a>
              <a href="#" className="flex items-center px-4 hover:bg-gray-200 transition-colors">깜짝퀴즈</a>
              <a href="#" className="flex items-center px-4 hover:bg-gray-200 transition-colors">커넥팅북</a>
              <a href="#" className="flex items-center px-4 hover:bg-gray-200 transition-colors">YBM교과서 전시관</a>
              <a href="#" className="flex items-center px-4 hover:bg-gray-200 transition-colors gap-1">
                YBM교원연수원 <ChevronRight size={14} />
              </a>
            </div>
          </div>
          
          {/* Right Menu */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <a href="#" className="hover:text-black">로그인</a>
            <div className="w-[1px] h-[10px] bg-gray-300"></div>
            <a href="#" className="hover:text-black">MY클라우드</a>
            <div className="w-[1px] h-[10px] bg-gray-300"></div>
            <a href="#" className="hover:text-black">고객센터</a>
            <div className="w-[1px] h-[10px] bg-gray-300"></div>
            <a href="#" className="hover:text-black">이벤트</a>
            <div className="w-[1px] h-[10px] bg-gray-300"></div>
            <a href="#" className="flex items-center gap-1 hover:text-black">
              <Star size={14} /> 즐겨찾기
            </a>
          </div>
        </div>
      </div>

      {/* 2. Header / Search Bar */}
      <div className="h-[85px] w-full flex justify-center bg-white">
        <div className="w-full max-w-[1280px] flex items-center justify-between h-full px-4">
          {/* Logo Placeholder */}
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold tracking-tighter text-gray-800">
              Y<span className="text-[#ff6652]">Cloud</span>
            </span>
          </div>

          {/* Search Box */}
          <div className="flex-1 flex justify-center">
            <div className="relative flex items-center w-full max-w-[500px]">
              <HelpCircle className="absolute -left-6 text-gray-400 cursor-pointer hover:text-gray-600" size={18} />
              <div className="flex items-center w-full h-[45px] bg-[#fff0f0] rounded-full px-5 border border-transparent focus-within:border-[#ff6652] transition-colors">
                <input 
                  type="text" 
                  placeholder="검색어를 입력해주세요" 
                  className="w-full bg-transparent outline-none text-[#ff6652] placeholder:text-[#ff6652]/60"
                />
                <Search className="text-[#ff6652] cursor-pointer" size={20} />
              </div>
            </div>
          </div>

          {/* Right Banner & Video Link */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-500 font-medium">Y클라우드 인공지능 자료</span>
              <span className="text-base font-bold text-gray-800">
                AI 학습데이터 <span className="text-[#ff6652]">1위</span>
              </span>
            </div>
            {/* Banner Placeholder */}
            <div className="w-[211px] h-[54px] bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center text-red-400 font-bold text-sm shadow-sm">
              Banner Placeholder
            </div>
            
            <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-800 transition-colors">
              <div className="w-[32px] h-[32px] rounded-full bg-gray-100 flex items-center justify-center">
                <Video size={16} />
              </div>
              <span className="text-[11px] font-medium tracking-tight">영상자료 모아보기</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Header / GNB Links */}
      <div className="h-[50px] w-full flex justify-center bg-white border-y border-gray-200 shadow-sm relative z-20">
        <div className="w-full max-w-[1280px] flex items-center h-full px-4 gap-8">
          <button className="flex items-center gap-2 text-gray-700 hover:text-black">
            <Menu size={20} />
          </button>
          
          <nav className="flex items-center h-full gap-8">
            {['교과서 자료', '평가 자료', '학교 자율 시간', '창의적 체험활동', '과목 연구실', '기초 학력 자료', '에듀테크 수업', 'Y샘 광장'].map((item) => (
              <button 
                key={item}
                onClick={() => setActiveMenu(item)}
                className={`text-[17px] h-full flex items-center font-bold tracking-tight transition-colors ${
                  activeMenu === item ? 'text-[#ff5b4f] border-b-2 border-[#ff5b4f]' : 'text-gray-800 hover:text-[#ff5b4f]'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* 4. Dropdown Menu (학교 자율 시간) - Mockup */}
      {activeMenu === '학교 자율 시간' && (
        <div className="absolute top-[175px] left-0 w-full bg-white border-b border-[#ff5b4f] shadow-lg z-10 flex justify-center py-8 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="w-full max-w-[1280px] px-4 flex">
            {/* Subject Categories */}
            <div className="w-[200px] border-r border-gray-200 pr-6">
              <ul className="flex flex-col gap-3">
                <li className="font-bold text-[#ff5b4f] flex justify-between items-center cursor-pointer">
                  주제별 자료 <ChevronRight size={16} />
                </li>
                <li className="text-gray-600 hover:text-black cursor-pointer font-medium">디지털 소양</li>
                <li className="text-gray-600 hover:text-black cursor-pointer font-medium">생태전환 교육</li>
                <li className="text-gray-600 hover:text-black cursor-pointer font-medium">민주시민 교육</li>
                <li className="text-gray-600 hover:text-black cursor-pointer font-medium">진로 교육</li>
                <li className="text-gray-600 hover:text-black cursor-pointer font-medium">독도 교육</li>
              </ul>
            </div>
            
            {/* Content Area Mockup */}
            <div className="flex-1 pl-8">
              <h3 className="font-bold text-lg mb-4 text-gray-800">주제별 추천 자료</h3>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:border-red-200 cursor-pointer transition-all hover:shadow-md">
                    <div className="w-full h-[100px] bg-gray-200 rounded-md mb-3"></div>
                    <p className="text-sm font-bold text-gray-700">추천 학습 자료 {i}</p>
                    <p className="text-xs text-gray-500 mt-1">최신 업데이트 된 AI 학습 자료입니다.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
