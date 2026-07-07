// @ts-nocheck
import React from 'react';
import styles from './template.module.scss';
import GuideSection from './components/guide-section';
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup  } from '@/components/ui/context-menu';



const ContextMenuGuidePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title_h1}>ContextMenu</h1>
        <p className={styles.description}>
          마우스 우클릭 시 특정 영역에서 나타나는 커스텀 컨텍스트 메뉴입니다.
        </p>
      </header>

      <GuideSection title="1. Overview & Specs">
          <p className={styles.description}>
            ContextMenu 컴포넌트의 기본 사용법과 지원하는 주요 속성(Props)을 안내합니다.
          </p>
          
          <div className={styles['spec_table_wrapper']}>
            <table className={styles['spec_table']}>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>modal</code></td>
                  <td><code>boolean</code></td>
                  <td><code>true</code></td>
                  <td>모달 모드 여부 (포커스 트랩)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.guideline}>
            <strong>Guideline:</strong> 프로젝트의 디자인 시스템 규칙에 맞추어 사용하세요.
          </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup  } from '@/components/ui/context-menu';

// Basic Component Usage
<ContextMenu>
  <ContextMenuTrigger className="...">Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back<ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem>
    <ContextMenuItem disabled>Forward</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked>Show Bookmarks</ContextMenuCheckboxItem>
  </ContextMenuContent>
</ContextMenu>`}
              </code>
            </pre>
          </div>
      </GuideSection>

      <GuideSection title="2. Basic Usage">
          <p className={styles.description}>
            가장 기본적인 형태의 렌더링 예제입니다.
          </p>
        <div className={styles.sub_section}>
          <h3 className={styles.title_h3}>2.1. Default State</h3>
          <div className={styles.preview}>
            
              <ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem inset>
      Back
      <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset disabled>
      Forward
      <ContextMenuShortcut>⌘]</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset>
      Reload
      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Save Page As...<ContextMenuShortcut>⇧⌘S</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked>Show Bookmarks Bar<ContextMenuShortcut>⌘⇧B</ContextMenuShortcut></ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
  </ContextMenuContent>
</ContextMenu>
            </div>
          <div className={styles.code_view}>
            <pre>
              <code>
{`<ContextMenu>
  <ContextMenuTrigger className="...">Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back<ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem>
    <ContextMenuItem disabled>Forward</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked>Show Bookmarks</ContextMenuCheckboxItem>
  </ContextMenuContent>
</ContextMenu>`}
              </code>
            </pre>
          </div>
        </div>
      </GuideSection>

      
    </div>
  );
};

export default ContextMenuGuidePage;
