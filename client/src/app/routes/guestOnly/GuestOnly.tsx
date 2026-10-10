import { Navigate, Outlet } from 'react-router'
import { useAuthorized } from '../../../features/auth/api/useAuthorized';
import FullLoader from '../../../components/loaders/fullLoader/FullLoader';
import ErrorPage from '../errorPage/ErrorPage';

function GuestOnly() {
  const { data, isPending, isError } = useAuthorized()

  if (isPending) {
    return <FullLoader />
  }

  if (isError) {
    return <ErrorPage />
  }

  if (data?.isAuthorized) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}

export default GuestOnly
