"use client"
import Image from 'next/image'
import Navbar from '@/components/Navbar/navbar'
import Chat from '@/components/Chat/chat'
import Modal from '@/components/Modal/modal'
import { useState } from 'react'
export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    return (

    <div className="flex min-h-screen min-w-screen flex-col ">
      <Navbar></Navbar>

      <div className = "container mx-auto mt-4 p-4">
        <h2 className="text-xl font-bold mb-2 text-slate-800">Hello Ganesh,</h2>
        <p className = "text-slate-800 mb-5">How are you feeling today?</p>

      <div className="bg-sky-600 mx- w-full p-4 text-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2 ">Feeling Unwell?</h2>
          <p>Click here</p>
        </div>
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
                    28/12/23
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
                    Mike K
                </th>
                <td className="px-6 py-4">
                    General Medicine
                </td>
                <td className="px-6 py-4">
                    24/12/23
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
            <tr className="odd:bg-white  even:bg-gray-50  border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Mary Q
                </th>
                <td className="px-6 py-4">
                    Ophthalmologist
                </td>
                <td className="px-6 py-4">
                    2/12/23
                </td>
                <td className="px-6 py-4">
                    6:30 PM - 7:30 PM
                </td>
                <td className="px-6 py-4">
                <div className = "text-white rounded-md bg-green-500 text-center"><a onClick={openModal}>Completed</a></div>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>
        </div>
        <Chat></Chat>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-semibold mb-4">Doctor Visit Summary</h2>
        <h3 className = "font-bold">Visited Dr. Mary Q on 2/12/23 from 6:30PM to 7:30PM</h3>
        <p>The doctor's visit revealed a mild respiratory infection, and a prescription for Amoxicillin (500mg, twice daily for a week) was provided. The patient was advised to complete the entire course of antibiotics, stay well-hydrated, get sufficient rest, and avoid exposure to cold weather. Precautions include maintaining personal hygiene and practicing respiratory etiquette. A follow-up appointment is scheduled in a week for reassessment and further guidance if needed. It's crucial to adhere to the prescribed medication and precautions to facilitate a speedy recovery and prevent the infection from worsening.</p>
        <button className='px-4 m-2 py-2 bg-blue-500 text-white rounded-md'>Close </button>
      </Modal>
      </div>
      </div>
  )
}
