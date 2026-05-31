import { Navigate } from 'react-router-dom';

const RootRedirectPage = () => {
  return <Navigate to="/unauthenticated" replace />;
};

export default RootRedirectPage;
