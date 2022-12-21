
const Employee = ({ employee, selectTeam, employeeCardSelect, teamSelectChange }) => {

  return (
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-6'>
          <select className='form-select form-select-lg' value={selectTeam} onChange={teamSelectChange}>
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
        </div>
      </div>

      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
          <div className="card-collection">
            {
              employee.map((employees) => (
                <div id={employees.id} className={(employees.teamName === selectTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} onClick={employeeCardSelect}>
                  <div className='card-body'>
                    <h5 className='card-title'> Full Name: {employees.fullName}</h5>
                    <p className='card-text'><b> Designation:</b> {employees.designation}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}
export default Employee