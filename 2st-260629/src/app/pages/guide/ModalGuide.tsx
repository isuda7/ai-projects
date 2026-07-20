import { Button } from "../../components/ui/Button";
import { PreviewBlock } from "../../components/guide/PreviewBlock";
import { AlertCircle } from "lucide-react";

export default function ModalGuide() {
  const codeAlert = `
{/* Alert Modal Overlay */}
<div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
  <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden">
    <div className="p-6 text-center">
      <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
        <AlertCircle className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">삭제하시겠습니까?</h3>
      <p className="text-slate-500 text-sm">
        이 작업은 되돌릴 수 없으며 모든 데이터가 영구적으로 삭제됩니다.
      </p>
    </div>
    <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-3">
      <Button color="danger" variant="fill" className="w-full justify-center">확인</Button>
    </div>
  </div>
</div>
`;

  const codeConfirm = `
{/* Confirm Modal Overlay */}
<div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
  <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-2">저장하지 않은 변경사항이 있습니다</h3>
      <p className="text-slate-600 text-sm">
        작성 중인 내용이 있습니다. 변경사항을 저장하지 않고 페이지를 벗어나시겠습니까?
      </p>
    </div>
    <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
      <Button color="primary" variant="outline">취소</Button>
      <Button color="primary" variant="fill">확인</Button>
    </div>
  </div>
</div>
`;

  return (
    <div className="space-y-12">
      {/* 1단계: 컴포넌트 제목 */}
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">Modal</h1>
        <p className="text-lg text-slate-500">사용자의 주의를 환기시키고 중요한 결정을 내리도록 유도하는 모달 창 컴포넌트입니다.</p>
      </header>

      {/* 2단계: 대유형 */}
      <section className="space-y-8">
        <div className="border-b border-slate-100 pb-2">
          <h2 className="text-2xl font-bold text-slate-800">1. Modal Types (모달 유형)</h2>
        </div>
        
        {/* 3단계: 중유형 */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-700">1.1. Dialogs</h3>
          
          {/* 4단계: 소유형 (A. Alert) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">A. Alert Modal (경고/알림)</h4>
            <p className="text-sm text-slate-600 mb-2">단일 액션 버튼(확인)을 제공하여 중요한 메시지를 전달하거나 위험한 작업 전에 경고를 표시합니다.</p>
            
            <PreviewBlock code={codeAlert}>
              <div className="relative h-96 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center border border-slate-200">
                {/* Simulated Backdrop */}
                <div className="absolute inset-0 bg-slate-900/40"></div>
                
                {/* Modal Container */}
                <div className="relative z-10 bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden">
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">삭제하시겠습니까?</h3>
                    <p className="text-slate-500 text-sm">
                      이 작업은 되돌릴 수 없으며 모든 데이터가 영구적으로 삭제됩니다.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-3">
                    <Button color="danger" variant="fill" className="w-full justify-center">확인</Button>
                  </div>
                </div>
              </div>
            </PreviewBlock>
          </div>
 
          {/* 4단계: 소유형 (B. Confirm) */}
          <div className="space-y-4 mt-12">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">B. Confirm Modal (확인/취소)</h4>
            <p className="text-sm text-slate-600 mb-2">사용자에게 취소와 확인 두 가지 선택지를 제공하여 의사를 명확히 묻는 창입니다.</p>
            
            <PreviewBlock code={codeConfirm}>
              <div className="relative h-96 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center border border-slate-200">
                {/* Simulated Backdrop */}
                <div className="absolute inset-0 bg-slate-900/40"></div>
                
                {/* Modal Container */}
                <div className="relative z-10 bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">저장하지 않은 변경사항이 있습니다</h3>
                    <p className="text-slate-600 text-sm">
                      작성 중인 내용이 있습니다. 변경사항을 저장하지 않고 페이지를 벗어나시겠습니까?
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                    <Button color="primary" variant="outline">취소</Button>
                    <Button color="primary" variant="fill">확인</Button>
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