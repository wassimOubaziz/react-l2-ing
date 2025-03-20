import './dashboard.css'

function Dashboard() {
    return (
    <div className="dashboard">
      <div className='dashboard gw'>
        <p style={{fontSize: '36px'}}>WELCOME, <span style={{color: '#1823F0'}}>Mr. John Doe</span></p>
        <button className="buttonOut">Sign Out</button>
      </div>
    </div>
    )
}

export default Dashboard;