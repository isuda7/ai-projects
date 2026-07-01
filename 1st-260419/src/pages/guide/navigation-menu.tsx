// @ts-nocheck
import React from 'react';
import GuideSection from '@/components/guide/GuideSection';
import * as Comp from '@/components/ui/navigation-menu/navigation-menu';

const NavigationMenuGuide = () => {
  return (
    <div className="guide-wrapper">
      <div style={{ padding: '32px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Navigation-menu</h1>
        <p style={{ marginBottom: '32px' }}>This is the automatically generated guide page for the Navigation-menu component.</p>
        <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
          
          <div style={{ fontSize: '14px', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px' }}>
            Component <strong>{ ' ' + 'NavigationMenu' + ' ' }</strong> has been successfully migrated to SCSS module format.
            <br/>(Detailed props usage guide to be added)
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavigationMenuGuide;
