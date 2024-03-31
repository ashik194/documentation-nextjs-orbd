import React from 'react'
import LoginForm from '../../components/authentication/login'

function Login() {
  return (
    <>
    {/**
    <div className='flex justify-center items-center h-screen'>
    <div className="2xl:w-1/4 lg:w-1/3 md:w-1/2 w-full">
        <div className="card overflow-hidden sm:rounded-md rounded-none">
            <div className="px-6 py-8">
                <div className="flex justify-center flex-col items-center mb-8">
                    <h3 className='text-xl font-semibold'>Welcome Back !</h3>
                    <h6 className='text-md'>Sign in to continue to Sandbox.</h6>
                </div>
                <div className="mb-4">
                    <label className="mb-2" for="LoggingEmailAddress">Email Address</label>
                    <input id="LoggingEmailAddress" className="form-input" type="email" placeholder="Enter your email" />
                </div>

                <div className="mb-4">
                    <label className="mb-2" for="loggingPassword">Password</label>
                    <input id="loggingPassword" className="form-input" type="password" placeholder="Enter your password" />
                </div>

                <div className="flex justify-center mb-3">
                    <button className="btn w-full text-white bg-primary"> Sign In </button>
                </div>
            </div>
        </div>

        <p className="text-center mt-8">Create an account ?<a className="font-medium ms-1" href="#">Sign up</a></p>
    </div>
    </div> */}
    <LoginForm />
    </>
  )
}

export default Login