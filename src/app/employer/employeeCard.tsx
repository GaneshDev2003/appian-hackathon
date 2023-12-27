// EmployeeCard.js
import React from 'react';
interface employeeDetails{
    name:string;
    position:string;
    department:string;
    healthStatus: 'normal' | 'mild illness' | 'severe';
}
interface employeeProps{
    employee:employeeDetails
}

const EmployeeCard = ({ employee } : employeeProps) => {
  let cardColor:string = "bg-white";
  if(employee.healthStatus == 'mild illness')
    cardColor = "bg-orange-400"
  else if(employee.healthStatus == "severe")
    cardColor = "bg-red-400"
  return (
    <a href= {"/employee/?name=" + (employee.name.toLocaleLowerCase().replace(/\s/g, "-"))}>
      <div className={(cardColor) + " p-4 rounded-md shadow-md mb-4"}>
      <h3 className="text-lg font-semibold mb-2">{employee.name}</h3>
      <p className="text-gray-600">{employee.position}</p>
      <p className="text-gray-600">{employee.department}</p>
      <p className = "text-gray-600"> {employee.healthStatus}</p>
      {/* Add more employee details as needed */}
    </div>
    </a>
    
  );
};

export default EmployeeCard;
