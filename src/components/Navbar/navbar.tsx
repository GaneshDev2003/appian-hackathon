
import React from 'react';

export default function Navbar (){
  return (
    <nav className="bg-gray-800  w-full p-4">
      <div className="container flex">
        <div className="text-white font-bold text-lg mx-4">HM</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Meetings</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Documents</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
