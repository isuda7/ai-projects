// @ts-nocheck
import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './dashboard.module.scss';

type PageType = 'Page' | 'Popup';

interface PageItem {
  no: string;
  path: string;
  type: PageType;
  url: string;
  date: string;
  status: 'Published' | 'Review' | 'Draft';
  remarks: string;
}

interface PageGroup {
  name: string;
  items: PageItem[];
}

const PAGES_DATA: PageGroup[] = [
  {
    name: 'MAIN NAVIGATION',
    items: [
      { no: '01', path: 'Main > Home > Dashboard', type: 'Page', url: '/index.html', date: '2026-05-28', status: 'Published', remarks: 'Final design approved' },
      { no: '02', path: 'Main > Search > Results', type: 'Page', url: '/search', date: '2026-05-29', status: 'Draft', remarks: '-' },
    ]
  },
  {
    name: 'SERVICES & SOLUTIONS',
    items: [
      { no: '03', path: 'Services > Solutions > Enterprise Architecture', type: 'Page', url: '/solutions/ia-enterprise', date: '2026-05-30', status: 'Review', remarks: 'Pending copy review' },
      { no: '04', path: 'Services > Solutions > Content Strategy', type: 'Popup', url: '/solutions/content-strategy', date: '2026-06-01', status: 'Published', remarks: '-' },
    ]
  },
  {
    name: 'SUPPORT & LEGAL',
    items: [
      { no: '05', path: 'Support > Help Center > FAQ', type: 'Page', url: '/support/faq', date: '2026-06-05', status: 'Published', remarks: 'All assets linked' },
      { no: '06', path: 'Support > Legal > Privacy Policy', type: 'Popup', url: '/legal/privacy', date: '2026-06-07', status: 'Review', remarks: 'Legal team signoff p...' },
    ]
  }
];

const PublishingListPage = () => {
  const [expandedGroups, setExpandedGroups] = React.useState<Record<string, boolean>>({
    'MAIN NAVIGATION': true,
    'SERVICES & SOLUTIONS': true,
    'SUPPORT & LEGAL': true,
  });

  const toggleGroup = (name: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
      <div className={styles.wrapper}>
        {/* Summary Dashboard */}
        <div className={styles.dashboard}>
           <div className={styles.dashboard_item}>
              <span className={styles.dashboard_label}>Total Pages</span>
              <span className={styles.dashboard_value}>06</span>
           </div>
           
           <div className={styles.dashboard_divider} />

           <div className={styles.dashboard_item}>
              <span className={styles.dashboard_label}>완료 (Published)</span>
              <span className={`${styles.dashboard_value} ${styles.dashboard_value_cyan}`}>03</span>
           </div>

           <div className={styles.dashboard_item}>
              <span className={styles.dashboard_label}>검토중 (Review)</span>
              <span className={`${styles.dashboard_value} ${styles.dashboard_value_amber}`}>02</span>
           </div>

           <div className={styles.dashboard_item}>
              <span className={styles.dashboard_label}>대기 (Draft)</span>
              <span className={styles.dashboard_value}>01</span>
           </div>
        </div>

        {/* Table Area */}
        <div className={styles.table_wrapper}>
           <table className={styles.table}>
              <thead>
                 <tr>
                    <th className={styles.no_col}>NO</th>
                    <th>PATH</th>
                    <th className={styles.type_col}>TYPE</th>
                    <th>URL</th>
                    <th>DATE</th>
                    <th className={styles.status_col}>STATUS</th>
                    <th>REMARKS</th>
                 </tr>
              </thead>
              <tbody>
                 {PAGES_DATA.map((group, groupIdx) => {
                    const isExpanded = expandedGroups[group.name];
                    return (
                      <React.Fragment key={groupIdx}>
                        {/* Group Header */}
                        <tr 
                          onClick={() => toggleGroup(group.name)}
                          className={styles.group_row}
                        >
                           <td colSpan={7}>
                              <div className={styles.group_header}>
                                 <span className={styles.group_label}>
                                    {group.name}
                                 </span>
                                 <ChevronDown 
                                   size={14} 
                                   className={`${styles.chevron} ${!isExpanded ? styles.collapsed : ''}`}
                                 />
                              </div>
                           </td>
                        </tr>
                        {/* Group Items */}
                        {isExpanded && group.items.map((item, itemIdx) => (
                           <tr key={itemIdx} className={styles.item_row}>
                              <td className={styles.no_cell}>
                                 {item.no}
                              </td>
                              <td className={styles.path_cell}>
                                 {item.path}
                              </td>
                              <td className={styles.type_cell}>
                                 <span>{item.type}</span>
                              </td>
                              <td className={styles.url_cell}>
                                 <a href={item.url}>{item.url}</a>
                              </td>
                              <td className={styles.date_cell}>
                                 {item.date}
                              </td>
                              <td className={styles.status_cell}>
                                 <StatusBadge status={item.status} />
                              </td>
                              <td className={styles.remarks_cell}>
                                 {item.remarks}
                              </td>
                           </tr>
                        ))}
                      </React.Fragment>
                    );
                 })}
              </tbody>
           </table>
        </div>
      </div>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  const statusMap: Record<string, { class: string; label: string }> = {
    Published: { class: 'published', label: '완료' },
    Review: { class: 'review', label: '검토중' },
    Draft: { class: 'draft', label: '대기' }
  };

  const { class: statusClass, label } = statusMap[status] || { class: '', label: status };

  return (
    <span className={`${styles.status_badge} ${styles[statusClass]}`}>
      {label}
    </span>
  );
}

export default PublishingListPage;