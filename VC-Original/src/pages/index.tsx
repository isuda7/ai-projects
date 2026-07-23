import { Navigate } from 'react-router-dom';

const RootRedirectPage = () => {
  return <Navigate to="/guide/dashboard" replace />;
};

export default RootRedirectPage;
