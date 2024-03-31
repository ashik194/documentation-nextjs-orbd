'use client'
import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

function SSO() { 
    const [ssoData, setSSOData] = useState({});
    const [redirectUri, setRedirectUri] = useState([{redirect_uri: ""}]) 
    // const handleSSOData = (e) => {
    //     const { name, value } = e.target;
    //     setInputData((prevState) => ({ ...prevState, [name]: value }));
    // }

    const handleRedirect = (e, index) => {
        const { name, value } = e.target;
        const list = [...redirectUri];
        list[index][name] = value;
        setRedirectUri(list);
      };

    const redirectAdd = () => {
        setRedirectUri([...redirectUri, { redirect_uri: "" }]);
    };

    const redirectRemove = (index) => {
        const list = [...redirectUri];
        list.splice(index, 1);
        setRedirectUri(list);
      };

    const handleSSOData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSSOData(values => ({...values, [name]:value}));
        console.log(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(ssoData,redirectUri)
      }
    //   console.log(redirectUri)
  return (
    <div className='min-h-screen flex justify-center mt-20'>
        <div className='bg-white p-6 rounded-md w-full max-w-[600px] border-t-4 border-t-blue-600'>
            <form className="" onSubmit={handleSubmit}>
            
            <Input type="text" label="Name" name="name" value={ssoData.name || ""} onChange={handleSSOData}  placeholder="Client Name goes to here" />
            <Input type="email" label="Email" name="email" value={ssoData.email || ""} onChange={handleSSOData} placeholder="Clients Email" />
            <Input type="file" label="Logo" name="logo" value={ssoData.logo || ""} onChange={handleSSOData} placeholder="Logo" />
            <div className='flex items-center'>
                <label className='min-w-28'>Client ID : </label>
                <div className="flex items-center border-b border-teal-500 py-2 w-full">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Client ID" readOnly name='client_id' value={ssoData.client_id} onChange={handleSSOData}/>
                </div>
            </div>
            <div className='flex items-center'>
                <label className='min-w-28'>Client Secret : </label>
                <div className="flex items-center border-b border-teal-500 py-2 w-full">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Client Secret"  name="client_secret" value={ssoData.client_secret || ""} onChange={handleSSOData} />
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                    Refresh
                    </button>
                </div>
            </div> 
            {redirectUri.map((uri, index) => (
                <div key={index} className='flex items-center'>
                    <label className='min-w-28'>Redirect URI : </label>
                    <div className="flex items-center border-b border-teal-500 py-2 w-full">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Redirect URI" name="redirect_uri" value={uri.redirect_uri || ""} onChange={(e) => handleRedirect(e, index)} />
                        {redirectUri.length - 1 === index && redirectUri.length < 3 && (
                            <button onClick={redirectAdd} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                            Add More
                            </button>
                        )}
                    </div>
                </div>
            ))}
             
            <Input type="text" label="Post logout URI" name="post_logout_uri" value={ssoData.post_logout_uri || ""} onChange={handleSSOData} placeholder="Post logout URI" />
            <Input type="text" label="Policy URI" name="policy_uri" value={ssoData.policy_uri || ""} onChange={handleSSOData} placeholder="Policy URI" />
            <Input type="text" label="Initial Login URI" name="initial_login_uri" value={ssoData.initial_login_uri || ""} onChange={handleSSOData} placeholder="Initial Login URI" />
            
            <Button />
            </form>
        </div>
    </div>
  )
}

export default SSO