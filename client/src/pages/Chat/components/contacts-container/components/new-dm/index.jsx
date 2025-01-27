import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { getColor } from '@/lib/utils'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Lottie from 'react-lottie'
import { animationDefaultOptions } from '@/lib/utils'
import {
    contactsRoute,
    getProfileRoute
} from '@/apiRoutes'
import { FaPlus } from 'react-icons/fa'
import axios from 'axios'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { useNavigate } from 'react-router-dom'

const NewDM = () => {

    const [openNewContactModle, setOpenNewContactModle] = useState(false)
    const [searchedContacts, setSearchedContacts] = useState([])


  
    const searchContacts = async (searchTerm) => {
        try {
            if (searchTerm.length > 0) {
                const response = await axios.post(contactsRoute,
                    { searchTerm },
                    { withCredentials: true });
                if (response.status === 200 && response.data.data) {
                    console.log(response.data.data.contacts)
                    setSearchedContacts(response.data.data.contacts)
                }
            }
            else {
                setSearchedContacts([])
            }

        } catch (error) {
            console.log(error)

        }
    }

    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <FaPlus
                            className="text-neutral-400 font-light text-opacity-90 text-sm hover:text-neutral-100 cursor-pointer transition-all duration-300"
                            onClick={() => setOpenNewContactModle(true)}
                        />
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#1c1b1e] border-none mb-2 p-3 text-white  ">
                        Select New Contact
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <Dialog open={openNewContactModle} onOpenChange={setOpenNewContactModle}>

                <DialogContent className="bg-[#181920] border-none text-white w-[400px] h-[400px] flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Please select a Contact</DialogTitle>
                        <DialogDescription>
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <Input
                            placeholder="Search Contacts"
                            className="rounded-lg p-6 bg-[#2c2e4b] border-none "
                            onChange={e => searchContacts(e.target.value)}
                        />
                    </div>
                    <ScrollArea className="h-[250px]">
                        <div className="flex flex-col gap-5">
                            {
                                searchContacts.length > 0 &&
                                searchedContacts.map((contact) =>
                                    <div key={contact._id} className='flex gap-3 cursor-pointer items-center'>
                                            <div className='w-full h-[70px] relative flex items-center  justify-start gap-2 shadow-xl bg-[#13141c] rounded-lg '>
                                                <div className='pl-5'>
                                                <Avatar className="h-[50px] w-[50px]  rounded-full overflow-hidden">
                                                    {

                                                        contact.image ? <AvatarImage src={contact.image} alt="profile"
                                                            className="object-cover w-full h-full bg-black"
                                                        /> : 
                                                        <div className={`uppercase h-32 w-32 md:w-48 md:h-48 text-lg border-[1px] flex items-center justify-center rounded-full
                                 ${getColor(contact.color)}`}
                                                        >
                                                            {contact.firstName ? contact.firstName.split("").shift() : contact.email.split("").shift()}
                                                        </div>
                                                    }
                                                </Avatar>
                                                </div>
                                                {
                                                    contact.firstName && contact.lastName ? <div className='pl-10'>{contact.firstName} {contact.lastName}</div> : <div className='pl-10'>{contact.email}</div>
                                                }
                                            </div>
                                        </div>
                                )
                            }
                        </div>
                    </ScrollArea>
                    {
                        searchedContacts.length <= 0 &&
                         <div className="flex-1 md:top-0  md:h-full  md:flex flex-col justify-center items-center pt-10 md:pt-0 duration-1000 transition-all">
                            <Lottie
                                isClickToPauseDisabled={true}
                                height={100}
                                width={100}
                                options={animationDefaultOptions}
                            />
                            <div className='text-opacity-80 text-white mt-10 gap-5 flex flex-col items-center lg:2xl text- xl transition-all duration-300 text-center  '>
                                <h3 className='poppins-medium'>
                                    Hi <span className='text-purple-500'>!</span> Search new
                                    <span className='text-purple-500'>  Contacts</span>
                                    <span className='text-purple-500'>.</span>
                                </h3>
                            </div>
                        </div>
                    }
                </DialogContent>
            </Dialog>


        </>
    )
}

export default NewDM