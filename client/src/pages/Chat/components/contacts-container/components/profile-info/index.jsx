import React, { useEffect } from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { useState } from 'react'
import axios from 'axios'
import { getProfileRoute } from '@/apiRoutes'
import { getColor } from '@/lib/utils'
import { useNavigate } from 'react-router-dom'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { FiEdit2 } from 'react-icons/fi'
import { IoLogOut } from 'react-icons/io5'
import { logoutRoute } from '@/apiRoutes'

axios.defaults.withCredentials = true




const ProfileInfo = () => {

    const [image, setImage] = useState(null)
    const [color, setColor] = useState(0)
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [lastName, setLastName] = useState("")
    const navigate = useNavigate()


    useEffect(() => {
        getProfile()
    }, [])

    const getProfilePage = () => {
        navigate("/profile")
    }

    const getProfile = async () => {
        try {

            const response = await axios.get(getProfileRoute, { withCredentials: true })
            const value = response.data.data
            setImage(value.image)
            setColor(value.color)
            setFirstName(value.firstName)
            setEmail(value.email)
            setLastName(value.lastName)



        } catch (error) {
            console.log(error)

        }
    };

    const LogoutUser = async () => {

        try {
            const response = await axios.post(logoutRoute)
            navigate("/auth")
        } catch (error) {
            console.log(error)

        }
    }


    return (
        <div
            className='r absolute bottom-0 flex items-center justify-between h-16 px-10 w-full bg-[#2a2b33]'>
            <div className=' gap-3 center'>
                <Avatar className="h-[50px] w-[50px]  rounded-full overflow-hidden">
                    {

                        image ? <AvatarImage src={image} alt="profile"
                            className="object-cover w-full h-full bg-black"
                        /> : <div className={`uppercase h-32 w-32 md:w-48 md:h-48 text-lg border-[1px] flex items-center justify-center rounded-full
                                 ${getColor(color)}`}
                        >
                            {firstName ? firstName.split("").shift() : email.split("").shift()}
                        </div>
                    }
                </Avatar>
                <div>{firstName} {lastName}</div>
                <div className='absolute right-0 top-6 '>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger><FiEdit2 onClick={getProfilePage} className='text-purple-500 text-lg cursor-pointer' /></TooltipTrigger>
                            <TooltipContent>
                                <p className='bg-[#2a2b33]'>Edit Profile</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger><IoLogOut onClick={LogoutUser} className='text-purple-500 text-lg cursor-pointer mx-5' /></TooltipTrigger>
                            <TooltipContent>
                                <p className='bg-[#2a2b33]'>Logout</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                </div>

            </div>
        </div>
    )
}

export default ProfileInfo