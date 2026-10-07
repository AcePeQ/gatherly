import { Navigate, Outlet } from 'react-router'
import { useAuthStore } from '../../../features/auth/stores/useAuthStore';
import { useAuthorized } from '../../../features/auth/api/useAuthorized';
import FullLoader from '../../../components/loaders/fullLoader/FullLoader';

function RequireAuth() {
  const { data, isPending, isError } = useAuthorized()

  const user = useAuthStore(state => state.user);

  if (isPending && !user) {
    return <FullLoader />
  }

  if (isError) {
    return <p>Error</p>
  }

  if (!data?.isAuthorized) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default RequireAuth