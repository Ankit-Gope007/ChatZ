import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "@/components/ui/sonner"
import './index.css'
import App from './App.jsx'
import {Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Auth from './pages/Auth/Auth.page.jsx/index.js' 
// import Chats from './pages/Chat/Chat.page.jsx/index.js'
// import Profile from './pages/Profile/Profile.page.jsx/index.js'
import Landing from './pages/Landing.page.jsx'
import Auth from './pages/Auth/Auth.page.jsx'
import Chats from './pages/Chat/Chat.page.jsx'
import Profile from './pages/Profile/Profile.page.jsx'
import useAuthStore from './state/index.js'
import { Navigate } from 'react-router-dom'



const routes = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Landing/>} />
    <Route path='auth' element={<Auth />} />
    <Route path='chats' element={
      <Chats/>} />
    <Route path='profile' element={<Profile/>} />
  </Route>

));

createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={routes} />
  <Toaster closeButton />
  </>
)
