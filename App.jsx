import * as React from 'react';
import './App.css'
import Header from './Header';
import Employee from './Employee';
import Footer from './Footer';
import { useState, useEffect } from 'react';


export default function App() {

  const [selectTeam, setTeam] = useState("TeamB")

  const [employee, setEmployee] = useState([{ id: 1, fullName: "Ahana Bhattacharjee", designation: "JavaScript Developer", teamName: "TeamA" },
  { id: 2, fullName: "James Doyl", designation: "Java Developer", teamName: "TeamA" },
  { id: 3, fullName: "Prateek Kuhad", designation: "Python Developer", teamName: "TeamA" },
  { id: 4, fullName: "Same Smith", designation: "Web Developer", teamName: "TeamA" },
  { id: 5, fullName: "Taylor Swift", designation: "Vue Developer", teamName: "TeamA" },
  { id: 6, fullName: "Veronica Redd", designation: "React Developer", teamName: "TeamB" },
  { id: 7, fullName: "Vlad Holiday", designation: "JavaScript Developer", teamName: "TeamB" },
  { id: 8, fullName: "Anya Marina", designation: "JavaScript Developer", teamName: "TeamB" },
  { id: 9, fullName: "Bryce Fox", designation: "JavaScript Developer", teamName: "TeamB" },
  { id: 10, fullName: "Elvis Drew", designation: "Graphic Designer", teamName: "TeamB" },
  { id: 11, fullName: "Kat Cunning", designation: "Vue Developer", teamName: "TeamC" },
  { id: 12, fullName: "Matt Maeson", designation: "Python Developer", teamName: "TeamC" },
  { id: 13, fullName: "Greta Isaac", designation: "Java Developer", teamName: "TeamC" },
  { id: 14, fullName: "Valerie Broussard", designation: "Java Developer", teamName: "TeamC" },
  { id: 15, fullName: "Grace Mitchel", designation: "JavaScript Developer", teamName: "TeamC" },
  { id: 16, fullName: "Donna Missal", designation: "JavaScript Developer", teamName: "TeamD" },
  { id: 17, fullName: "Kelsey Waters", designation: "JavaScript Developer", teamName: "TeamD" },
  { id: 18, fullName: "Marc Wavy", designation: "Graphic Designer", teamName: "TeamD" }]);



  function teamSelectChange(event) {
    setTeam(event.target.value);
  }

  function employeeCardSelect(event) {
    const transEmployee = employee.map((employees) => employees.id === parseInt(event.currentTarget.id) ? (employees.teamName === selectTeam) ? { ...employees, teamName: '' } : { ...employees, teamName: selectTeam } : employees);
    setEmployee(transEmployee);
  }

  return (
    <main>
      <Header selectTeam={selectTeam}
        teamMemberCount={employee.filter((employees) => employees.teamName === selectTeam).length}
      />
      <Employee employee={employee}
        selectTeam={selectTeam}
        employeeCardSelect={employeeCardSelect}
        teamSelectChange={teamSelectChange} />
      <Footer />
    </main>
  )
}
