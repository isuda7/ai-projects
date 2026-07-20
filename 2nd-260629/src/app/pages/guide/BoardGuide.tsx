import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Badge } from "../../components/ui/Badge";
import { Paperclip, ChevronLeft, ChevronRight } from "lucide-react";
import { PreviewBlock } from "../../components/guide/PreviewBlock";

export default function BoardGuide() {
  const codeList = `
<div className="bg-white rounded-xl">
  {/* Search & Actions */}
  <div className="flex justify-between items-center mb-6">
    <div className="w-72">
      <Input placeholder="검색어를 입력하세요" />
    </div>
    <Button color="primary" variant="fill">글쓰기</Button>
  </div>
  
  {/* Table Layout */}
  <div className="overflow-x-auto border-t-2 border-slate-900">
    <table className="w-full text-left border-b border-slate-200">
      <thead className="bg-slate-50 border-b border-slate-200">
        <tr>
          <th className="py-4 px-6 font-semibold text-slate-900 text-center w-24">번호</th>
          <th className="py-4 px-6 font-semibold text-slate-900">제목</th>
          <th className="py-4 px-6 font-semibold text-slate-900 text-center w-32">작성자</th>
          <th className="py-4 px-6 font-semibold text-slate-900 text-center w-32">등록일</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        <tr className="hover:bg-slate-50 transition-colors bg-indigo-50/30">
          <td className="py-4 px-6 text-center"><Badge color="primary" variant="fill">공지</Badge></td>
          <td className="py-4 px-6 font-medium text-slate-900">2024년 하반기 신입사원 공개채용 안내</td>
          <td className="py-4 px-6 text-slate-500 text-center text-sm">관리자</td>
          <td className="py-4 px-6 text-slate-500 text-center text-sm">2024.08.15</td>
        </tr>
        <tr className="hover:bg-slate-50 transition-colors">
          <td className="py-4 px-6 text-slate-500 text-center">152</td>
          <td className="py-4 px-6 text-slate-900">서울 본사 사옥 리모델링 공사 일정 안내</td>
          <td className="py-4 px-6 text-slate-500 text-center text-sm">관리자</td>
          <td className="py-4 px-6 text-slate-500 text-center text-sm">2024.08.12</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Pagination */}
  <div className="flex justify-center items-center gap-2 mt-8">
    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white font-medium">1</button>
    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium transition-colors">2</button>
    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium transition-colors">3</button>
    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors"><ChevronRight className="w-5 h-5" /></button>
  </div>
</div>
`;

  const codeDetail = `
<div className="bg-white rounded-xl">
  {/* Detail Header */}
  <div className="border-t-2 border-slate-900 border-b border-slate-200 py-6 px-8 bg-slate-50">
    <h3 className="text-2xl font-bold text-slate-900 mb-4">2024년 하반기 신입사원 공개채용 안내</h3>
    <div className="flex items-center gap-6 text-sm text-slate-500">
      <span className="flex gap-2"><strong>작성자</strong> 관리자</span>
      <span className="flex gap-2"><strong>등록일</strong> 2024.08.15</span>
      <span className="flex gap-2"><strong>조회수</strong> 1,240</span>
    </div>
  </div>
  
  {/* Attachments (View) */}
  <div className="py-4 px-8 border-b border-slate-200 bg-slate-50/50">
    <div className="flex items-center gap-4 text-sm">
      <span className="font-semibold text-slate-700 min-w-[60px]">첨부파일</span>
      <div className="flex flex-wrap gap-4">
        <a href="#" className="text-indigo-600 hover:underline flex items-center gap-1">
          <Paperclip className="w-4 h-4" /> 2024_하반기_채용공고문.pdf
        </a>
      </div>
    </div>
  </div>

  {/* Detail Content */}
  <div className="py-12 px-8 min-h-[300px] text-slate-800 leading-relaxed border-b border-slate-200">
    안녕하세요. BuildCore 인사팀입니다.<br/><br/>
    2024년 하반기 신입사원 공개채용을 아래와 같이 진행하오니, 열정 있고 역량 있는 인재들의 많은 지원 바랍니다.
  </div>
  
  {/* Prev/Next Navigation */}
  <div className="border-b border-slate-200">
    <a href="#" className="flex py-4 px-8 border-b border-slate-100 hover:bg-slate-50 transition-colors items-center gap-6 text-sm">
      <span className="font-semibold text-slate-700 w-16">이전글</span>
      <span className="text-slate-900 truncate">서울 본사 사옥 리모델링 공사 일정 안내</span>
    </a>
    <div className="flex py-4 px-8 hover:bg-slate-50 transition-colors items-center gap-6 text-sm">
      <span className="font-semibold text-slate-700 w-16">다음글</span>
      <span className="text-slate-500">다음글이 없습니다.</span>
    </div>
  </div>

  {/* Detail Actions */}
  <div className="py-6 px-8 flex justify-between items-center">
    <div>
      <Button color="primary" variant="outline">목록으로</Button>
    </div>
    <div className="flex gap-2">
      <Button color="secondary" variant="fill">수정</Button>
      <Button color="danger" variant="fill">삭제</Button>
    </div>
  </div>
</div>
`;

  const codeWrite = `
<div className="bg-white rounded-xl">
  <div className="border-t-2 border-slate-900 py-6">
    <div className="space-y-6">
      <Input label="제목" placeholder="제목을 입력해주세요" />
      
      {/* File Upload Input */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-slate-900">첨부파일</label>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <label className="cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors">
              파일 선택
              <input type="file" className="hidden" multiple />
            </label>
            <span className="text-sm text-slate-500">선택된 파일이 없습니다.</span>
          </div>
          <p className="text-xs text-slate-500">최대 5개, 개당 10MB 이하의 파일만 업로드 가능합니다.</p>
        </div>
      </div>

      {/* Textarea */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-slate-900">내용</label>
        <textarea 
          className="w-full h-64 px-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none text-slate-900 placeholder:text-slate-400"
          placeholder="내용을 입력해주세요"
        ></textarea>
      </div>
      
      {/* Write Actions */}
      <div className="flex justify-center gap-4 pt-6 border-t border-slate-200">
        <Button color="primary" variant="outline" size="lg" className="w-32 justify-center">취소</Button>
        <Button color="primary" variant="fill" size="lg" className="w-32 justify-center">등록</Button>
      </div>
    </div>
  </div>
</div>
`;

  return (
    <div className="space-y-12">
      {/* 1단계: 컴포넌트 제목 */}
      <header className="border-b border-slate-200 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">Board</h1>
        <p className="text-lg text-slate-500">공지사항, 문의사항 등 리스트 형태의 데이터를 다루는 게시판 템플릿입니다.</p>
      </header>

      {/* 2단계: 대유형 */}
      <section className="space-y-8">
        <div className="border-b border-slate-100 pb-2">
          <h2 className="text-2xl font-bold text-slate-800">1. Board Views (게시판 화면 유형)</h2>
        </div>
        
        {/* 3단계: 중유형 */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-700">1.1. Core Views</h3>
          
          {/* 4단계: 소유형 (A. 목록) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">A. List View (목록 화면)</h4>
            <p className="text-sm text-slate-600 mb-2">테이블 형태로 게시글 목록을 나열하고 검색 및 페이지네이션을 제공하는 화면입니다.</p>
            
            <PreviewBlock code={codeList}>
              <div className="w-full">
                <div className="bg-white rounded-xl">
                  {/* Search & Actions */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-72">
                      <Input placeholder="검색어를 입력하세요" />
                    </div>
                    <Button color="primary" variant="fill">글쓰기</Button>
                  </div>
                  
                  {/* Table Layout */}
                  <div className="overflow-x-auto border-t-2 border-slate-900">
                    <table className="w-full text-left border-b border-slate-200">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="py-4 px-6 font-semibold text-slate-900 text-center w-24">번호</th>
                          <th className="py-4 px-6 font-semibold text-slate-900">제목</th>
                          <th className="py-4 px-6 font-semibold text-slate-900 text-center w-32">작성자</th>
                          <th className="py-4 px-6 font-semibold text-slate-900 text-center w-32">등록일</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors bg-indigo-50/30">
                          <td className="py-4 px-6 text-center">
                            <Badge color="primary" variant="fill">공지</Badge>
                          </td>
                          <td className="py-4 px-6 font-medium text-slate-900">2024년 하반기 신입사원 공개채용 안내</td>
                          <td className="py-4 px-6 text-slate-500 text-center text-sm">관리자</td>
                          <td className="py-4 px-6 text-slate-500 text-center text-sm">2024.08.15</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 text-slate-500 text-center">152</td>
                          <td className="py-4 px-6 text-slate-900">서울 본사 사옥 리모델링 공사 일정 안내</td>
                          <td className="py-4 px-6 text-slate-500 text-center text-sm">관리자</td>
                          <td className="py-4 px-6 text-slate-500 text-center text-sm">2024.08.12</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 text-slate-500 text-center">151</td>
                          <td className="py-4 px-6 text-slate-900">개인정보 처리방침 변경 안내</td>
                          <td className="py-4 px-6 text-slate-500 text-center text-sm">관리자</td>
                          <td className="py-4 px-6 text-slate-500 text-center text-sm">2024.08.01</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-center items-center gap-2 mt-8">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white font-medium">1</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium transition-colors">2</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium transition-colors">3</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </PreviewBlock>
          </div>

          {/* 4단계: 소유형 (B. 상세) */}
          <div className="space-y-4 mt-16">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">B. Detail View (상세 화면)</h4>
            <p className="text-sm text-slate-600 mb-2">게시글의 본문 내용을 확인하고 수정/삭제 등의 액션, 이전/다음 글 이동을 제공하는 화면입니다.</p>
            
            <PreviewBlock code={codeDetail}>
              <div className="w-full">
                <div className="bg-white rounded-xl">
                  {/* Detail Header */}
                  <div className="border-t-2 border-slate-900 border-b border-slate-200 py-6 px-8 bg-slate-50">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">2024년 하반기 신입사원 공개채용 안내</h3>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                      <span className="flex gap-2"><strong>작성자</strong> 관리자</span>
                      <span className="flex gap-2"><strong>등록일</strong> 2024.08.15</span>
                      <span className="flex gap-2"><strong>조회수</strong> 1,240</span>
                    </div>
                  </div>
                  
                  {/* Attachments (View) */}
                  <div className="py-4 px-8 border-b border-slate-200 bg-slate-50/50">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-semibold text-slate-700 min-w-[60px]">첨부파일</span>
                      <div className="flex flex-wrap gap-4">
                        <a href="#" className="text-indigo-600 hover:underline flex items-center gap-1">
                          <Paperclip className="w-4 h-4" /> 2024_하반기_채용공고문.pdf
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Detail Content */}
                  <div className="py-12 px-8 min-h-[300px] text-slate-800 leading-relaxed border-b border-slate-200">
                    안녕하세요. BuildCore 인사팀입니다.<br/><br/>
                    2024년 하반기 신입사원 공개채용을 아래와 같이 진행하오니, 열정 있고 역량 있는 인재들의 많은 지원 바랍니다.<br/><br/>
                    1. 모집 부문 : 건축, 토목, 플랜트, 경영지원<br/>
                    2. 지원 기간 : 2024년 9월 1일 ~ 9월 15일<br/>
                    3. 지원 방법 : 당사 채용 홈페이지 접수
                  </div>
                  
                  {/* Prev/Next Navigation */}
                  <div className="border-b border-slate-200">
                    <a href="#" className="flex py-4 px-8 border-b border-slate-100 hover:bg-slate-50 transition-colors items-center gap-6 text-sm">
                      <span className="font-semibold text-slate-700 w-16">이전글</span>
                      <span className="text-slate-900 truncate">서울 본사 사옥 리모델링 공사 일정 안내</span>
                    </a>
                    <div className="flex py-4 px-8 hover:bg-slate-50 transition-colors items-center gap-6 text-sm">
                      <span className="font-semibold text-slate-700 w-16">다음글</span>
                      <span className="text-slate-500">다음글이 없습니다.</span>
                    </div>
                  </div>

                  {/* Detail Actions */}
                  <div className="py-6 flex justify-between items-center">
                    <div>
                      <Button color="primary" variant="outline">목록으로</Button>
                    </div>
                    <div className="flex gap-2">
                      <Button color="secondary" variant="fill">수정</Button>
                      <Button color="danger" variant="fill">삭제</Button>
                    </div>
                  </div>
                </div>
              </div>
            </PreviewBlock>
          </div>

          {/* 4단계: 소유형 (C. 등록/수정) */}
          <div className="space-y-4 mt-16">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">C. Write View (등록/수정 화면)</h4>
            <p className="text-sm text-slate-600 mb-2">새로운 게시글을 작성하거나 기존 글을 수정하는 폼(Form) 화면입니다.</p>
            
            <PreviewBlock code={codeWrite}>
              <div className="w-full">
                <div className="bg-white rounded-xl">
                  <div className="border-t-2 border-slate-900 py-6">
                    <div className="space-y-6">
                      <Input label="제목" placeholder="제목을 입력해주세요" />
                      
                      {/* File Upload Input */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-900">첨부파일</label>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-4">
                            <label className="cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                              파일 선택
                              <input type="file" className="hidden" multiple />
                            </label>
                            <span className="text-sm text-slate-500">선택된 파일이 없습니다.</span>
                          </div>
                          <p className="text-xs text-slate-500">최대 5개, 개당 10MB 이하의 파일만 업로드 가능합니다.</p>
                        </div>
                      </div>

                      {/* Textarea */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-900">내용</label>
                        <textarea 
                          className="w-full h-64 px-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none text-slate-900 placeholder:text-slate-400"
                          placeholder="내용을 입력해주세요"
                        ></textarea>
                      </div>
                      
                      {/* Write Actions */}
                      <div className="flex justify-center gap-4 pt-6 border-t border-slate-200">
                        <Button color="primary" variant="outline" size="lg" className="w-32 justify-center">취소</Button>
                        <Button color="primary" variant="fill" size="lg" className="w-32 justify-center">등록</Button>
                      </div>
                    </div>
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