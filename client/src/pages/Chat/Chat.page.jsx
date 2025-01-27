import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getProfileRoute } from '@/apiRoutes'
import { use } from 'react'
import ChatContainer from './components/chat-container'
import EmptyContainer from './components/empty-container'
import ContactsContainer from './components/contacts-container'

const Chats = () => {

  return (
    <div className='flex h-[100vh] text-white overflow-hidden'>
      <ContactsContainer/>
      {/* <EmptyContainer /> */}
      {/* <ChatContainer /> */}
    </div>
  )
}

export default Chats