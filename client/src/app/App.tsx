import { RouterProvider } from "react-router"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./provider"
import router from "./router"
import { Flip, ToastContainer } from "react-toastify"
import AuthSync from "../features/auth/components/authSync/AuthSync"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthSync>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          closeOnClick={true}
          transition={Flip}
        />
      </AuthSync>
    </QueryClientProvider>
  )
}

export default App