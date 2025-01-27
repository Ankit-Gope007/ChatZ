import React,{useState} from 'react'
import { Emoji } from '../../image_src';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {toast} from "sonner"
import axios from "axios"
import { apiRoutes,signUpRoute,loginRoute } from '@/apiRoutes';
import { useNavigate } from 'react-router-dom';



const Auth = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    // const {userDetails} = useAuthStore()


    const validateSignUp= () => { 
        if (!email.length) {
          toast.error("Email is required")
          return false
        }
        if (!password.length) {
            toast.error("Password is required")
          return false
        }
        if (confirmPassword!==password) { 
            toast.error("Password does not match")
          return false
        }
        return true
      }

      const validateLogin= () => { 
        if (!email.length) {
          toast.error("Email is required")
          return false
        }
        if (!password.length) {
            toast.error("Password is required")
          return false
        }
        return true
      }

      const handleSignUp = async () => {
        if (validateSignUp()){
            const response = await axios.post(signUpRoute, {email, password},{withCredentials:true})
              if (response.status === 201) {
                // console.log(response.data.data.createdProfile)
                toast.success("Sign Up successfully")
                navigate('/profile')
              }
        }
        
      }

      const handleLogin = async () => {
        if (validateLogin()){
            const response = await axios.post(loginRoute, {email, password},{withCredentials:true})
              if (response.status === 200) {
                // console.log(response.data.data.profile.profileSetup)
                toast.success("Logged In successfully")
                response.data.data.profile.profileSetup?
                navigate('/chats'):navigate('/profile')
              }
        }
      }


    return (
        <>
            <div className="w-screen h-screen flex flex-row justify-center items-center overflow-hidden  bg-[url('https://i.gifer.com/origin/85/856de846e59271089eca26c4260c9bdb_w200.webp')]  " >
                <div className='w-[80%] xl:w-[800px] xl:h-[450px] xl:grid xl:grid-cols-2 rounded-lg shadow-xl bg-white flex flex-col'>
                    <div className='flex flex-col xl:gap-8'>
                        <div className='center mt-4'>
                            <h1 className='text-2xl md:text-3xl font-black'>Welcome To ChatZ</h1>
                            <img src={Emoji} alt="cool" className='h-[50px] ml-3' />
                        </div>
                        <div className=' center text-gray-600 font-light text-lg '>
                            <h2>The chatting app for Gen Z</h2>
                        </div>
                        <div className='center xl:hidden'>
                            <img src="https://i.gifer.com/origin/bd/bd9c490d0395c896d5d2c7fe8b778a6d_w200.webp" alt="descriptive image" className='h-[250px]' />
                        </div>
                        <div className='center'>
                            <Tabs defaultValue="login" className="center flex-col w-[400px]" >
                                <TabsList className="">
                                    <TabsTrigger value="login">Login</TabsTrigger>
                                    <TabsTrigger value="signUp">SignUp</TabsTrigger>
                                </TabsList>
                                <TabsContent value="login" >
                                    <Input type="email" placeholder="Email" 
                                    onChange={(e) => setEmail(e.target.value)}className="rounded-full border-none shadow-lg my-3" />
                                    <Input type="password" placeholder="Password" 
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="rounded-full border-none shadow-lg mb-6" />
                                    <Button 
                                    onClick={handleLogin}
                                    className="rounded-full bg-black text-white w-full py-2 mb-6">Login</Button>
                                </TabsContent>
                                <TabsContent value="signUp">
                                    <Input type="email" placeholder="Email" className="rounded-full border-none shadow-lg my-3"
                                    onChange={(e) => setEmail(e.target.value)} />
                                    <Input type="password" placeholder="Password" className="rounded-full border-none shadow-lg mb-3" 
                                    onChange={(e) => setPassword(e.target.value)}/>
                                    <Input type="password" placeholder="Confirm Password" className="rounded-full border-none shadow-lg mb-6" 
                                    onChange={(e) => setConfirmPassword(e.target.value)}/>
                                    <Button
                                    onClick={handleSignUp}
                                     className="rounded-full bg-black text-white w-full py-2 mb-6">Sign Up</Button>
                                </TabsContent>
                            </Tabs>

                        </div>
                    </div>
                    <div className='hidden xl:flex'>
                        <img src="https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc_w200.webp" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth;