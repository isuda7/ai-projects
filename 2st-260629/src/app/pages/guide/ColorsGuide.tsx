export default function ColorsGuide() {
  const colorPalettes = [
    {
      name: "Indigo",
      description: "브랜드의 메인 컬러로, 프라이머리 액션 및 주요 강조 요소에 사용됩니다.",
      defaultStep: "600",
      shades: [
        { step: "50", tw: "bg-indigo-50", text: "text-indigo-900" },
        { step: "100", tw: "bg-indigo-100", text: "text-indigo-900" },
        { step: "200", tw: "bg-indigo-200", text: "text-indigo-900" },
        { step: "300", tw: "bg-indigo-300", text: "text-indigo-900" },
        { step: "400", tw: "bg-indigo-400", text: "text-indigo-900" },
        { step: "500", tw: "bg-indigo-500", text: "text-white" },
        { step: "600", tw: "bg-indigo-600", text: "text-white" },
        { step: "700", tw: "bg-indigo-700", text: "text-white" },
        { step: "800", tw: "bg-indigo-800", text: "text-white" },
        { step: "900", tw: "bg-indigo-900", text: "text-white" },
        { step: "950", tw: "bg-indigo-950", text: "text-white" },
      ]
    },
    {
      name: "Slate",
      description: "텍스트, 배경, 테두리 등 UI의 기본 뼈대를 구성하는 무채색입니다.",
      defaultStep: "500",
      shades: [
        { step: "50", tw: "bg-slate-50", text: "text-slate-900" },
        { step: "100", tw: "bg-slate-100", text: "text-slate-900" },
        { step: "200", tw: "bg-slate-200", text: "text-slate-900" },
        { step: "300", tw: "bg-slate-300", text: "text-slate-900" },
        { step: "400", tw: "bg-slate-400", text: "text-slate-900" },
        { step: "500", tw: "bg-slate-500", text: "text-white" },
        { step: "600", tw: "bg-slate-600", text: "text-white" },
        { step: "700", tw: "bg-slate-700", text: "text-white" },
        { step: "800", tw: "bg-slate-800", text: "text-white" },
        { step: "900", tw: "bg-slate-900", text: "text-white" },
        { step: "950", tw: "bg-slate-950", text: "text-white" },
      ]
    },
    {
      name: "Emerald",
      description: "성공, 완료, 긍정적인 상태를 나타내는 데 사용됩니다.",
      defaultStep: "500",
      shades: [
        { step: "50", tw: "bg-emerald-50", text: "text-emerald-900" },
        { step: "100", tw: "bg-emerald-100", text: "text-emerald-900" },
        { step: "200", tw: "bg-emerald-200", text: "text-emerald-900" },
        { step: "300", tw: "bg-emerald-300", text: "text-emerald-900" },
        { step: "400", tw: "bg-emerald-400", text: "text-emerald-900" },
        { step: "500", tw: "bg-emerald-500", text: "text-white" },
        { step: "600", tw: "bg-emerald-600", text: "text-white" },
        { step: "700", tw: "bg-emerald-700", text: "text-white" },
        { step: "800", tw: "bg-emerald-800", text: "text-white" },
        { step: "900", tw: "bg-emerald-900", text: "text-white" },
        { step: "950", tw: "bg-emerald-950", text: "text-white" },
      ]
    },
    {
      name: "Amber",
      description: "주의, 경고, 대기 중인 상태를 나타내는 데 사용됩니다.",
      defaultStep: "500",
      shades: [
        { step: "50", tw: "bg-amber-50", text: "text-amber-900" },
        { step: "100", tw: "bg-amber-100", text: "text-amber-900" },
        { step: "200", tw: "bg-amber-200", text: "text-amber-900" },
        { step: "300", tw: "bg-amber-300", text: "text-amber-900" },
        { step: "400", tw: "bg-amber-400", text: "text-amber-900" },
        { step: "500", tw: "bg-amber-500", text: "text-white" },
        { step: "600", tw: "bg-amber-600", text: "text-white" },
        { step: "700", tw: "bg-amber-700", text: "text-white" },
        { step: "800", tw: "bg-amber-800", text: "text-white" },
        { step: "900", tw: "bg-amber-900", text: "text-white" },
        { step: "950", tw: "bg-amber-950", text: "text-white" },
      ]
    },
    {
      name: "Red",
      description: "오류, 삭제, 파괴적인 상태를 나타내는 데 사용됩니다.",
      defaultStep: "500",
      shades: [
        { step: "50", tw: "bg-red-50", text: "text-red-900" },
        { step: "100", tw: "bg-red-100", text: "text-red-900" },
        { step: "200", tw: "bg-red-200", text: "text-red-900" },
        { step: "300", tw: "bg-red-300", text: "text-red-900" },
        { step: "400", tw: "bg-red-400", text: "text-red-900" },
        { step: "500", tw: "bg-red-500", text: "text-white" },
        { step: "600", tw: "bg-red-600", text: "text-white" },
        { step: "700", tw: "bg-red-700", text: "text-white" },
        { step: "800", tw: "bg-red-800", text: "text-white" },
        { step: "900", tw: "bg-red-900", text: "text-white" },
        { step: "950", tw: "bg-red-950", text: "text-white" },
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {/* 1단계: 컴포넌트 제목 */}
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">Colors</h1>
        <p className="text-lg text-slate-500">프로젝트 전반에 사용되는 색상 팔레트 시스템입니다.</p>
      </header>

      {/* 2단계: 대유형 */}
      <section className="space-y-8">
        <div className="border-b border-slate-100 pb-2">
          <h2 className="text-2xl font-bold text-slate-800">1. Color Palette (색상 팔레트)</h2>
        </div>

        {/* 3단계: 중유형 */}
        <div className="space-y-10">
          <h3 className="text-xl font-semibold text-slate-700">1.1. Brand & Neutral Colors</h3>

          {/* 4단계: 소유형 (Brand) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">A. Brand Color (Indigo)</h4>
            <p className="text-sm text-slate-600">{colorPalettes[0].description}</p>
            
            <div className="mt-4 flex w-full h-24 rounded-lg overflow-hidden border border-slate-200 shadow-sm relative">
              {colorPalettes[0].shades.map((shade) => {
                const isDefault = shade.step === colorPalettes[0].defaultStep;
                return (
                  <div key={shade.step} className={`flex-1 flex flex-col justify-end p-2 ${shade.tw} relative group`}>
                    {isDefault && (
                      <div className="absolute inset-0 border-4 border-slate-900/10 pointer-events-none"></div>
                    )}
                    {isDefault && <span className={`text-[10px] font-bold tracking-wide mb-1 ${shade.text}`}>DEFAULT</span>}
                    <span className={`text-xs font-medium ${shade.text}`}>{shade.step}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4단계: 소유형 (Neutral) */}
          <div className="space-y-4 pt-6">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">B. Neutral Color (Slate)</h4>
            <p className="text-sm text-slate-600">{colorPalettes[1].description}</p>
            
            <div className="mt-4 flex w-full h-24 rounded-lg overflow-hidden border border-slate-200 shadow-sm relative">
              {colorPalettes[1].shades.map((shade) => {
                const isDefault = shade.step === colorPalettes[1].defaultStep;
                return (
                  <div key={shade.step} className={`flex-1 flex flex-col justify-end p-2 ${shade.tw} relative group`}>
                    {isDefault && (
                      <div className="absolute inset-0 border-4 border-slate-900/10 pointer-events-none"></div>
                    )}
                    {isDefault && <span className={`text-[10px] font-bold tracking-wide mb-1 ${shade.text}`}>DEFAULT</span>}
                    <span className={`text-xs font-medium ${shade.text}`}>{shade.step}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3단계: 중유형 */}
        <div className="space-y-10 mt-12">
          <h3 className="text-xl font-semibold text-slate-700">1.2. Semantic Colors</h3>

          {/* 4단계: 소유형 (Semantic 반복) */}
          {colorPalettes.slice(2).map((palette, idx) => {
            const letters = ["A", "B", "C", "D"];
            return (
              <div key={palette.name} className="space-y-4 pt-4">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">{letters[idx]}. {palette.name}</h4>
                <p className="text-sm text-slate-600">{palette.description}</p>
                
                <div className="mt-4 flex w-full h-24 rounded-lg overflow-hidden border border-slate-200 shadow-sm relative">
                  {palette.shades.map((shade) => {
                    const isDefault = shade.step === palette.defaultStep;
                    return (
                      <div key={shade.step} className={`flex-1 flex flex-col justify-end p-2 ${shade.tw} relative group`}>
                        {isDefault && (
                          <div className="absolute inset-0 border-4 border-slate-900/10 pointer-events-none"></div>
                        )}
                        {isDefault && <span className={`text-[10px] font-bold tracking-wide mb-1 ${shade.text}`}>DEFAULT</span>}
                        <span className={`text-xs font-medium ${shade.text}`}>{shade.step}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}