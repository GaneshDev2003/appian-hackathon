// EmployeeDashboard.js
import React from 'react';
import EmployeeCard from './employeeCard';


let teams= [
    {
      "name" : "Engineering",
      "employees" : [{ id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering', healthStatus: "normal" },
      { id: 2, name: 'Jane Smith', position: 'Data Scientist', department: 'Engineering', healthStatus : "mild illness" },
      { id: 3, name: 'Mary Jane', position: 'Data Engineer', department: 'Engineering', healthStatus : "severe" },
      { id: 3, name: 'Margaret B', position: 'Data Engineer', department: 'Engineering', healthStatus : "normal" },
      { id: 3, name: 'Margaret B', position: 'Data Engineer', department: 'Engineering', healthStatus : "normal" },
    { id: 3, name: 'Margaret B', position: 'Data Engineer', department: 'Engineering', healthStatus : "normal" }]
    },
    {
      "name" : "Marketing",
      "employees" : [{ id: 4, name: 'Peter D', position: 'Advertising Lead', department: 'Marketing', healthStatus: "normal" },
      { id: 5, name: 'Rajkumar R', position: 'Marketing Lead', department: 'Marketing', healthStatus : "mild illness" },
      { id: 6, name: 'Naomi Smith', position: 'Marketing Intern', department: 'Marketing', healthStatus : "normal" }]
    },
    {
      "name" : "Human Resources",
      "employees" : [{ id: 4, name: 'Mark M', position: 'HR Lead', department: 'HR', healthStatus: "normal" },
      { id: 5, name: 'Vaidehi H', position: 'HR Lead', department: 'HR', healthStatus : "normal" },
      { id: 6, name: 'George P', position: 'HR Intern', department: 'HR', healthStatus : "normal" }]
    },
    {
      "name" : "Business Operations",
      "employees" : [{ id: 4, name: 'Peter D', position: 'Advertising Lead', department: 'Marketing', healthStatus: "normal" },
      { id: 5, name: 'Rajkumar R', position: 'Marketing Lead', department: 'Marketing', healthStatus : "mild illness" },
      { id: 6, name: 'Naomi Smith', position: 'Marketing Intern', department: 'Marketing', healthStatus : "normal" }]
    }
  ]
const EmployeeDashboard = () => {
  return (
    <div className="bg-gray-100 mx-auto min-h-screen p-8">
    <h1 className="text-xl font-semibold mb-8">Employee Dashboard</h1>
    {teams.map((team:any)=> (
      <div>
         <h2 className="text-lg font-semibold mb-2">{team.name}</h2>
         <div className="container mt-8 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {team.employees.map((employee:any) => <EmployeeCard employee={employee}></EmployeeCard>)}
      </div>
        
    </div>))}
    </div>
  );
};

export default EmployeeDashboard;
