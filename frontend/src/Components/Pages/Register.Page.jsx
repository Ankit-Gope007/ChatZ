import React from 'react'

const RegisterPage = () => {
  return (
    <>
                <div className=" min-h-screen w-screen overflow-hidden bg-contain  bg-[url('https://img.freepik.com/premium-vector/hand-drawn-doodle-illustrstion-marker-outlines-black-white-vector-different-elements_153538-61.jpg')]">
                <div className='top-[25%] left-[40%] absolute '>
                    <form action="" className="form1">
                        <p>
                            Welcome,<span>Fill these before starting..</span>
                        </p>
                        <p className='text-sm mb-0 pb-0'>
                        Profile Picture
                        </p>
                        <button className="oauthButton1 flex text-sm">
                            <input className='pl-[120px]' type="file" placeholder='Profile Picture'  />
                        </button>

                        <input type="userName" placeholder="Username" name="userName" />
                        <textarea type='text'  placeholder="Your Bio" name="Bio"></textarea>
                        <button className="oauthButton1">
                            Continue
                            <svg className="icon1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
                        </button>
                    </form>
                </div>
            </div>
    </>
  )
}

export default RegisterPage