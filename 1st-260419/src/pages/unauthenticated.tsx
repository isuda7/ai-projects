import { Outlet } from 'react-router-dom';
import UnauthenticatedLayout from '@/components/layout/UnauthenticatedLayout';

const UnauthenticatedRouteLayout = () => (
  <UnauthenticatedLayout>
    <Outlet />
  </UnauthenticatedLayout>
);

export default UnauthenticatedRouteLayout;
