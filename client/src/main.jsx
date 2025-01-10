import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "@/components/ui/sonner"
import './index.css'
import App from './App.jsx'
import {Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Auth from './pages/auth.page.jsx' 
import Chats from './pages/chat.page.jsx'
import Profile from './pages/profile.page.jsx'
import Landing from './pages/Landing.page.jsx'
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
