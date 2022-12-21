const Header = ({ selectTeam, teamMemberCount }) => {
  return (
    <header className='container'>
      <div className="row justify-content-center mt-3 mb-4">
        <h1>Team Member Allocation</h1>
        <h3>Number of members in {selectTeam} : {teamMemberCount}</h3>
      </div>
    </header>
  )
}
export default Header