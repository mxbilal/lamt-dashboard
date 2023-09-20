import React, { useEffect, useState } from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import PokcetExpense from "../../assets/img/pocket-expense.png";
import VehicleExpense from "../../assets/img/vehicle-expense.png";
import OperationExpense from "../../assets/img/operation-expese.png";
import ImvestmentExpense from "../../assets/img/investment-expense.png";
import PhoneExpense from "../../assets/img/phone-expense.png";
import { useNavigate } from "react-router-dom";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";

const Purchases = () => {
  const navigate = useNavigate()
  const [purchase, setPurchase] = useState([])
  const [overdue, setOverdue] = useState([])
  const getPurchases = async () => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.purchase.getPurchase()
      console.log("response", response)
      if (response.status === 200) {
        setPurchase(Object.values(response?.data?.data?.purchases ?? { data: [] }).flat())
        setOverdue(Object.values(response?.data?.data?.["overdue-purchases"] ?? { data: [] }).flat())
      }
      else showAlert.failure(response?.data?.message ?? "Failed!")
    }
    catch (e) {
      console.log(e)
    }
  }
  console.log("purchase", purchase, "overdue-purchases", overdue)
  useEffect(() => {
    console.log("useEffect")
    getPurchases()
  }, [])
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
              <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  justifyContent: 'space-evenly',
                  width: '60%',
                  cursor: 'pointer'
                }}>
                  <p style={{ fontWeight: 'bold' }}>Invoices</p>
                  <p>Supplier</p>
                </div>
                <div className="esi-top">
                  <img src={PokcetExpense} alt="" />
                  <p className="esit-heading" onClick={() => navigate('/add-supplier-invoice/0')}>Add a supplier invoice</p>
                </div>
                <>
                  <div className="esi-content">
                    <div className="esic-inner">
                      <p className="esic-heading">Overdue <br/></p>
                    </div>
                  </div>
                  {overdue.length ? purchase?.map?.(ex => <div className="esi-content">
                    <img src={VehicleExpense} alt="" />
                    <div className="esic-inner cursor-p">
                      <p className="esic-heading">{ex?.name} <br /><span className="esich-para">{ex?.created_at.split(".")[0]}</span></p>
                      <p className="esic-price">{ex?.value} <br /> <span className="esicp-para">{ex?.vat_rate} VAT</span></p>
                    </div>
                  </div>) : <div className="esi-content" style={{justifyContent: "center"}}>
                    <div className="esic-inner">
                      <p className="esic-heading">No Overdues. <br/></p>
                    </div>
                  </div>}
                </>

                <>
                  <div className="esi-content">
                    <div className="esic-inner">
                      <p className="esic-heading">Purchase <br/></p>
                    </div>
                  </div>
                  {purchase.length ? purchase?.map?.(ex => <div className="esi-content">
                    <img src={VehicleExpense} alt="" />
                    <div className="esic-inner cursor-p">
                      <p className="esic-heading">{ex?.name} <br /><span className="esich-para">{ex?.created_at.split(".")[0]}</span></p>
                      <p className="esic-price">{ex?.value} <br /> <span className="esicp-para">{ex?.vat_rate} VAT</span></p>
                    </div>
                  </div>) : <div className="esi-content" style={{justifyContent: "center"}}>
                    <div className="esic-inner">
                      <p className="esic-heading">No Purchases. <br/></p>
                    </div>
                  </div>}
                </>
                {/* <div className="esi-content">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Purchases