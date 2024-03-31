import React from 'react'

function page() {
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
                    API
                </div>
                <div class="p-6">
                    <form>
                        <div className='w-full '>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Name
                                </label> 
                                <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter your Name"/>
                            </div>

                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Email
                                </label>
                                <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="Enter your email"/>
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Key Name
                                </label> 
                                <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Key Name"/>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Project URI
                                </label>
                                <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Project URI"/>
                            </div>
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