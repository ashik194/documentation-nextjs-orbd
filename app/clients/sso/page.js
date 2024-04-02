'use client'

import React, { useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";

function SSO() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [redirectUri, setRedirectUri] = useState([{redirect_uri: ""}])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [refreshText, setRefreshText] = useState("");

    const handleRefreshText = () => {
          const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
              let result = ' ';
            const charactersLength = characters.length;
            for( let i = 0; i < 30; i++ ){
                result += characters.charAt(Math.floor(Math.random() * charactersLength))
            }
            setRefreshText(result);   
    }
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
        <h4 className='text-[15px] font-bold uppercase '>Clients</h4>
    </div>
        <div className='mx-10 my-4'>
            <div
                className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface shadow-lg shadow-gray-800/30 max-w-3xl">
                <div
                    className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 font-bold text-[16px]">
                    SSO
                </div>
                <div className="p-6">
                    <form>
                        <div className='w-full '>
                        {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
                            <div className="w-full mt-4 px-3 mb-6 md:mb-0">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-first-name">
                                    Name
                                </label>
                                <input 
                                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text"
                                name=""
                                value=""
                                placeholder="Enter your Name"/>
                            </div>

                            <div className="w-full mt-4 px-3">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-last-name">
                                    Email
                                </label>
                                <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="email"
                                name=""
                                value=""
                                placeholder="Enter your email"/>
                            </div>
                        {/* </div> */}

                        {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
                            <div className="w-full mt-4 px-3 mb-6 md:mb-0">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-first-name">
                                    Client ID
                                </label>
                                
                                <input className="appearance-none block w-full  text-gray-700 border bg-gray-100 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500" 
                                type="text"
                                name=""
                                value=""
                                placeholder="Client ID" readOnly/>
                                </div>

                                <div className="w-full mt-4 px-3">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-last-name">
                                    Client Secret
                                </label>
                                <div className='flex'>
                                    <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    type="text"
                                    name=""
                                    value={refreshText}
                                    placeholder="Client Secret" readOnly/>
                                    <button onClick={handleRefreshText} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                    {/* Refresh */}
                                    <LuRefreshCcw className='text-2xl' />
                                    </button>
                                </div>
                            </div>
                        {/* </div> */}

                        {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
                            <div className="w-full mt-4 px-3 mb-6 md:mb-0">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-first-name">
                                Post logout URI
                                </label> 
                                <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text"
                                name=""
                                value=""
                                placeholder="Enter Post logout URI"/>
                            </div>

                            <div className="w-full mt-4 px-3">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-last-name">
                                    Policy URI
                                </label>
                                <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text"
                                name=""
                                value=""
                                placeholder="Enter Policy URI"/>
                            </div>
                        {/* </div> */}

                        {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
                            <div className="w-full mt-4 px-3 mb-6 md:mb-0">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-first-name">
                                Initial Login URI
                                </label> 
                                <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="text"
                                name=""
                                value=""
                                placeholder="Enter Initial Login URI"/>
                            </div>

                            <div className="w-full mt-4 px-3">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-last-name">
                                Logo
                                </label>
                                <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded  px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                type="file"
                                name=""
                                value=""
                                placeholder="Logo"/>
                            </div>
                        {/* </div> */}

                        {/* <div className="flex flex-wrap mt-4 mx-2 mb-6"> */}
                        {redirectUri.map((uri, index) => (
                            <div key={index} className="w-full mt-4 px-3 mb-6 md:mb-0">
                                <label className="block  tracking-wide text-gray-700 text-xs font-semibold mb-2" htmlFor="grid-first-name">
                                    Redirect URI
                                </label>
                                <div className='flex'>
                                    <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    type="text"
                                    name=""
                                    value=""
                                    placeholder="Redirect URI"/>
                                    {redirectUri.length - 1 === index && redirectUri.length < 3 && (
                                        <button onClick={redirectAdd} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                        {/* Add More */}
                                        <IoMdAddCircleOutline className='text-2xl' />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                        {/* </div> */}

                        </div>
                        <div className='mx-4 mt-4'>
                            <button className='text-white bg-[#405189] border border-[#405189] hover:text-white hover:bg-[#364574] hover:border-[#33416e] px-4 py-2 rounded-md'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default SSO