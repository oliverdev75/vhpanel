import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, redirect } from 'react-router'
import { RouterProvider } from 'react-router'
import AuthProvider from './contexts/AuthContext'
import Login from './views/Login'
import Layout from './layout/Layout'
import ServersIndex from './pages/servers/Index'
import Settings from './pages/Settings'
import './css/index.css'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '',
        loader: () => redirect('/servers')
      },
      {
        path: "/servers",
        children: [
          {
            index: true,
            element: <ServersIndex />,
          },
          {
            path: "/create",
            element: <CreateServer />
          }
        ]
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
