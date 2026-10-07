import { useEffect, type ReactNode } from 'react'
import { useAuthorized } from '../../api/useAuthorized';
import { useAuthStore } from '../../stores/useAuthStore';

type AuthSyncProps = {
  children: ReactNode;
};

function AuthSync({ children }: AuthSyncProps) {
  const { data } = useAuthorized();
  const setUser = useAuthStore(state => state.setUser);

  useEffect(() => {
    if (data === undefined) return;

    setUser(data.user);
  }, [data, setUser]);

  return (
    <>
      {children}
    </>
  )
}

export default AuthSync
