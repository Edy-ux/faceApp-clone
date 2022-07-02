import { createRoot } from "react-dom/client";
import AuthProvider from './contexts/auth'
import App from './App'
const root = createRoot(document.querySelector('#root'))

root.render(
    <AuthProvider>
      <App/>
    </AuthProvider>
)