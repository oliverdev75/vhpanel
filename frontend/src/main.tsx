import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Login from './views/Login'
import Layout from './layout/Layout'
import Servers from './pages/Servers'
import Settings from './pages/Settings'
import './css/index.css'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Servers />
      },
      {
        path: "/settings",
        element: <Settings />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
