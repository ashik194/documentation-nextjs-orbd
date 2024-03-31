import React from 'react'

// function Input({type,label,placeholder}) {
function Input({...input}) {
  return (
    <>
        <div className='flex items-center'>
            <label className='min-w-28'>{input.label} : </label>
            <div className="flex items-center border-b border-teal-500 py-2 w-full">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type={input.type} placeholder={input.placeholder}  name={input.name} onChange={input.onChange} value={input.value} />
            </div>
        </div>
    </>
  )
}

export default Input