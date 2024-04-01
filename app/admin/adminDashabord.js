import React from 'react'
import Button from '../components/Button'

export default function AdminDashboard() {
  return (

  <div className='bg-red-400 min-w-screen min-h-screen p-4'>
    <div className="flex flex-col justify-start bg-white rounded w-auto">
      
      <div className="flex flex-row items-center border-[#e9ebec] border-b p-4">
        <h4 className="text-base font-medium">Client List</h4>
      </div>

      <div className="py-10 overflow-x-auto">

        <table className="table-auto">
          
          <thead className='bg-[#F3F6F9] text-black'>
            <tr>
              <th className="text-start text-sm font-semibold px-6 py-3">Name</th>
              <th className="text-start text-sm font-semibold px-2 py-3">Email</th>
              <th className="text-start text-sm font-semibold px-2 py-3">Logo</th>
              <th className="text-start text-sm font-semibold px-2 py-3">Client ID</th>
              <th className="text-start text-sm font-semibold px-2 py-3">Client Secret</th>
              <th className="text-start text-sm font-semibold px-2 py-3">Redirect URI</th>
              <th className="text-start text-sm font-semibold px-2 py-3">Post logout URI</th>
              <th className="text-start text-sm font-semibold px-2 py-3">Policy URI</th>
              <th className="text-start text-sm font-semibold px-2 py-3">Initial Login URI</th>
              <th className="text-start text-sm font-semibold px-2 py-3">Action</th>
              <th className="text-start text-sm font-semibold px-2 py-3">Status</th>
            </tr>
          </thead>

          <tbody>

            <tr className='border-[#ebece9] border-t'>
              <td className="px-6 py-3">
                <span className="text-sm font-normal">William Elmore</span>
              </td>

              <td className="px-2 py-3">
                <span className="text-sm font-normal">williamlmore@gmail.com</span>
              </td>

              <td className="px-2 py-3">
                <div className="flex flex-row items-center pr-8 gap-2">
                  <i className="fa-brands fa-safari rounded-full p-2 bg-neutral-100 text-blue-400"></i>
                </div>
              </td>

              <td className="px-2 py-3">
                <span className="text-sm font-normal">#541254265</span>
              </td>

              <td className="px-2 py-3">
                <span className="text-sm font-normal">#54675665</span>
              </td>

              <td className="px-2 py-3">
                <span className="text-sm font-normal flex flex-col">
                  <p>http://localhost:3000/admin</p>
                  <p>http://localhost:3000/admin</p>
                  <p>http://localhost:3000/admin</p>
                  </span>
              </td>

              <td className="px-2 py-3">
                <span className="text-sm font-normal">http://localhost:3000/postlg</span>
              </td>

              <td className="px-2 py-3">
                <span className="text-sm font-normal">http://localhost:3000/poicyuri</span>
              </td>

              <td className="px-2 py-3">
                <span className="text-sm font-normal">http://localhost:3000/initial</span>
              </td>

              <td className="px-2 py-3">
                <span className="flex sm:flex-col md:flex-row gap-2">
                  <Button className={"bg-green-200 text-sm rounded px-2 py-1"} text={"Edit"}/>
                  <Button className={"bg-red-200 text-sm rounded px-2 py-1"} text={"Delete"}/>
                </span>
              </td>

              <td className="px-2 py-3">
                <span className="flex sm:flex-col md:flex-row gap-2">
                  <Button className={"bg-[#f3f6f9] text-sm rounded px-2 py-1"} text={"Approved"}/>
                  <Button className={"bg-[#f3f6f9] text-sm rounded px-2 py-1"} text={"Disapproved"}/>
                </span>
              </td>

            </tr>

          </tbody>
        </table>

      </div>
    </div>
    </div>
  )
}
