"use client"
import Image from 'next/image'
import Navbar from '@/components/Navbar/navbar'
import Chat from '@/components/Chat/chat'
import { useSearchParams } from 'next/navigation'
export default function Home() {
    const searchParams = useSearchParams();
    let name:string = searchParams.get("name")!!;
    name = name.replace("-", " ").replace(/\b\w/g, (match) => match.toUpperCase());
  return (
    <div className="flex min-h-screen min-w-screen flex-col ">
      <Navbar></Navbar>
      <div className = "container mx-auto mt-4 p-4">
        <h2 className="text-xl font-bold mb-2 text-slate-800">Name : {name}</h2>
        <p className = "text-slate-800 mb-5">Department: Engineering</p>
        <p className = "text-slate-800 mb-5">Role: Data Scientist</p>
        <p className = "text-slate-800 mb-5">Status: Severe</p>
        <h2 className="text-xl font-bold mb-2 text-slate-800">Appointments</h2>
        <div className = "mt-4 text-slate-800">
          
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Doctor
                </th>
                <th scope="col" className="px-6 py-3">
                    Specification
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white  even:bg-gray-50  border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    James Carter
                </th>
                <td className="px-6 py-4">
                    General Medicine
                </td>
                <td className="px-6 py-4">
                    27/12/23
                </td>
                <td className="px-6 py-4">
                    5:30 PM - 6:30 PM
                </td>
                <td className="px-6 py-4">
                <div className = "text-white rounded-md bg-orange-500 text-center">Pending</div>
                </td>
            </tr>
            <tr className="odd:bg-white  even:bg-gray-50  border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Charles K
                </th>
                <td className="px-6 py-4">
                    Physician
                </td>
                <td className="px-6 py-4">
                    20/12/23
                </td>
                <td className="px-6 py-4">
                    5:30 PM - 6:30 PM
                </td>
                <td className="px-6 py-4">
                <div className = "text-white rounded-md bg-green-500 text-center">Completed</div>
                </td>
            </tr>
            <tr className="odd:bg-white  even:bg-gray-50  border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Charles K
                </th>
                <td className="px-6 py-4">
                    Physician
                </td>
                <td className="px-6 py-4">
                    15/12/23
                </td>
                <td className="px-6 py-4">
                    4:30 PM - 5:30 PM
                </td>
                <td className="px-6 py-4">
                <div className = "text-white rounded-md bg-green-500 text-center">Completed</div>
                </td>
            </tr>
            
        </tbody>
    </table>

</div>
        </div>
    
      </div>
      </div>
  )
}
