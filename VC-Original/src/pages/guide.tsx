import { Outlet } from 'react-router-dom';
import GuideLayout from './guide/guide-layout';

const GuideRouteLayout = () => (
  <GuideLayout>
    <Outlet />
  </GuideLayout>
);

export default GuideRouteLayout;
