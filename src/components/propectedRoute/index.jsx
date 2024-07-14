import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { Profile } from '../../pages/Profile';

function ProtectedRouted() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to='/login' />;

  return <Profile />;
}

export { ProtectedRouted };
