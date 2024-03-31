import React from 'react'

function Signup() {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
    <div className="2xl:w-1/4 lg:w-1/3 md:w-1/2 w-full">
        <div className="card overflow-hidden sm:rounded-md rounded-none">
            <div className="px-6 py-8">
            <div className="flex justify-center flex-col items-center mb-8">
                    <h3 className='text-xl font-semibold'>Create New Account</h3>
                    <h6 className='text-md'>Sign up and continue to Sandbox.</h6>
                </div>

                <div className="mb-4">
                    <label className="mb-2" for="LoggingName">Name</label>
                    <input id="LoggingName" className="form-input" type="text" placeholder="Enter your email" />
                </div>

                <div className="mb-4">
                    <label className="mb-2" for="LoggingEmailAddress">Email Address</label>
                    <input id="LoggingEmailAddress" className="form-input" type="email" placeholder="Enter your email" />
                </div>

                <div className="mb-4">
                    <label className="mb-2" for="loggingPassword">Password</label>
                    <input id="loggingPassword" className="form-input" type="password" placeholder="Enter your password" />
                </div>

                <div className="flex items-center mb-4">
                    <input type="checkbox" className="form-checkbox rounded" id="checkbox-signin" />
                    <label className="ms-2" for="checkbox-signin">I accept <a href="#" className="text-primary">Terms and Conditions</a></label>
                </div>

                <div className="flex justify-center mb-3">
                    <button className="btn w-full text-white bg-primary"> Sign Up Free </button>
                </div>
            </div>
        </div>

        <p className="text-center mt-8">Already have an account ?<a className="font-medium ms-1" href="auth-login.html">Sign In</a></p>
    </div>
    </div>
    </>
  )
}

export default Signup