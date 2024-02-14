import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProfilesPage from './pages/ProfilesPage.jsx';
import NotFoundPage from './pages/NoteFoundPage.jsx';
import Profile from './pages/ProfilePage.jsx'
const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
  errorElement: <NotFoundPage />
},
{
  path: '/profiles',
  element: <ProfilesPage />,
  errorElement: <h1>kidher a giaa</h1>,
  children: [{
    path: '/profiles/:profileId',
    element: <Profile />
  }]
},

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
