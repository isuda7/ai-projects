import * as React from "react";
import { useParams } from "react-router";

// UI Components
import { Alert, AlertTitle, AlertDescription } from "../../components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { Progress } from "../../components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
import { Textarea } from "../../components/ui/textarea";
import { Checkbox } from "../../components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Switch } from "../../components/ui/switch";
import { Slider } from "../../components/ui/slider";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../components/ui/input-otp";
import { Label } from "../../components/ui/label";
import { Toggle } from "../../components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "../../components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../../components/ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../../components/ui/context-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Calendar } from "../../components/ui/calendar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Skeleton } from "../../components/ui/skeleton";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import { Separator } from "../../components/ui/separator";
import { ScrollArea } from "../../components/ui/scroll-area";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/resizable";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
import { Button } from "../../components/ui/button";

// Icons & Utils
import { AlertCircle, Terminal, HelpCircle, Bold, Italic, Underline, ChevronsUpDown, Building2 } from "lucide-react";
import { toast } from "sonner";
import { PreviewBlock } from "../../components/guide/PreviewBlock";
import { cn } from "../../components/ui/utils";
import styles from "./GuidePages.module.scss";

export default function ComponentDetailGuide() {
  const { componentName } = useParams<{ componentName: string }>();

  // State hooks for demo state
  const [progressVal, setProgressVal] = React.useState(33);
  const [toggleActive, setToggleActive] = React.useState(false);
  const [otpVal, setOtpVal] = React.useState("");
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isCollapsibleOpen, setIsCollapsibleOpen] = React.useState(false);

  React.useEffect(() => {
    if (componentName === "progress") {
      const timer = setTimeout(() => setProgressVal(66), 500);
      return () => clearTimeout(timer);
    }
  }, [componentName]);

  if (!componentName) return null;

  // Dictionary containing info and JSX for all 38 components
  const componentInfo: Record<string, { title: string, desc: string, code: string, render: () => React.ReactNode }> = {
    // 1. Feedback & Overlays
    "alert": {
      title: "Alert",
      desc: "중요한 시스템 메시지나 경고를 사용자에게 제공하는 상자형 피드백 영역입니다.",
      code: `<Alert>\n  <Terminal className="h-4 w-4" />\n  <AlertTitle>알림</AlertTitle>\n  <AlertDescription>시스템 상태 업데이트 알림입니다.</AlertDescription>\n</Alert>`,
      render: () => (
        <div className={cn(styles.verticalListSmall, styles.previewWidthXl)}>
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>알림</AlertTitle>
            <AlertDescription>시스템 상태 업데이트 알림입니다. 중요한 정보를 전달할 때 사용합니다.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>에러 경고</AlertTitle>
            <AlertDescription>데이터 처리 중 에러가 발생했거나 주의가 필요합니다.</AlertDescription>
          </Alert>
        </div>
      )
    },
    "alert-dialog": {
      title: "AlertDialog",
      desc: "사용자에게 중대한 변경사항을 재확인하고 파괴적 액션(삭제 등)을 승인받는 경고 모달창입니다.",
      code: `<AlertDialog>\n  <AlertDialogTrigger asChild>\n    <Button color="danger">경고 모달 열기</Button>\n  </AlertDialogTrigger>\n  <AlertDialogContent>\n    <AlertDialogHeader>\n      <AlertDialogTitle>정말로 삭제하시겠습니까?</AlertDialogTitle>\n      <AlertDialogDescription>이 작업은 되돌릴 수 없습니다.</AlertDialogDescription>\n    </AlertDialogHeader>\n    <AlertDialogFooter>\n      <AlertDialogCancel>취소</AlertDialogCancel>\n      <AlertDialogAction>삭제</AlertDialogAction>\n    </AlertDialogFooter>\n  </AlertDialogContent>\n</AlertDialog>`,
      render: () => (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button color="danger">경고 모달 열기</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>정말로 삭제하시겠습니까?</AlertDialogTitle>
              <AlertDialogDescription>이 작업은 되돌릴 수 없습니다. 해당 데이터가 서버에서 완전히 삭제됩니다.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction>삭제</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
    },
    "dialog": {
      title: "Dialog",
      desc: "사용자의 현재 맥락을 일시 중단하고 포커스를 집중시켜 추가 정보 입력이나 승인을 처리하는 모달창입니다.",
      code: `<Dialog>\n  <DialogTrigger asChild>\n    <Button variant="outline">일반 모달 열기</Button>\n  </DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>프로필 수정</DialogTitle>\n      <DialogDescription>상세 설정을 편집하십시오.</DialogDescription>\n    </DialogHeader>\n    <DialogFooter>\n      <Button color="primary">저장</Button>\n    </DialogFooter>\n  </DialogContent>\n</Dialog>`,
      render: () => (
        <Dialog>
          <DialogTrigger asChild>
            <Button color="primary" variant="outline">일반 모달 열기</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>프로필 수정</DialogTitle>
              <DialogDescription>원하는 이름과 이메일 주소를 입력해 프로필을 편집하십시오.</DialogDescription>
            </DialogHeader>
            <div style={{ padding: "24rem 0", fontSize: "14rem", color: "#64748b" }}>
              여기에 폼 영역이나 상세 컴포넌트가 위치하게 됩니다.
            </div>
            <DialogFooter>
              <Button color="primary" variant="fill">저장</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    },
    "drawer": {
      title: "Drawer",
      desc: "하단(모바일 환경 권장)에서 미끄러져 올라오는 수납 방식의 모달 패널입니다.",
      code: `<Drawer>\n  <DrawerTrigger asChild>\n    <Button variant="outline">드로어 열기</Button>\n  </DrawerTrigger>\n  <DrawerContent>\n    <DrawerHeader>\n      <DrawerTitle>드로어 안내</DrawerTitle>\n    </DrawerHeader>\n    <DrawerFooter>\n      <DrawerClose asChild><Button>닫기</Button></DrawerClose>\n    </DrawerFooter>\n  </DrawerContent>\n</Drawer>`,
      render: () => (
        <Drawer>
          <DrawerTrigger asChild>
            <Button color="primary" variant="outline">하단 드로어 열기</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className={styles.drawerContent}>
              <DrawerHeader>
                <DrawerTitle>하단 정보 패널</DrawerTitle>
                <DrawerDescription>모바일 웹뷰 등에 최적화된 하단 수납식 패널입니다.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button color="primary" variant="outline" style={{ width: "100%" }}>닫기</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      )
    },
    "sheet": {
      title: "Sheet",
      desc: "주로 우측이나 좌측 화면 측면에서 슬라이드하여 노출하는 서브 대시보드나 상세 설정용 오버레이창입니다.",
      code: `<Sheet>\n  <SheetTrigger asChild>\n    <Button variant="outline">시트 열기</Button>\n  </SheetTrigger>\n  <SheetContent>\n    <SheetHeader>\n      <SheetTitle>상세 필터</SheetTitle>\n    </SheetHeader>\n  </SheetContent>\n</Sheet>`,
      render: () => (
        <Sheet>
          <SheetTrigger asChild>
            <Button color="primary" variant="outline">사이드 시트 열기</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>상세 필터 설정</SheetTitle>
              <SheetDescription>오른쪽에서 미끄러져 들어오는 측면 시트입니다.</SheetDescription>
            </SheetHeader>
            <div className={styles.textMuted}>
              여기에 다양한 설정 옵션이나 서브 뷰가 노출될 수 있습니다.
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button color="primary" variant="fill" style={{ width: "100%" }}>확인</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      )
    },
    "popover": {
      title: "Popover",
      desc: "특정 타겟 버튼이나 트리거 영역을 클릭했을 때 그 위치에 풍선 모양으로 표출되는 가벼운 팝업 영역입니다.",
      code: `<Popover>\n  <PopoverTrigger asChild>\n    <Button variant="outline">팝오버</Button>\n  </PopoverTrigger>\n  <PopoverContent>부가 내용</PopoverContent>\n</Popover>`,
      render: () => (
        <Popover>
          <PopoverTrigger asChild>
            <Button color="primary" variant="outline">팝오버 띄우기</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className={styles.popoverInner}>
              <h4 style={{ fontWeight: 600, marginBottom: "4rem" }}>팝오버 도움말</h4>
              <p>마우스 클릭 시 노출되며, 다른 곳을 클릭하면 닫힙니다.</p>
            </div>
          </PopoverContent>
        </Popover>
      )
    },
    "progress": {
      title: "Progress",
      desc: "작업 진행 상태나 리소스 사용량을 수평형 바 형태로 알기 쉽게 보여줍니다.",
      code: `<Progress value={progressVal} />`,
      render: () => (
        <div className={cn(styles.verticalListSmall, styles.previewWidthMd)}>
          <span className={styles.labelText}>진행률 표시 (Progress)</span>
          <Progress value={progressVal} />
        </div>
      )
    },
    "tooltip": {
      title: "Tooltip",
      desc: "요소에 마우스 호버 시 보조적인 상세 힌트나 설명 텍스트를 작은 말풍선으로 표출합니다.",
      code: `<TooltipProvider>\n  <Tooltip>\n    <TooltipTrigger asChild><HelpCircle /></TooltipTrigger>\n    <TooltipContent><p>도움말 내용</p></TooltipContent>\n  </Tooltip>\n</TooltipProvider>`,
      render: () => (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className={styles.tooltipTrigger}>
                <HelpCircle style={{ width: "20rem", height: "20rem" }} />
                <span style={{ fontSize: "14rem" }}>마우스 호버</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>마우스 호버 시 노출되는 간략 정보 툴팁입니다.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    },
    "sonner": {
      title: "Sonner",
      desc: "화면 구석에 가볍고 직관적인 플로팅 스낵바/토스트 메시지를 띄워줍니다.",
      code: `<Button color="primary" onClick={() => toast("알림 메시지")}>토스트 테스트</Button>`,
      render: () => (
        <Button color="primary" variant="fill" onClick={() => toast("토스트 알림이 실행되었습니다!")}>
          토스트 실행해보기
        </Button>
      )
    },

    // 2. Data Entry
    "textarea": {
      title: "Textarea",
      desc: "여러 줄의 텍스트 피드백이나 상세 설명 등을 수집하기 위한 멀티라인 텍스트 필드입니다.",
      code: `<Textarea placeholder="설명을 입력하세요." rows={4} />`,
      render: () => (
        <div className={cn(styles.verticalListSmall, styles.previewWidthMd)}>
          <Label htmlFor="bio-inp">자기소개</Label>
          <Textarea id="bio-inp" placeholder="여기에 자기소개를 적어주세요." rows={4} />
        </div>
      )
    },
    "checkbox": {
      title: "Checkbox",
      desc: "동의 여부나 옵션 항목 중 다중 선택을 다룰 때 사용하는 스퀘어 체크 버튼입니다.",
      code: `<Checkbox id="agree" />\n<Label htmlFor="agree">선택 동의</Label>`,
      render: () => (
        <div className={styles.row}>
          <Checkbox id="marketing-chk" />
          <Label htmlFor="marketing-chk" className="cursor-pointer">마케팅 정보 수신 동의 (선택)</Label>
        </div>
      )
    },
    "radio-group": {
      title: "RadioGroup",
      desc: "여러 가지 상호 배타적인 보기 항목 중에서 오직 단 하나의 값만 선택받을 때 사용하는 원형 라디오 그룹입니다.",
      code: `<RadioGroup defaultValue="A">\n  <div className={styles.row}>\n    <RadioGroupItem value="A" id="ra" />\n    <Label htmlFor="ra">옵션 A</Label>\n  </div>\n</RadioGroup>`,
      render: () => (
        <RadioGroup defaultValue="card" className={styles.verticalListSmall}>
          <div className={styles.row}>
            <RadioGroupItem value="card" id="r-card" />
            <Label htmlFor="r-card" className="cursor-pointer">신용카드 결제</Label>
          </div>
          <div className={styles.row}>
            <RadioGroupItem value="transfer" id="r-transfer" />
            <Label htmlFor="r-transfer" className="cursor-pointer">계좌 이체</Label>
          </div>
        </RadioGroup>
      )
    },
    "select": {
      title: "Select",
      desc: "제한된 영역에서 리스트를 펼쳐 하위 옵션 목록 중 하나를 선택받는 드롭다운 셀렉터입니다.",
      code: `<Select>\n  <SelectTrigger><SelectValue placeholder="선택" /></SelectTrigger>\n  <SelectContent>\n    <SelectItem value="1">옵션 1</SelectItem>\n  </SelectContent>\n</Select>`,
      render: () => (
        <div className={cn(styles.verticalListSmall, styles.previewWidthSm)}>
          <Label>연령대 선택</Label>
          <Select>
            <SelectTrigger style={{ width: "180px" }}>
              <SelectValue placeholder="선택하세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10s">10대</SelectItem>
              <SelectItem value="20s">20대</SelectItem>
              <SelectItem value="30s">30대</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )
    },
    "switch": {
      title: "Switch",
      desc: "환경설정 등에서 활성화/비활성화 상태를 즉시 토글하여 토글 즉시 결과를 적용할 때 적합한 스위치입니다.",
      code: `<Switch id="mode" />\n<Label htmlFor="mode">기능 켜기</Label>`,
      render: () => (
        <div className={styles.row}>
          <Switch id="airplane-mode-sw" />
          <Label htmlFor="airplane-mode-sw" className="cursor-pointer">비행기 모드 활성화</Label>
        </div>
      )
    },
    "slider": {
      title: "Slider",
      desc: "수평 레일형 조절기를 좌우로 슬라이드하여 밝기, 음량, 범위 설정 등을 직관적으로 세팅하는 컨트롤러입니다.",
      code: `<Slider defaultValue={[50]} max={100} step={1} />`,
      render: () => (
        <div className={cn(styles.verticalListSmall, styles.previewWidthMd)}>
          <Label>음량 설정</Label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      )
    },
    "input-otp": {
      title: "InputOTP",
      desc: "휴대폰 본인인증 번호나 이메일 인증코드 같이 고정 규격 그리드 형태의 일회용 비밀번호(OTP) 보안 입력기입니다.",
      code: `<InputOTP maxLength={6} value={otp} onChange={setOtp}>\n  <InputOTPGroup>\n    <InputOTPSlot index={0} />\n  </InputOTPGroup>\n</InputOTP>`,
      render: () => (
        <div className={styles.verticalListSmall}>
          <Label>인증번호 입력 (OTP)</Label>
          <InputOTP maxLength={6} value={otpVal} onChange={setOtpVal}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      )
    },
    "label": {
      title: "Label",
      desc: "다양한 입력 영역 폼 요소의 이름이나 설명을 정의하고 유기적으로 상호작용하도록 연결해주는 라벨 텍스트입니다.",
      code: `<Label htmlFor="username">이름</Label>`,
      render: () => (
        <div className={styles.verticalListSmall}>
          <Label htmlFor="username-demo">기본 라벨 텍스트</Label>
        </div>
      )
    },
    "toggle": {
      title: "Toggle",
      desc: "서식 지정의 볼드/이탤릭 설정처럼 꾹 눌려진 온/오프 상태 유지를 직관적으로 처리하는 전용 토글 버튼입니다.",
      code: `<Toggle pressed={pressed} onPressedChange={setPressed}><Bold /></Toggle>`,
      render: () => (
        <div className={styles.verticalListSmall}>
          <Label className="block">단일 토글</Label>
          <Toggle pressed={toggleActive} onPressedChange={setToggleActive} aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
        </div>
      )
    },
    "toggle-group": {
      title: "ToggleGroup",
      desc: "여러 서식 토글 버튼(진하게, 기울임, 밑줄)을 한 묶음으로 묶어 다중/단일 스위치 모드를 처리하는 토글 버튼 세트입니다.",
      code: `<ToggleGroup type="multiple">\n  <ToggleGroupItem value="bold"><Bold /></ToggleGroupItem>\n</ToggleGroup>`,
      render: () => (
        <div className={styles.verticalListSmall}>
          <Label className="block">토글 그룹 (다중 선택)</Label>
          <ToggleGroup type="multiple" aria-label="Formatting options">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      )
    },

    // 3. Navigation & Menus
    "breadcrumb": {
      title: "Breadcrumb",
      desc: "현재 접근 중인 사이트 경로 계층 구조를 뎁스 형태로 표현하여 상위 위치로 손쉽게 이동하도록 돕는 네비게이터입니다.",
      code: `<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/home">홈</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbPage>네비게이션</BreadcrumbPage>\n    </BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>`,
      render: () => (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/guide">가이드</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>네비게이션</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )
    },
    "pagination": {
      title: "Pagination",
      desc: "대용량 데이터를 여러 화면 페이지로 조각내어 이전, 다음, 개별 번호 링크 형태로 탐색하도록 페이징 처리를 수행합니다.",
      code: `<Pagination>\n  <PaginationContent>\n    <PaginationItem>\n      <PaginationPrevious href="#" />\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationLink href="#" isActive>1</PaginationLink>\n    </PaginationItem>\n  </PaginationContent>\n</Pagination>`,
      render: () => (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )
    },
    "navigation-menu": {
      title: "NavigationMenu",
      desc: "웹사이트 메인 헤더의 글로벌 네비게이션(GNB) 영역으로 하위 다차원 메뉴들을 마우스 오버 드롭다운으로 화려하게 안내합니다.",
      code: `<NavigationMenu>\n  <NavigationMenuList>\n    <NavigationMenuItem>\n      <NavigationMenuTrigger>메뉴</NavigationMenuTrigger>\n    </NavigationMenuItem>\n  </NavigationMenuList>\n</NavigationMenu>`,
      render: () => (
        <NavigationMenu>
          <NavigationMenuList className={styles.row}>
            <NavigationMenuItem>
              <NavigationMenuTrigger style={{ padding: "8rem 16rem", fontSize: "14rem", border: "1px solid #e2e8f0", borderRadius: "6rem" }}>사업 분야</NavigationMenuTrigger>
              <NavigationMenuContent style={{ padding: "16rem", border: "1px solid #cbd5e1", borderRadius: "8rem", minWidth: 200, backgroundColor: "white" }}>
                <NavigationMenuLink href="#">건축 사업</NavigationMenuLink>
                <div style={{ marginTop: "8rem" }}><NavigationMenuLink href="#">토목 사업</NavigationMenuLink></div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger style={{ padding: "8rem 16rem", fontSize: "14rem", border: "1px solid #e2e8f0", borderRadius: "6rem" }}>홍보 센터</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )
    },
    "menubar": {
      title: "Menubar",
      desc: "데스크톱 애플리케이션의 윈도우 파일/편집 상단 바 스타일 메뉴를 웹 브라우저에서 편리하게 에뮬레이션합니다.",
      code: `<Menubar className={styles.menubar}>\n  <MenubarMenu>\n    <MenubarTrigger>파일</MenubarTrigger>\n  </MenubarMenu>\n</Menubar>`,
      render: () => (
        <Menubar className={styles.menubar}>
          <MenubarMenu>
            <MenubarTrigger className={styles.menubarTrigger}>파일</MenubarTrigger>
            <MenubarContent style={{ backgroundColor: "white", border: "1px solid #cbd5e1", minWidth: 120, padding: "4rem", borderRadius: "6rem" }}>
              <MenubarItem style={{ padding: "8rem", fontSize: "14rem", cursor: "pointer" }}>새 창 열기</MenubarItem>
              <MenubarSeparator style={{ margin: "4rem 0", height: 1, backgroundColor: "#e2e8f0" }} />
              <MenubarItem style={{ padding: "8rem", fontSize: "14rem", cursor: "pointer" }}>인쇄</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className={styles.menubarTrigger}>편집</MenubarTrigger>
            <MenubarContent style={{ backgroundColor: "white", border: "1px solid #cbd5e1", minWidth: 120, padding: "4rem", borderRadius: "6rem" }}>
              <MenubarItem style={{ padding: "8rem", fontSize: "14rem", cursor: "pointer" }}>실행 취소</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      )
    },
    "dropdown-menu": {
      title: "DropdownMenu",
      desc: "특정 트리거 버튼 클릭 시 목록 형태의 콘텍스트 옵션이나 기능 리스트를 깔끔하게 드롭다운 오버레이로 내립니다.",
      code: `<DropdownMenu>\n  <DropdownMenuTrigger>설정</DropdownMenuTrigger>\n  <DropdownMenuContent>...\n  </DropdownMenuContent>\n</DropdownMenu>`,
      render: () => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button color="primary" variant="outline">설정 메뉴</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent style={{ width: "224px", backgroundColor: "white", border: "1px solid #cbd5e1", zIndex: 100 }}>
            <DropdownMenuLabel style={{ padding: "8rem", fontWeight: "bold" }}>내 계정</DropdownMenuLabel>
            <DropdownMenuSeparator style={{ margin: "4rem 0", height: 1, backgroundColor: "#e2e8f0" }} />
            <DropdownMenuItem style={{ cursor: "pointer", padding: "8rem", fontSize: "14rem" }}>프로필</DropdownMenuItem>
            <DropdownMenuItem style={{ cursor: "pointer", padding: "8rem", fontSize: "14rem" }}>결제 정보</DropdownMenuItem>
            <DropdownMenuSeparator style={{ margin: "4rem 0", height: 1, backgroundColor: "#e2e8f0" }} />
            <DropdownMenuItem style={{ cursor: "pointer", padding: "8rem", fontSize: "14rem", color: "#dc2626" }}>로그아웃</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
    "context-menu": {
      title: "ContextMenu",
      desc: "브라우저 화면 내 특정 지정 영역에서 우클릭(Right Click) 시 트리거되는 커스텀 단축 상황 메뉴입니다.",
      code: `<ContextMenu>\n  <ContextMenuTrigger>우클릭 영역</ContextMenuTrigger>\n  <ContextMenuContent>...\n  </ContextMenuContent>\n</ContextMenu>`,
      render: () => (
        <ContextMenu>
          <ContextMenuTrigger className={styles.contextMenuTrigger}>
            우클릭하여 메뉴 열기
          </ContextMenuTrigger>
          <ContextMenuContent style={{ width: "256px", backgroundColor: "white", border: "1px solid #cbd5e1", padding: "4rem", borderRadius: "6rem" }}>
            <ContextMenuItem style={{ cursor: "pointer", padding: "8rem", fontSize: "14rem" }}>뒤로 가기</ContextMenuItem>
            <ContextMenuItem style={{ cursor: "pointer", padding: "8rem", fontSize: "14rem" }}>새로고침</ContextMenuItem>
            <ContextMenuItem style={{ cursor: "pointer", padding: "8rem", fontSize: "14rem" }}>페이지 소스 보기</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      )
    },
    "tabs": {
      title: "Tabs",
      desc: "단일 뷰 영역 내에서 다수의 카테고리별 본문 내용을 탭 활성화를 통해 가볍게 오가는 토글 구조 패널입니다.",
      code: `<Tabs defaultValue="tab1">\n  <TabsList>\n    <TabsTrigger value="tab1">탭 1</TabsTrigger>\n  </TabsList>\n  <TabsContent value="tab1">콘텐츠 1</TabsContent>\n</Tabs>`,
      render: () => (
        <div className={cn(styles.verticalList, styles.previewWidthMd)}>
          <Tabs defaultValue="account" style={{ width: "100%" }}>
            <TabsList className={styles.tabsList}>
              <TabsTrigger value="account" className={styles.tabsTrigger}>계정 정보</TabsTrigger>
              <TabsTrigger value="password" className={styles.tabsTrigger}>비밀번호 변경</TabsTrigger>
            </TabsList>
            <TabsContent value="account" style={{ padding: "16rem", border: "1px solid #cbd5e1", borderRadius: "8rem", backgroundColor: "white", marginTop: "8rem" }}>
              <p style={{ fontSize: "14rem", color: "#64748b" }}>계정 설정 및 이메일 주소를 관리합니다.</p>
            </TabsContent>
            <TabsContent value="password" style={{ padding: "16rem", border: "1px solid #cbd5e1", borderRadius: "8rem", backgroundColor: "white", marginTop: "8rem" }}>
              <p style={{ fontSize: "14rem", color: "#64748b" }}>안전한 로그인을 위해 비밀번호를 재설정합니다.</p>
            </TabsContent>
          </Tabs>
        </div>
      )
    },

    // 4. Data Display
    "table": {
      title: "Table",
      desc: "행(Row)과 열(Column) 구조의 정형 데이터를 표 형식으로 일목요연하고 가독성 좋게 출력합니다.",
      code: `<Table>\n  <TableHeader><TableRow><TableHead>열이름</TableHead></TableRow></TableHeader>\n  <TableBody><TableRow><TableCell>값</TableCell></TableRow></TableBody>\n</Table>`,
      render: () => (
        <div className={styles.tableContainer}>
          <Table>
            <TableHeader style={{ backgroundColor: "#f8fafc" }}>
              <TableRow>
                <TableHead style={{ width: "120px", fontWeight: 600 }}>이름</TableHead>
                <TableHead style={{ fontWeight: 600 }}>직급</TableHead>
                <TableHead style={{ fontWeight: 600 }}>이메일</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell style={{ fontWeight: 500 }}>김철수</TableCell>
                <TableCell>수석 연구원</TableCell>
                <TableCell>chulsoo@buildcore.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: 500 }}>이영희</TableCell>
                <TableCell>선임 디자이너</TableCell>
                <TableCell>younghee@buildcore.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )
    },
    "accordion": {
      title: "Accordion",
      desc: "질문/답변 목록과 같이 자주 묻는 리스트 제목을 클릭 시 내용창이 아래로 스르륵 확장되는 접이식 목록입니다.",
      code: `<Accordion type="single" collapsible>\n  <AccordionItem value="1">\n    <AccordionTrigger>질문</AccordionTrigger>\n    <AccordionContent>내용</AccordionContent>\n  </AccordionItem>\n</Accordion>`,
      render: () => (
        <div className={cn(styles.verticalList, styles.previewWidthMd)}>
          <Accordion type="single" collapsible style={{ width: "100%" }}>
            <AccordionItem value="item-1" style={{ borderBottom: "1px solid #e2e8f0" }}>
              <AccordionTrigger style={{ fontSize: "14rem", fontWeight: 600, padding: "12rem 0" }}>Q. 서비스 점검 일정은 어떻게 되나요?</AccordionTrigger>
              <AccordionContent style={{ fontSize: "14rem", color: "#475569", paddingBottom: "12rem" }}>
                매주 목요일 새벽 2시부터 4시까지 정기 서버 점검이 진행됩니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )
    },
    "carousel": {
      title: "Carousel",
      desc: "프로젝트 포트폴리오 이미지나 프로모션 배너를 수평 슬라이더 형태로 부드럽게 넘겨볼 수 있게 도와줍니다.",
      code: `<Carousel>\n  <CarouselContent>\n    <CarouselItem><div className={styles.carouselItemBox}>배너 1</div></CarouselItem>\n  </CarouselContent>\n  <CarouselPrevious />\n  <CarouselNext />\n</Carousel>`,
      render: () => (
        <div className={styles.centeredBox}>
          <Carousel style={{ width: "100%", maxWidth: "320rem", position: "relative" }}>
            <CarouselContent>
              <CarouselItem>
                <div className={styles.carouselItemBox}>슬라이드 1</div>
              </CarouselItem>
              <CarouselItem>
                <div className={styles.carouselItemBox}>슬라이드 2</div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious style={{ position: "absolute", left: "-24rem", top: "50%", transform: "translateY(-50%)" }} />
            <CarouselNext style={{ position: "absolute", right: "-24rem", top: "50%", transform: "translateY(-50%)" }} />
          </Carousel>
        </div>
      )
    },
    "calendar": {
      title: "Calendar",
      desc: "날짜 및 스케줄 선택을 직관적인 달력 표 형식의 컴포넌트로 제공해줍니다.",
      code: `<Calendar mode="single" selected={date} onSelect={setDate} />`,
      render: () => (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          style={{ backgroundColor: "white", border: "1px solid #cbd5e1", borderRadius: "6rem" }}
        />
      )
    },
    "hover-card": {
      title: "HoverCard",
      desc: "클릭할 필요 없이 해당 링크 텍스트에 마우스 호버만 해도 상세 프로필이나 안내 카드를 우아하게 출력합니다.",
      code: `<HoverCard>\n  <HoverCardTrigger>링크</HoverCardTrigger>\n  <HoverCardContent>설명 카드</HoverCardContent>\n</HoverCard>`,
      render: () => (
        <HoverCard>
          <HoverCardTrigger asChild>
            <span style={{ textDecoration: "underline", cursor: "pointer", fontWeight: 600, color: "#4f46e5" }}>BuildCore 마우스 호버</span>
          </HoverCardTrigger>
          <HoverCardContent style={{ width: "320px", backgroundColor: "white", border: "1px solid #cbd5e1", padding: "16rem", borderRadius: "8rem", zIndex: 100 }}>
            <div className={styles.row}>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>BC</AvatarFallback>
              </Avatar>
              <div className={styles.verticalListSmall} style={{ gap: "4rem" }}>
                <h4 style={{ fontSize: "14rem", fontWeight: 600, margin: 0 }}>BuildCore Construction</h4>
                <p style={{ fontSize: "12rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>더 나은 미래를 설계하고 시공하는 글로벌 건설 파트너.</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      )
    },
    "avatar": {
      title: "Avatar",
      desc: "회원 프로필 이미지 등을 원형 그리드로 안전하게 렌더링하며, 미로드 시 이니셜 대체 텍스트를 제공합니다.",
      code: `<Avatar>\n  <AvatarImage src="https://..." />\n  <AvatarFallback>JD</AvatarFallback>\n</Avatar>`,
      render: () => (
        <div className={styles.row}>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>BC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </div>
      )
    },
    "skeleton": {
      title: "Skeleton",
      desc: "실제 데이터가 비동기로 수집되는 대기 시간 도중에 펄스 애니메이션 로더 구조 골격을 그려주는 대체 골격 로더입니다.",
      code: `<Skeleton style={{ height: "48rem", width: "48rem", borderRadius: "50%" }} />`,
      render: () => (
        <div className={styles.skeletonBox}>
          <Skeleton style={{ height: "48rem", width: "48rem", borderRadius: "50%", backgroundColor: "#cbd5e1" }} />
          <div className={styles.verticalListSmall} style={{ gap: "8rem" }}>
            <Skeleton style={{ height: "16rem", width: "180px", backgroundColor: "#cbd5e1" }} />
            <Skeleton style={{ height: "16rem", width: "120px", backgroundColor: "#cbd5e1" }} />
          </div>
        </div>
      )
    },

    // 5. Structure & Layout
    "aspect-ratio": {
      title: "AspectRatio",
      desc: "비디오, 배너 이미지 등이 화면 너비에 반응하면서도 항상 16:9 또는 4:3 등의 고정 종횡비를 유지하도록 영역 비율을 잡습니다.",
      code: `<AspectRatio ratio={16 / 9}>\n  <img src="banner.jpg" style={{ objectFit: 'cover' }} />\n</AspectRatio>`,
      render: () => (
        <div style={{ width: "300px" }}>
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMGxvb2tpbmclMjBhdCUyMGJsdWVwcmludHxlbnwxfHx8fDE3ODI4NTA1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Engineering"
              style={{ borderRadius: "6rem", objectFit: "cover", width: "100%", height: "100%" }}
            />
          </AspectRatio>
        </div>
      )
    },
    "separator": {
      title: "Separator",
      desc: "콘텐츠 본문 단락 사이에 수평 또는 수직 형태의 얇은 선을 추가해 가벼운 경계를 제공하는 구분선입니다.",
      code: `<Separator style={{ margin: "16rem 0" }} />\n<Separator orientation="vertical" />`,
      render: () => (
        <div style={{ padding: "16rem", border: "1px solid #e2e8f0", borderRadius: "8rem", backgroundColor: "white", width: "100%", maxWidth: "300px" }}>
          <h4 style={{ fontSize: "14rem", fontWeight: 600, color: "#1e293b", margin: 0 }}>구분선 샘플</h4>
          <Separator style={{ margin: "16rem 0", backgroundColor: "#e2e8f0" }} />
          <div className={styles.row} style={{ height: "20rem", fontSize: "14rem", color: "#64748b" }}>
            <div>구분 A</div>
            <Separator orientation="vertical" style={{ backgroundColor: "#e2e8f0" }} />
            <div>구분 B</div>
          </div>
        </div>
      )
    },
    "scroll-area": {
      title: "ScrollArea",
      desc: "스크롤바를 브라우저 디폴트가 아닌 모던한 디자인의 커스텀 스크롤바로 영역에 깔끔하게 대체해줍니다.",
      code: `<ScrollArea style={{ height: 200, width: 300 }}>\n  {/* 스크롤 내용 %}\n</ScrollArea>`,
      render: () => (
        <ScrollArea style={{ height: 200, width: 300, borderRadius: "6rem", border: "1px solid #e2e8f0", padding: "16rem", backgroundColor: "white" }}>
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} style={{ fontSize: "14rem", padding: "4rem 0", borderBottom: "1px solid #f1f5f9", color: "#475569" }}>
              스크롤 콘텐츠 데이터 목록 번호 # {i + 1}
            </div>
          ))}
        </ScrollArea>
      )
    },
    "resizable": {
      title: "Resizable",
      desc: "드래그 손잡이 레일을 마우스로 좌우/상하 드래그하여 서브 패널 간 가로세로 폭을 조절하는 패널 컨테이너입니다.",
      code: `<ResizablePanelGroup direction="horizontal">\n  <ResizablePanel defaultSize={30}>A</ResizablePanel>\n  <ResizableHandle withHandle />\n  <ResizablePanel defaultSize={70}>B</ResizablePanel>\n</ResizablePanelGroup>`,
      render: () => (
        <div style={{ width: "100%", maxWidth: "350px" }}>
          <ResizablePanelGroup direction="horizontal" style={{ minHeight: "200px", width: "100%", borderRadius: "8rem", border: "1px solid #cbd5e1", backgroundColor: "white" }}>
            <ResizablePanel defaultSize={30}>
              <div className={styles.resizableBox}>
                <span style={{ fontWeight: 600, fontSize: "12rem", color: "#94a3b8" }}>좌측</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle style={{ backgroundColor: "#cbd5e1" }} />
            <ResizablePanel defaultSize={70}>
              <div className={styles.resizableBoxMain}>
                <span style={{ fontWeight: 600, fontSize: "12rem", color: "#94a3b8" }}>우측 본문</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      )
    },
    "collapsible": {
      title: "Collapsible",
      desc: "수직 폴더 요약 메뉴 헤더를 클릭하여 추가 숨김 영역 옵션을 열고 접는 상호작용 레이아웃 상자입니다.",
      code: `<Collapsible open={isOpen} onOpenChange={setIsOpen}>\n  <CollapsibleTrigger>토글</CollapsibleTrigger>\n  <CollapsibleContent>상세설명</CollapsibleContent>\n</Collapsible>`,
      render: () => (
        <Collapsible open={isCollapsibleOpen} onOpenChange={setIsCollapsibleOpen} style={{ width: 350 }}>
          <div className={styles.collapsibleHeader}>
            <h4 style={{ fontSize: "14rem", fontWeight: 600, color: "#334155" }}>더 많은 옵션 보기</h4>
            <CollapsibleTrigger asChild>
              <Button color="primary" variant="ghost" size="sm" style={{ width: "36rem", padding: 0 }}>
                <ChevronsUpDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent style={{ padding: "12rem 16rem", border: "1px solid #cbd5e1", borderRadius: "8rem", backgroundColor: "white", marginTop: "8rem" }}>
            <div style={{ fontSize: "14rem", color: "#475569" }}>숨김 옵션 상세설명 A</div>
            <div style={{ fontSize: "14rem", color: "#475569", marginTop: "8rem" }}>숨김 옵션 상세설명 B</div>
          </CollapsibleContent>
        </Collapsible>
      )
    }
  };

  const currentInfo = componentInfo[componentName];

  if (!currentInfo) {
    return (
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.title}>알 수 없는 컴포넌트</h1>
          <p className={styles.description}>선택하신 컴포넌트 가이드가 아직 구현되지 않았거나 잘못된 경로입니다.</p>
        </header>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>{currentInfo.title}</h1>
        <p className={styles.description}>{currentInfo.desc}</p>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Interactive Preview (컴포넌트 보기)</h2>
        </div>

        <div className={styles.subSection}>
          <div className={styles.block}>
            <PreviewBlock code={currentInfo.code}>
              {currentInfo.render()}
            </PreviewBlock>
          </div>
        </div>
      </section>
    </div>
  );
}
