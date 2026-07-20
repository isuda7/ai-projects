export default function TypographyGuide() {
  return (
    <div className="space-y-12">
      {/* 1단계: 컴포넌트 제목 */}
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">Typography</h1>
        <p className="text-lg text-slate-500">프로젝트 전반에 사용되는 타이포그래피 시스템입니다.</p>
      </header>

      {/* 2단계: 대유형 */}
      <section className="space-y-8">
        <div className="border-b border-slate-100 pb-2">
          <h2 className="text-2xl font-bold text-slate-800">1. Headings (제목)</h2>
        </div>
        
        {/* 3단계: 중유형 */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-700">1.1. Display & Section Titles</h3>
          
          {/* 4단계: 소유형 반복 */}
          <div className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 border-b border-slate-100 pb-4">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Heading 1</div>
              <div className="md:col-span-3 text-4xl font-extrabold text-slate-900">BuildCore Construction (4xl, Extrabold)</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 border-b border-slate-100 pb-4">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Heading 2</div>
              <div className="md:col-span-3 text-3xl font-bold text-slate-900">Section Title (3xl, Bold)</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 border-b border-slate-100 pb-4">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Heading 3</div>
              <div className="md:col-span-3 text-2xl font-bold text-slate-900">Card Title (2xl, Bold)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2단계: 대유형 */}
      <section className="space-y-8 mt-12">
        <div className="border-b border-slate-100 pb-2">
          <h2 className="text-2xl font-bold text-slate-800">2. Body Texts (본문)</h2>
        </div>

        {/* 3단계: 중유형 */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-700">2.1. Paragraphs & Helpers</h3>
          
          <div className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 border-b border-slate-100 pb-4">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Lead</div>
              <div className="md:col-span-3 text-lg text-slate-600">Leading paragraph text (lg, Slate-600)</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 border-b border-slate-100 pb-4">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Body</div>
              <div className="md:col-span-3 text-base text-slate-900">Base body text for general paragraphs. (base, Slate-900)</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Small</div>
              <div className="md:col-span-3 text-sm text-slate-500">Small helper text for inputs and notes. (sm, Slate-500)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}