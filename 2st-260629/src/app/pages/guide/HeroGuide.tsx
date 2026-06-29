import { Button } from "../../components/ui/Button";
import { PreviewBlock } from "../../components/guide/PreviewBlock";

export default function HeroGuide() {
  const codeMainHero = `
<div className="w-full">
  <div className="relative bg-slate-900 rounded-3xl overflow-hidden min-h-[500px] flex items-center">
    {/* Background Placeholder */}
    <div className="absolute inset-0 bg-slate-800 mix-blend-multiply opacity-50"></div>
    
    {/* Content */}
    <div className="relative z-10 p-12 md:p-20 max-w-4xl">
      <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-200 text-sm font-semibold tracking-wider mb-6">
        미래를 짓는 기술
      </span>
      <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
        신뢰와 혁신으로<br />내일의 공간을 창조합니다
      </h2>
      <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
        BuildCore는 30년의 축적된 노하우와 스마트 건설 기술을 바탕으로 가장 안전하고 지속 가능한 가치를 제공합니다.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button color="primary" variant="fill" size="lg">프로젝트 보기</Button>
        <Button color="primary" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
          회사 소개
        </Button>
      </div>
    </div>
  </div>
</div>
`;

  const codeSubHeader = `
<div className="w-full">
  <div className="bg-slate-50 rounded-3xl p-12 md:p-20 text-center flex flex-col items-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">회사 소개</h2>
    <p className="text-lg text-slate-600 max-w-2xl">
      끊임없는 도전과 혁신으로 건설 산업의 새로운 패러다임을 제시하는 BuildCore의 발자취를 소개합니다.
    </p>
  </div>
</div>
`;

  return (
    <div className="space-y-12">
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">Hero</h1>
        <p className="text-lg text-slate-500">페이지 최상단에서 사용자의 이목을 끌고 주요 메시지를 전달하는 핵심 영역입니다.</p>
      </header>

      <section className="space-y-8">
        <div className="border-b border-slate-100 pb-2">
          <h2 className="text-2xl font-bold text-slate-800">1. Hero Banner Types (히어로 영역 유형)</h2>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-700">1.1. Main Page Heroes</h3>
          
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">A. Image Background Hero (메인 페이지용)</h4>
            <p className="text-sm text-slate-600 mb-2">배경 이미지 위에 텍스트와 액션 버튼을 오버레이하여 강렬한 인상을 줍니다. 주로 홈 화면 첫 섹션에 사용됩니다.</p>
            
            <PreviewBlock code={codeMainHero}>
              <div className="w-full">
                <div className="relative bg-slate-900 rounded-3xl overflow-hidden min-h-[500px] flex items-center">
                  <div className="absolute inset-0 bg-slate-800 mix-blend-multiply opacity-50"></div>
                  <div className="relative z-10 p-12 md:p-20 max-w-4xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-200 text-sm font-semibold tracking-wider mb-6">
                      미래를 짓는 기술
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                      신뢰와 혁신으로<br />내일의 공간을 창조합니다
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                      BuildCore는 30년의 축적된 노하우와 스마트 건설 기술을 바탕으로 가장 안전하고 지속 가능한 가치를 제공합니다.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button color="primary" variant="fill" size="lg">프로젝트 보기</Button>
                      <Button color="primary" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                        회사 소개
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </PreviewBlock>
          </div>

          <div className="space-y-4 mt-16">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">B. Simple Page Header (서브 페이지 타이틀용)</h4>
            <p className="text-sm text-slate-600 mb-2">서브 페이지(예: 회사 소개, 제품 안내 등)의 최상단에서 해당 페이지의 제목과 짧은 설명을 제공합니다.</p>
            
            <PreviewBlock code={codeSubHeader}>
              <div className="w-full">
                <div className="bg-slate-50 rounded-3xl p-12 md:p-20 text-center flex flex-col items-center">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">회사 소개</h2>
                  <p className="text-lg text-slate-600 max-w-2xl">
                    끊임없는 도전과 혁신으로 건설 산업의 새로운 패러다임을 제시하는 BuildCore의 발자취를 소개합니다.
                  </p>
                </div>
              </div>
            </PreviewBlock>
          </div>
        </div>
      </section>
    </div>
  );
}