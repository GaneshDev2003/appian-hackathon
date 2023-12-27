"use client"
import { useState } from "react";

export default function Home() {
        const [selectedStartTime, setSelectedStartTime] = useState('10:00 AM');
        const [selectedEndTime, setSelectedEndTime] = useState('11:00 AM');
      
        const handleStartTimeChange = (e:any) => {
          setSelectedStartTime(e.target.value);
        };
      
        const handleEndTimeChange = (e:any) => {
          setSelectedEndTime(e.target.value);
        };
      
        const handleSaveTime = () => {
          // Implement your logic to save the selected time range
          console.log(`Time range saved: ${selectedStartTime} - ${selectedEndTime}`);
        };
      
    return (
      <div className="flex min-h-screen min-w-screen flex-col ">
        <div className = "container mx-auto mt-4 p-4">
          <h2 className="text-xl font-bold mb-2 text-slate-800">Hello Dr. James Carter,</h2>

          <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Change Available Time</h2>
      <div className="mb-4">
        <label htmlFor="startTime" className="block text-sm font-medium text-gray-600">
          Select Start Time:
        </label>
        <select
          id="startTime"
          name="startTime"
          value={selectedStartTime}
          onChange={handleStartTimeChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        >
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          {/* Add more time options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="endTime" className="block text-sm font-medium text-gray-600">
          Select End Time:
        </label>
        <select
          id="endTime"
          name="endTime"
          value={selectedEndTime}
          onChange={handleEndTimeChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        >
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="1:00 PM">1:00 PM</option>
          {/* Add more time options as needed */}
        </select>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleSaveTime}
        >
          Save Time Range
        </button>
      </div>
    </div>
          <p className = "text-slate-800 mb-5">Here are your appointments for the day</p>
            
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      Patient
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Illness
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
                      John Doe
                  </th>
                  <td className="px-6 py-4">
                      Fever
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
                      Mary Jane
                  </th>
                  <td className="px-6 py-4">
                      Cardiac issue
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
                      Peter D
                  </th>
                  <td className="px-6 py-4">
                     Mild Flu
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
              
          </tbody>
      </table>
  </div>
          </div>
      
        </div>
    )
  }
  