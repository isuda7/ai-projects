import { PreviewBlock } from "../../components/guide/PreviewBlock";

export default function SectionGuide() {
  const codeStandard = `
<section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
  {/* Section Header */}
  <div className="text-center mb-16 max-w-2xl mx-auto">
    <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
      Our Services
    </span>
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
      주요 사업 영역
    </h2>
    <p className="text-lg text-slate-600">
      다양한 분야에서 최고의 품질과 안전을 최우선으로 생각합니다.
    </p>
  </div>
  
  {/* Section Content (Grid) */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="h-48 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">Content Block 1</div>
    <div className="h-48 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">Content Block 2</div>
    <div className="h-48 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">Content Block 3</div>
  </div>
</section>
`;

  const codeSplit = `
<section className="bg-slate-50 py-16 rounded-3xl w-full">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
      {/* Left Side (Header/Desc) */}
      <div className="lg:w-1/3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
          지속 가능한<br />미래를 설계합니다
        </h2>
        <p className="text-slate-600 mb-8 text-lg">
          친환경 건축 자재와 스마트 에너지 관리 시스템을 도입하여 탄소 배출을 줄이고 환경을 보호하는 데 앞장섭니다.
        </p>
        <a href="#" className="text-indigo-600 font-bold hover:text-indigo-700 underline underline-offset-4">
          환경 경영 보고서 보기
        </a>
      </div>
      
      {/* Right Side (Content) */}
      <div className="lg:w-2/3 w-full">
        <div className="h-64 bg-white rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 shadow-sm">
          Content Block / Image / Graphic
        </div>
      </div>
    </div>
  </div>
</section>
`;

  return (
    <div className="space-y-12">
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">Section</h1>
        <p className="text-lg text-slate-500">페이지 내에서 논리적인 컨텐츠 블록을 구성하는 섹션 레이아웃 가이드입니다.</p>
      </header>

      <section className="space-y-8">
        <div className="border-b border-slate-100 pb-2">
          <h2 className="text-2xl font-bold text-slate-800">1. Section Layouts (섹션 레이아웃)</h2>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-700">1.1. Standard Layout</h3>
          
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">A. Center Title + Grid Content</h4>
            <p className="text-sm text-slate-600 mb-2">제목을 중앙에 배치하고 하단에 그리드 형식의 콘텐츠를 나열하는 가장 보편적인 구조입니다.</p>
            
            <PreviewBlock code={codeStandard}>
              <div className="w-full">
                <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 border border-slate-100 rounded-3xl">
                  <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                      Our Services
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                      주요 사업 영역
                    </h2>
                    <p className="text-lg text-slate-600">
                      다양한 분야에서 최고의 품질과 안전을 최우선으로 생각합니다.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="h-48 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">Content Block 1</div>
                    <div className="h-48 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">Content Block 2</div>
                    <div className="h-48 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">Content Block 3</div>
                  </div>
                </section>
              </div>
            </PreviewBlock>
          </div>

          <div className="space-y-4 mt-16">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">B. Left Title + Right Content (Split Layout)</h4>
            <p className="text-sm text-slate-600 mb-2">좌측에 설명과 제목을 두고 우측에 핵심 콘텐츠(이미지나 리스트)를 배치하는 형태입니다.</p>
            
            <PreviewBlock code={codeSplit}>
              <div className="w-full">
                <section className="bg-slate-50 py-16 rounded-3xl w-full">
                  <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                      <div className="lg:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                          지속 가능한<br />미래를 설계합니다
                        </h2>
                        <p className="text-slate-600 mb-8 text-lg">
                          친환경 건축 자재와 스마트 에너지 관리 시스템을 도입하여 탄소 배출을 줄이고 환경을 보호하는 데 앞장섭니다.
                        </p>
                        <a href="#" className="text-indigo-600 font-bold hover:text-indigo-700 underline underline-offset-4">
                          환경 경영 보고서 보기
                        </a>
                      </div>
                      
                      <div className="lg:w-2/3 w-full">
                        <div className="h-64 bg-white rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 shadow-sm">
                          Content Block / Image / Graphic
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </PreviewBlock>
          </div>
        </div>
      </section>
    </div>
  );
}