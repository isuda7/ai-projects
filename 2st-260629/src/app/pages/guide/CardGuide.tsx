import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { PreviewBlock } from "../../components/guide/PreviewBlock";

export default function CardGuide() {
  const codeCardA = `
<div className="max-w-sm">
  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="h-48 bg-slate-200 relative">
      <div className="absolute inset-0 flex items-center justify-center text-slate-400">
        <Building2 className="w-12 h-12 opacity-50" />
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <Badge color="primary" variant="fill" className="mb-2">건축사업</Badge>
          <h3 className="text-xl font-bold text-slate-900">서울 복합 비즈니스 센터</h3>
        </div>
      </div>
      <p className="text-slate-600 mb-6 line-clamp-2">
        도심 속 친환경 디자인과 최첨단 스마트 빌딩 기술이 결합된 미래형 랜드마크 프로젝트입니다.
      </p>
      <Button color="primary" variant="outline" className="w-full justify-center">자세히 보기</Button>
    </div>
  </div>
</div>
`;

  const codeCardB = `
<div className="max-w-sm">
  <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-indigo-600 transition-colors group">
    <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors text-indigo-600">
      <CheckCircle2 className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">무결점 안전 시공</h3>
    <p className="text-slate-600 mb-6">수십 년간의 노하우와 엄격한 품질 관리 시스템을 통해 안전하고 완벽한 시공을 약속합니다.</p>
    <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700">
      더 알아보기 <ArrowRight className="ml-1 w-4 h-4" />
    </a>
  </div>
</div>
`;

  const codeCardC = `
<div className="max-w-sm">
  <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-slate-500 mb-1">누적 준공 프로젝트</p>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-slate-900">3,420</span>
        <span className="text-sm font-medium text-slate-500">건</span>
      </div>
    </div>
    <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
      <Building2 className="w-6 h-6" />
    </div>
  </div>
</div>
`;

  const codeCardD = `
<div className="max-w-sm">
  <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
    {/* Background Image Placeholder */}
    <div className="absolute inset-0 bg-slate-300 transition-transform duration-500 group-hover:scale-105"></div>
    {/* Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
    {/* Content */}
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <Badge color="primary" variant="fill" className="w-fit mb-3 bg-indigo-500 text-white border-none">진행중</Badge>
      <h3 className="text-2xl font-bold text-white mb-2">판교 제2테크노밸리</h3>
      <p className="text-slate-200 text-sm line-clamp-2">
        대한민국 IT 산업의 새로운 중심지가 될 첨단 산업단지 조성 프로젝트입니다.
      </p>
    </div>
  </div>
</div>
`;

  return (
    <div className="space-y-12">
      {/* 1단계: 컴포넌트 제목 */}
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">Card</h1>
        <p className="text-lg text-slate-500">콘텐츠를 그룹화하여 요약된 정보를 제공하는 카드 UI 컴포넌트입니다.</p>
      </header>

      {/* 2단계: 대유형 */}
      <section className="space-y-8">
        <div className="border-b border-slate-100 pb-2">
          <h2 className="text-2xl font-bold text-slate-800">1. Card Variants (카드 유형 4가지)</h2>
        </div>
        
        {/* 3단계: 중유형 */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-700">1.1. Content Cards</h3>
          
          {/* 4단계: 소유형 (A. 제품/프로젝트 카드) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">A. Image Top Card (제품 및 프로젝트 소개용)</h4>
            <p className="text-sm text-slate-600 mb-2">상단에 이미지가 위치하고 하단에 텍스트와 액션 버튼이 배치되는 가장 기본적인 카드입니다.</p>
            
            <PreviewBlock code={codeCardA}>
              <div className="max-w-sm">
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 bg-slate-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      <Building2 className="w-12 h-12 opacity-50" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <Badge color="primary" variant="fill" className="mb-2">건축사업</Badge>
                        <h3 className="text-xl font-bold text-slate-900">서울 복합 비즈니스 센터</h3>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-6 line-clamp-2">
                      도심 속 친환경 디자인과 최첨단 스마트 빌딩 기술이 결합된 미래형 랜드마크 프로젝트입니다.
                    </p>
                    <Button color="primary" variant="outline" className="w-full justify-center">자세히 보기</Button>
                  </div>
                </div>
              </div>
            </PreviewBlock>
          </div>

          {/* 4단계: 소유형 (B. 특징/아이콘 카드) */}
          <div className="space-y-4 mt-12">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">B. Icon Feature Card (서비스 특징 및 장점용)</h4>
            <p className="text-sm text-slate-600 mb-2">아이콘을 강조하여 핵심 가치나 서비스의 특징을 나열할 때 사용하는 카드입니다.</p>
            
            <PreviewBlock code={codeCardB}>
              <div className="max-w-sm">
                <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-indigo-600 transition-colors group">
                  <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors text-indigo-600">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">무결점 안전 시공</h3>
                  <p className="text-slate-600 mb-6">
                    수십 년간의 노하우와 엄격한 품질 관리 시스템을 통해 안전하고 완벽한 시공을 약속합니다.
                  </p>
                  <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700">
                    더 알아보기 <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </PreviewBlock>
          </div>

          {/* 4단계: 소유형 (C. 정보/통계 카드) */}
          <div className="space-y-4 mt-12">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">C. Info/Stat Card (통계 및 단순 정보용)</h4>
            <p className="text-sm text-slate-600 mb-2">대시보드나 요약 화면에서 핵심 수치와 짧은 상태 정보를 보여주는 작은 사이즈의 카드입니다.</p>
            
            <PreviewBlock code={codeCardC}>
              <div className="max-w-sm">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">누적 준공 프로젝트</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-slate-900">3,420</span>
                      <span className="text-sm font-medium text-slate-500">건</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                    <Building2 className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </PreviewBlock>
          </div>

          {/* 4단계: 소유형 (D. 오버레이 이미지 카드) */}
          <div className="space-y-4 mt-12">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">D. Image Overlay Card (주요 프로젝트용)</h4>
            <p className="text-sm text-slate-600 mb-2">이미지 위에 그라데이션 오버레이를 깔고 텍스트를 배치하여 프로젝트의 몰입감을 높이는 카드입니다.</p>
            
            <PreviewBlock code={codeCardD}>
              <div className="max-w-sm">
                <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
                  {/* Background Image Placeholder */}
                  <div className="absolute inset-0 bg-slate-300 transition-transform duration-500 group-hover:scale-105"></div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                    <Badge color="primary" variant="fill" className="w-fit mb-3 bg-indigo-500 text-white border-none">진행중</Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">판교 제2테크노밸리</h3>
                    <p className="text-slate-200 text-sm line-clamp-2">
                      대한민국 IT 산업의 새로운 중심지가 될 첨단 산업단지 조성 프로젝트입니다.
                    </p>
                  </div>
                </div>
              </div>
            </PreviewBlock>
          </div>

        </div>
      </section>
    </div>
  );
}