import { Navigate, Outlet } from 'react-router'
import { useAuthorized } from '../../../features/auth/api/useAuthorized';
import FullLoader from '../../../components/loaders/fullLoader/FullLoader';

function GuestOnly() {
  const { data, isPending, isError, error } = useAuthorized()

  if (isPending) {
    return <FullLoader />
  }

  if (isError) {
    throw error
  }

  if (data?.isAuthorized) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}

export default GuestOnly
