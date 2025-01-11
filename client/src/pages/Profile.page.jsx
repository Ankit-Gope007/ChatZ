import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { getProfileRoute } from '@/apiRoutes';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { colors, getColor } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { updateProfileRoute } from '@/apiRoutes.js';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaPlus } from 'react-icons/fa'


const Profile = () => {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [image, setImage] = useState(null)
    const [instantImage,setInstantImage] = useState(null)
    const [hovered, setHovered] = useState(false)
    const [selectedColor, setSelectedColor] = useState(0)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const fileInputRef = useRef(null)
    useEffect(() => {
        getProfile()
    }, [])

    const handleImageChange = (e) => {

        
        const imageUpload = e.target.files[0]

        setImage(imageUpload)
        // setInstantImage(image)
        // console.log("image:", imageUpload)



        const file = e.target.files[0]
        // console.log(file)
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                // console.log(reader.result)
                setInstantImage(reader.result)
            }
            reader.readAsDataURL(file)
        }


    }

    const handleDeleteImage = () => {
        setImage(null)
    }

    const handleInputFileClick = () => {
        fileInputRef.current.click()
    }

    const getProfile = async () => {
        try {
           
            const response = await axios.get(getProfileRoute, { withCredentials: true })
            const value = response.data.data
            // console.log("Value:", value)


            setEmail(value.email)
            if (value.firstName && value.lastName && value.color) {
                setFirstName(value.firstName)
                setLastName(value.lastName)
                setSelectedColor(value.color)
                // console.log("Value.image", value.image)
                if (value.image) {
                    setImage(value.image)
                }
            }
            else{
                setFirstName("")
                setLastName("")
                setSelectedColor(0)
            }


        } catch (error) {
            console.log(error)

        }
    };

    const handleUpdateProfile = async () => {
        try {
            setLoading(true)
            const response = await axios.post(updateProfileRoute, { firstName, lastName, color: selectedColor, image },

                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }, withCredentials: true
                })
            console.log("Response:", response.data.data)
            if (response.status === 200) {
                toast.success("Profile updated successfully")
                navigate('/chats')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const divImage = instantImage ? instantImage : image

    return (
        <>
        {
            loading && 
            <div className="w-screen h-screen center overflow-hidden  bg-[url('https://i.gifer.com/origin/85/856de846e59271089eca26c4260c9bdb_w200.webp')] ">
                <div className="bg-white w-[80%] xl:w-[70%] h-[70%] rounded-xl center flex-col  shadow-xl xl:gap-[150px]">
                    <div className=" overflow-hidden bg-contain bg-[url('https://i.pinimg.com/originals/6e/34/f0/6e34f0027ae54a25873e2e07cf0aafb2.gif')] h-[300px] w-[300px]">
                    </div>
                    <div className='center font-bold w-full flex-col'>
                        <h1 className='ml-5'>Congratulations you have set up your profile successfully..</h1>
                        <br />
                        <h1 className='ml-5'>Please Wait while we redirect you to your Chat page..</h1>
           
                    </div>
                </div>
                </div>
        }
        {
            !loading &&
            <div className="w-screen h-screen center overflow-hidden  bg-[url('https://i.gifer.com/origin/85/856de846e59271089eca26c4260c9bdb_w200.webp')]   ">
                <div className='bg-white  w-[80%] xl:w-[70%] h-[70%] rounded-xl center flex-col xl:grid xl:grid-cols-2 shadow-xl xl:gap-[150px]'>
                    <div className='xl:ml-[100px] hidden xl:flex  '>
                        <img src="https://i.gifer.com/origin/72/729b9c34d591753e02fed6837e3235e4_w200.webp" className='size-[450px] ' alt="greetings" />
                    </div>
                    <div className='center flex-col xl:w-[300px]'>
                        <div className='h-full w-32 md:w-48 md:h-48 relative flex items-center justify-center'
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}>

                            <Avatar className="h-32 w-32 md:w-48 md:h-48 rounded-full overflow-hidden">
                                {
                                    
                                    divImage ? <AvatarImage src={divImage} alt="profile"
                                        className="object-cover w-full h-full bg-black"
                                    /> : <div className={`uppercase h-32 w-32 md:w-48 md:h-48 text-5xl border-[1px] flex items-center justify-center rounded-full
                                 ${getColor(selectedColor)}`}
                                    >
                                        {firstName ? firstName.split("").shift() : email.split("").shift()}
                                    </div>
                                }
                            </Avatar>
                            {
                                hovered &&
                                <div
                                    onClick={image ? handleDeleteImage : handleInputFileClick}
                                    className="absolute  inset-0 flex items-center justify-center bg-black/50 rounded-full h-32 w-32 cursor-pointer ring-fuchsia-50 md:h-48 md:w-48 ">
                                    {
                                        image ? <FaTrash className='text-3xl text-white cursor-pointer' /> : <FaPlus className='text-3xl text-white cursor-pointer ' />
                                    }
                                </div>

                            }
                            <input
                                onChange={handleImageChange}
                                type="file" ref={fileInputRef} className='hidden'
                                name="profile-image" accept='.svg,.jpg,.jpeg,.webp, .png' />
                        </div>
                        <div className='flex w-full gap-5 center mt-5 mb-10'>
                            {
                                colors.map((color, index) => (
                                    <div key={index} onClick={() => setSelectedColor(index)} className={`h-8 w-8 rounded-full ${color} cursor-pointer transition-all duration-300 
                                ${selectedColor === index ? "outline outline-white/50 outline-2" : ""}`}></div>
                                ))
                            }
                        </div>
                        <div>
                            <Input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name" type="text" className="rounded-full border-none shadow-lg w-[300px]" />
                        </div>
                        <div>
                            <Input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last Name" type="text" className="rounded-full border-none shadow-lg w-[300px] mt-5" />
                        </div>
                        <div className='center'>
                            <Button
                                onClick={handleUpdateProfile}
                                className="w-[300px] rounded-full mt-10 md:w-[320px]">Save </Button>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
};


export default Profile