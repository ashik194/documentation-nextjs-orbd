import React from 'react'

function SSO() {
  return (
    <div className='min-h-screen flex justify-center mt-20'>
        <form className="w-full max-w-sm">
        <div className='flex items-center'>
            <label className='min-w-28'>Name : </label>
            <div className="flex items-center border-b border-teal-500 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Redirect URI" aria-label="Full name" />
            </div>
        </div>
        <div className='flex items-center'>
            <label className='min-w-28'>Email : </label>
            <div className="flex items-center border-b border-teal-500 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email" aria-label="Full name" />
            </div>
        </div>
        </form>
    </div>
  )
}

export default SSO