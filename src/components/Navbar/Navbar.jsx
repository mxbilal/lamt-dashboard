import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Profile from '../../assets/img/profile.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
  return (
    <div className='top-navbar'>
      <div className="navbar-section">
        <div className="heading-top">
          <h3>Dashboard</h3>
        </div>

        <div className="right-section">
      <NotificationsNoneIcon/>
      <div className="profile-img">
        <img src={Profile} alt="" />
      </div>
      <div className="profile-heading">
        <p className="main-heading">
          <span className='profile-user-name'>Nick Devis</span><br/>
          Business Advisor
        </p>
      </div>
      <div className="profile-expand">
      <ExpandMoreIcon/>
      </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar