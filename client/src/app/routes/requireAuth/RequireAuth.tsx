import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuthorized } from '../../../features/auth/api/useAuthorized';
import FullLoader from '../../../components/loaders/fullLoader/FullLoader';
import type { AuthRedirectState } from '../../../types/auth';

function RequireAuth() {
  const location = useLocation();
  const { data, isPending, isError } = useAuthorized()

  if (isPending) {
    return <FullLoader />
  }

  if (isError) {
    return <p>Error</p>
  }

  if (!data?.isAuthorized) {
    const redirectState: AuthRedirectState = {
      from: {
        pathname: location.pathname,
        search: location.search,
        hash: location.hash,
      },
    };

    return <Navigate to="/" replace state={redirectState} />
  }

  return <Outlet />
}

export default RequireAuth
