import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";
import { Button, MenuItem, Select } from '@mui/material';

const SalesDetail = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const [clientList, setClientList] = useState(null)
  const [products, setProducts] = useState(null)
  const [data, setData] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  console.log('location', location?.state)

  // Function to fetch sales data by ID
  const getSalesById = async (id) => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.sales.getSalesById(id);
      if (response.status === 200) {
        let data = response?.data?.data;
        setDetail(data);
      } else {
        showAlert.failure(response?.data?.message ?? "Failed!");
      }
    } catch (e) {
      console.log('Error:', e);
    }
  };
  const getProducts = async (id) => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.products.getAll();
      if (response.status === 200) {
        let data = response?.data?.data;
        setProducts(data);
      } else {
        showAlert.failure(response?.data?.message ?? "Failed!");
      }
    } catch (e) {
      console.log('Error:', e);
    }
  };
  //Clients get api
  const GetClients = async () => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.clients.getClientById(id)
      if (response.status === 200) {
        let data = response?.data?.data
        setClientList(data)
      }
      else showAlert.failure(response?.data?.message ?? "Failed!")
    }
    catch (e) {
      console.log(e)
    }
  }

  const editData = async () => {
    const response = await LAMT_API.endpoints.clientAdmin.sales(id)
    if (response.status === 200) {
      showAlert.success(response?.data?.message)
      navigate('/sales')
    }
    else showAlert.failure(response?.data?.message)
  }
  // Fetch sales data when the component mounts
  useEffect(() => {
    getSalesById(id);
    getProducts()
    GetClients()
  }, []);

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

                <div className="sales-invoice" >
                  <div className="inner-sale-invoice">
                    <div className="start-invoice">
                      <div className="top-heading-invoice">
                        <h5 style={{ padding: "10px" }}>Add Invoice</h5>
                      </div>
                      <div className="right-info" key={detail?.id} style={{ width: "100%", display: "inline-block" }}>
                        <div className="ri-area" style={{ float: "right", paddingRight: "50px" }}>
                          <h2>{detail?.name}</h2>
                          <p>{detail?.amount}</p>

                        </div>

                      </div>

                      <div className="left-info" key={clientList?.id} style={{ paddingLeft: "50px" }}>
                        <h2>{clientList?.first_name}</h2>
                        <p>{clientList?.email}</p>
                      </div>

                      <div className="addSelectedItems">
                        <h4 style={{ paddingLeft: "6%" }}>Items</h4>
                        <div className='innerSelectedItem' style={{ display: "flex", justifyContent: "space-between", margin: "auto 6%" }}>
                          <p>{location?.state?.name}</p>
                          <p>{location?.state?.price}<br />
                          </p>
                          {/* <p>{`${location?.state?.price}`}
                      </p> */}
                          {/* <p>{location?.state?.vat_rate}</p> */}
                        </div>
                      </div>

                      <div className='add-new-line-category'>
                        <div className="add-new-line" onClick={() => navigate("/product-category")}>
                          <p>Add New Line</p>
                        </div>
                        <Select
                          labelId="demo-select-small-label"
                          // value={products[0]?.id}
                          // label={products[0]?.name}
                          onChange={(e) => setData(...data)}
                        >
                          {products?.map(option =>
                            <MenuItem value={option.id}>{option.name}</MenuItem>
                          )}
                        </Select>

                        <div className='totalAmount' style={{ width: "100%", display: "inline-block" }}>
                          <div className="inner-tam" style={{ float: "right", paddingRight: "50px" }}>
                            <p>Subtotal: <span>{detail?.amount}</span></p>
                            <p>VAT: <span>0</span></p>
                            <p>Total: <span>{detail?.amount}</span></p>

                            <Button>Post</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesDetail;
