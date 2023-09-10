import React, { useState } from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Profile from '../../assets/img/profile.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Popover, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
    handleClose();
  };

  const gotoProfile = () => navigate('/profile')
  return (
    <div className='top-navbar'>
      <div className="navbar-section">
        <div className="heading-top">
          <h3>Dashboard</h3>
        </div>

        <div className="right-section">
          <NotificationsNoneIcon />
          <div className="profile-img" onClick={gotoProfile}>
            <img src={Profile} alt="" />
          </div>
          <div className="profile-heading">
            <p className="main-heading">
              <span className='profile-user-name'>Nick Devis</span><br />
              Business Advisor
            </p>
          </div>
          <div className="profile-expand">
            <ExpandMoreIcon onClick={handleClick} />
            <Popover
              open={open}
              anchorEl={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <div style={{ padding: '10px' }}>
                <Typography onClick={handleLogout}> Logout </Typography>
              </div>
            </Popover>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar