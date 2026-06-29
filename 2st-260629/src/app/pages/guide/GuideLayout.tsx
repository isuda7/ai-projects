import { Link, Outlet, useLocation } from "react-router";
import { HardHat, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "../../../lib/utils";
import styles from "./GuideLayout.module.scss";

type NavItem = {
  title: string;
  path?: string;
  children?: NavItem[];
};

// Detailed, English-only navigation structure
const guideNav: NavItem[] = [
  {
    title: "Design Tokens",
    children: [
      { title: "Colors", path: "/guide/colors" },
      { title: "Typography", path: "/guide/typography" },
    ]
  },
  {
    title: "Components",
    children: [
      { title: "Accordion", path: "/guide/accordion" },
      { title: "Alert", path: "/guide/alert" },
      { title: "AlertDialog", path: "/guide/alert-dialog" },
      { title: "AspectRatio", path: "/guide/aspect-ratio" },
      { title: "Avatar", path: "/guide/avatar" },
      { title: "Badge", path: "/guide/badge" },
      { title: "Breadcrumb", path: "/guide/breadcrumb" },
      { title: "Button", path: "/guide/button" },
      { title: "Calendar", path: "/guide/calendar" },
      { title: "Card", path: "/guide/card" },
      { title: "Carousel", path: "/guide/carousel" },
      { title: "Checkbox", path: "/guide/checkbox" },
      { title: "Collapsible", path: "/guide/collapsible" },
      { title: "ContextMenu", path: "/guide/context-menu" },
      { title: "Dialog", path: "/guide/dialog" },
      { title: "Drawer", path: "/guide/drawer" },
      { title: "DropdownMenu", path: "/guide/dropdown-menu" },
      { title: "HoverCard", path: "/guide/hover-card" },
      { title: "Input", path: "/guide/input" },
      { title: "InputOTP", path: "/guide/input-otp" },
      { title: "Label", path: "/guide/label" },
      { title: "Menubar", path: "/guide/menubar" },
      { title: "Modal", path: "/guide/modal" },
      { title: "NavigationMenu", path: "/guide/navigation-menu" },
      { title: "Pagination", path: "/guide/pagination" },
      { title: "Popover", path: "/guide/popover" },
      { title: "Progress", path: "/guide/progress" },
      { title: "RadioGroup", path: "/guide/radio-group" },
      { title: "Resizable", path: "/guide/resizable" },
      { title: "ScrollArea", path: "/guide/scroll-area" },
      { title: "Select", path: "/guide/select" },
      { title: "Separator", path: "/guide/separator" },
      { title: "Sheet", path: "/guide/sheet" },
      { title: "Skeleton", path: "/guide/skeleton" },
      { title: "Slider", path: "/guide/slider" },
      { title: "Sonner", path: "/guide/sonner" },
      { title: "Switch", path: "/guide/switch" },
      { title: "Table", path: "/guide/table" },
      { title: "Tabs", path: "/guide/tabs" },
      { title: "Textarea", path: "/guide/textarea" },
      { title: "Toggle", path: "/guide/toggle" },
      { title: "ToggleGroup", path: "/guide/toggle-group" },
      { title: "Tooltip", path: "/guide/tooltip" },
    ]
  },
  {
    title: "Patterns",
    children: [
      { title: "Board", path: "/guide/board" },
      { title: "Hero", path: "/guide/hero" },
      { title: "Section", path: "/guide/section" },
    ]
  }
];

const NavNode = ({ item, depth = 0, currentPath }: { item: NavItem, depth?: number, currentPath: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.path === currentPath;

  return (
    <div className={styles.navNodeContainer}>
      {item.path ? (
        <Link
          to={item.path}
          className={cn(
            styles.navLink,
            styles[`navLink--depth${depth}`],
            isActive && styles['navLink--active']
          )}
          style={{ paddingLeft: `${depth * 16 + 16}px` }}
        >
          {item.title}
        </Link>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            styles.navButton,
            styles[`navButton--depth${depth}`]
          )}
          style={{ paddingLeft: `${depth * 16 + 16}px` }}
        >
          <span>{item.title}</span>
          {hasChildren && (
            <ChevronDown className={cn(styles.chevron, !isOpen && styles['chevron--closed'])} />
          )}
        </button>
      )}
      {hasChildren && isOpen && (
        <div className={styles.navNodeContainer}>
          {item.children!.map((child, idx) => (
            <NavNode key={idx} item={child} depth={depth + 1} currentPath={currentPath} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function GuideLayout() {
  const location = useLocation();

  return (
    <div className={styles.layout}>
      {/* Sidebar Navigation */}
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <Link to="/" className={styles.logoLink}>
            <HardHat className={styles.logoIcon} />
            <span className={styles.logoText}>BuildCore DS</span>
          </Link>
        </div>
        <div className={styles.navMenu}>
          {guideNav.map((item, idx) => (
            <NavNode key={idx} item={item} currentPath={location.pathname} />
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        {/* Top Header (Fixed) */}
        <header className={styles.header}>
          <div className={styles.breadcrumb}>
            {(() => {
              let parent = "";
              let child = "";
              for (const group of guideNav) {
                const found = group.children?.find(c => c.path === location.pathname);
                if (found) {
                  parent = group.title.toUpperCase();
                  child = found.title;
                  break;
                }
              }
              if (!parent) return <span className={styles.breadcrumbCurrent}>Design System Guide</span>;
              return (
                <>
                  <span>Design System Guide</span>
                  <span className={styles.breadcrumbSeparator}>&gt;</span>
                  <span>{parent}</span>
                  <span className={styles.breadcrumbSeparator}>&gt;</span>
                  <span className={styles.breadcrumbCurrent}>{child}</span>
                </>
              );
            })()}
          </div>
          <Link to="/" className={styles.backLink}>
            Back to Main Site &rarr;
          </Link>
        </header>

        {/* Component Preview Container */}
        <div className={styles.previewContainer}>
          <div className={styles.previewBox}>
            <div className={styles.previewContent}>
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}