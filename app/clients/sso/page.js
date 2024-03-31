'use client'
import React, { useState } from 'react'

function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [redirectUri, setRedirectUri] = useState([{redirect_uri: ""}])
    const handleRedirect = (e, index) => {
        const { name, value } = e.target;
        const list = [...redirectUri];
        list[index][name] = value;
        setRedirectUri(list);
      };

    const redirectAdd = () => {
        setRedirectUri([...redirectUri, { redirect_uri: "" }]);
    };
  return (
    <>
    <div className='px-4 py-2 shadow-md bg-white'>
        <h4 className='text-xl font-semibold'>Clients</h4>
    </div>
        <div className='mx-8 my-4'>
            <div
                class="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface shadow-lg shadow-gray-800/30">
                <div
                    class="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold">
                    SSO
                </div>
                <div class="p-6">
                    <form>
                        <div className='w-full '>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Name
                            </label>
                            <input 
                            class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            type="text"
                            name=""
                            value=""
                            placeholder="Enter your Name"/>
                            </div>

                            <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Email
                            </label>
                            <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            type="email"
                            name=""
                            value=""
                            placeholder="Enter your email"/>
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Client ID
                                </label>
                                {/* <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                <input class="appearance-none block w-full  text-gray-700 border bg-gray-100 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500" 
                                type="text"
                                name=""
                                value=""
                                placeholder="Client ID" readOnly/>
                                </div>

                                <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Client Secret
                                </label>
                                <div className='flex'>
                                    <input class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    type="text"
                                    name=""
                                    value=""
                                    placeholder="Client Secret" readOnly/>
                                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                    Refresh
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Post logout URI
                                </label> 
                                <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text"
                                name=""
                                value=""
                                placeholder="Enter Post logout URI"/>
                            </div>

                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Policy URI
                                </label>
                                <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text"
                                name=""
                                value=""
                                placeholder="Enter Policy URI"/>
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Initial Login URI
                                </label> 
                                <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text"
                                name=""
                                value=""
                                placeholder="Enter Initial Login URI"/>
                            </div>

                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Logo
                                </label>
                                <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded  px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="file"
                                name=""
                                value=""
                                placeholder="Logo"/>
                            </div>
                        </div>
                        
                        <div class="flex flex-wrap -mx-3 mb-6">
                        {redirectUri.map((uri, index) => (
                            <div key={index} class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Redirect URI
                                </label>
                                <div className='flex'>
                                    <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    type="text"
                                    name=""
                                    value=""
                                    placeholder="Redirect URI"/>
                                    {redirectUri.length - 1 === index && redirectUri.length < 3 && (
                                        <button onClick={redirectAdd} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                        Add More
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        </div>

                        </div>
                        <button className='text-white bg-[#405189] border border-[#405189] hover:text-white hover:bg-[#364574] hover:border-[#33416e] px-4 py-2 rounded-md'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default page