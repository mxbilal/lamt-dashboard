import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import PokcetExpense from "../../assets/img/pocket-expense.png";
import VehicleExpense from "../../assets/img/vehicle-expense.png";
import OperationExpense from "../../assets/img/operation-expese.png";
import ImvestmentExpense from "../../assets/img/investment-expense.png";
import PhoneExpense from "../../assets/img/phone-expense.png";

const Purchases = () => {
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />
          <div className="expenses-section">
            <div className="es-area">
              <div className="es-inner">
                <div className="esi-top">
                  <img src={PokcetExpense} alt="" />
                  <p className="esit-heading">Add out-of-pocket expense</p>
                </div>

                <div className="esi-content">
                  <img src={VehicleExpense} alt="" />
                  <div className="esic-inner">
                    <p className="esic-heading">Vehicle Expenses <br/><span className="esich-para">3rd April 2023 at 18:46</span></p>
                    <p className="esic-price">£6.00 <br/> <span className="esicp-para">£1.00 VAT</span></p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={OperationExpense} alt="" />
                  <div className="esic-inner">
                    <p className="esic-heading">Operations <br/><span className="esich-para">30th March 2023 at 01:15</span></p>
                    <p className="esic-price">£1,000.00 <br/> <span className="esicp-para">£333.33 VAT</span></p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={ImvestmentExpense} alt="" />
                  <div className="esic-inner">
                    <p className="esic-heading">Investment Property Income <br/><span className="esich-para">2nd March 2023 at 17:30</span></p>
                    <p className="esic-price">£10.00 <br/> <span className="esicp-para">£0.00 VAT</span></p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={PhoneExpense} alt="" />
                  <div className="esic-inner">
                    <p className="esic-heading">Phone & Internet <br/><span className="esich-para">23rd January 2023 at 11:46</span></p>
                    <p className="esic-price">£4.00 <br/> <span className="esicp-para">£0.00 VAT</span></p>
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

export default Purchases