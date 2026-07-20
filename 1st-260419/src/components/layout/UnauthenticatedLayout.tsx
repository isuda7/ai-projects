import { ReactNode } from 'react';
import styles from './unauthenticated-layout.module.scss';

interface UnauthenticatedLayoutProps {
  children: ReactNode;
}

const UnauthenticatedLayout = ({ children }: UnauthenticatedLayoutProps) => (
  <div className={styles.layout}>
    <div className={styles.container}>
      {children}
    </div>
  </div>
);

export default UnauthenticatedLayout;
