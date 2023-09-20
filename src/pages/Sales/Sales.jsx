import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import PokcetExpense from "../../assets/img/pocket-expense.png";
import VehicleExpense from "../../assets/img/vehicle-expense.png";
import OperationExpense from "../../assets/img/operation-expese.png";
import ImvestmentExpense from "../../assets/img/investment-expense.png";
import PhoneExpense from "../../assets/img/phone-expense.png";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";

const Sales = () => {
  const navigate = useNavigate()
  const [salesList, setSalesList] = useState([])

  const GetSales = async () => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.sales.getSales()
      if (response.status === 201) {
        let data = response?.data?.data
        console.log("rdd", data)

        setSalesList([...data['Invoices']])
      }
      else showAlert.failure(response?.data?.message ?? "Failed!")
    }
    catch (e) {
      console.log(e)
    }
  }
  console.log("ex", salesList)
  useEffect(() => {
    GetSales()
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
                  <p>Products</p>
                  <p>Clients</p>
                </div>
                <div className="esi-top">
                  <img src={PokcetExpense} alt="" />
                  <p className="esit-heading"
                    onClick={() => navigate('/add-sales-invoice/0')}
                  >
                    Add new sales invoice
                  </p>
                </div>

                {salesList.map(sale => <div
                  key={sale.id}
                  className="esi-content cursor-p"
                  onClick={() => navigate(`/add-sales-invoice/${sale.id}`)}
                >
                  <img src={VehicleExpense} alt="" />
                  <div className="esic-inner">
                    <p className="esic-heading">{sale?.name} <br /><span className="esich-para">{sale?.dated.split(" ")[0]}</span></p>
                    <p className="esic-price">£{sale?.amount} <br /> <span className="esicp-para">£{sale?.vat_rate} VAT</span></p>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sales