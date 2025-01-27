import React, { useState,useRef,useEffect } from 'react'
import { GrAttachment } from 'react-icons/gr'
import { RiEmojiStickerLine } from 'react-icons/ri'
import { IoSend } from 'react-icons/io5'
import EmojiPicker from 'emoji-picker-react'


const MessageBar = () => {

  const [message, setMessage] = useState('')
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false)
  const emojiRef = useRef()

  useEffect(() => {
      function handleClickOutside(event) {
        if (emojiRef.current && !emojiRef.current.contains(event.target)) {
          setEmojiPickerOpen(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
  }, 
  [emojiRef])

  const handleSendMessage = async () => {}

  const handleAddEmoji = (emoji) => {
    setMessage((msg) => msg + emoji.emoji )
  }

  return (
    <div className="h-[10vh] bg-[#1c1d25] center px-8 mb-6  gap-6" >
      <div className="flex-1 flex bg-[#2a2b33] rounded-md gap-5 items-center pr-5 " >
        <input
          type="text"
          className='flex-1 p-5 bg-transparent rounded-md focus:border-none focus:outline-none w-full'
          placeholder='Type your message here'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className='text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all'>
          <GrAttachment className='text-2xl' />
        </button>

        <div className="relative">
          <button className='text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all'
          onClick={() => setEmojiPickerOpen(!emojiPickerOpen)}
          >
            <RiEmojiStickerLine className='text-2xl' />
          </button>
          <div className="absolute bottom-16 left-[-170px]" ref={emojiRef}
          >
            <EmojiPicker theme='dark'
            open={emojiPickerOpen}
            onEmojiClick={handleAddEmoji}
            autoFocusSearch={false}
            width={300}
            height={500}

            
            />
          </div>
        </div>
      </div>
        <button className='bg-[#8417ff] rounded-md center focus:border-none focus:outline-none focus:text-white duration-300 transition-all p-5 hover:bg-[#741bda] focus:bg-[#741bda] '
        onClick={handleSendMessage} 
        >
          <IoSend className='text-2xl' />
        </button>
    </div>
  )
}

export default MessageBar