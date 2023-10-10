import React from 'react'
import '../../index.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import SearchIcon from '../../assets/img/search-icon.png'
import SettingGaer from '../../assets/img/setting-gaer.png'
import { useNavigate } from 'react-router-dom'
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";


const UsersDetail = () => {
    const navigate = useNavigate()

  return (
    <>
            <div className='main-area'>
                <div className="sidebar-area">
                    <Sidebar />
                </div>
                <div className="dashboardContainer">
                    <Navbar />
                    <div className="user-details-page">
                        <div className="ud-inner-section">
                            <div className="udi-area">
                                <div className="top-search">
                                    <input type="text" className="user-input" placeholder='Search'/>
                                    <img src={SearchIcon} alt="" />
                                </div>

                                <button className='btn-user-add' onClick={()=>navigate("/adduser")}> + Add User</button>
                            </div>

                            <div className="user-table-details">
                                <div className="top-user-details">
                                    <div className="table-head">
                                        <p>Name</p>
                                        <p>Email</p>
                                        <p>Roles</p>
                                        <p>Date Added</p>
                                        <p>Last Login</p>
                                        <p>Options</p>
                                    </div>

                                    <div className="table-inner"  >
                                    <p>John Doe</p>
                                        <p>demo@demo.com</p>
                                        <p>users</p>
                                        <p>12/12/2022</p>
                                        <p>12/12/2022</p>
                                        <img src={SettingGaer} alt="" />
                                    </div>

                                    <div className="table-inner">
                                        <p>John Doe</p>
                                        <p>demo@demo.com</p>
                                        <p>users</p>
                                        <p>12/12/2022</p>
                                        <p>12/12/2022</p>
                                        <img src={SettingGaer} alt="" />
                                    </div>

                                    <div className="table-inner">
                                        <p>John Doe</p>
                                        <p>demo@demo.com</p>
                                        <p>users</p>
                                        <p>12/12/2022</p>
                                        <p>12/12/2022</p>
                                        <img src={SettingGaer} alt="" />
                                    </div>

                                    <div className="table-inner">
                                        <p>John Doe</p>
                                        <p>demo@demo.com</p>
                                        <p>users</p>
                                        <p>12/12/2022</p>
                                        <p>12/12/2022</p>
                                        <img src={SettingGaer} alt="" />
                                    </div>
                                    <div className="table-inner">
                                        <p>John Doe</p>
                                        <p>demo@demo.com</p>
                                        <p>users</p>
                                        <p>12/12/2022</p>
                                        <p>12/12/2022</p>
                                        <img src={SettingGaer} alt="" />
                                    </div>
                                    <div className="table-inner">
                                        <p>John Doe</p>
                                        <p>demo@demo.com</p>
                                        <p>users</p>
                                        <p>12/12/2022</p>
                                        <p>12/12/2022</p>
                                        <img src={SettingGaer} alt="" />
                                    </div>
                                    <div className="table-inner">
                                        <p>John Doe</p>
                                        <p>demo@demo.com</p>
                                        <p>users</p>
                                        <p>12/12/2022</p>
                                        <p>12/12/2022</p>
                                        <img src={SettingGaer} alt="" />
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default UsersDetail