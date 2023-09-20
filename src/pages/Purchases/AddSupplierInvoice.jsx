
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Sidebar from "../../components/Sidebar/Sidebar";
import ReferFriend from "../../assets/img/refer-friend.png";
import Navbar from "../../components/Navbar/Navbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Uncategorised from "../../assets/img/uncategorised.png";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";
import { useNavigate, useParams } from "react-router-dom";

const AddSupplierInvoice = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { user } = JSON?.parse(localStorage?.getItem("userInfo"))
  const { id } = useParams()
  const handleDelete = async () => {
    const response = await LAMT_API.endpoints.clientAdmin.purchase.deleteSupplierInvoice(id)
    console.log("rr", response)
    if (response.status === 200) {
      showAlert.success(response?.data?.message)
      navigate('/purchases')
    }
    else showAlert.failure(response?.data?.message)
  }

  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />

          <div>
            <Formik
              initialValues={{
              }}
              onSubmit={async (values) => {
                // console.log("values", values)
                const fileInput = document.getElementById('attachments');
                const file = fileInput.files[0];
                setLoading(true)
                var formData = new FormData()
                formData.append("name", values.reference)
                formData.append("value", values.value)
                formData.append("status", 1)
                formData.append("dated", values.datetime)
                formData.append('issue_date', values.dateofInvoice);
                formData.append("invoice_for_user_id", 2)
                formData.append("vat_rate", '0.2')
                formData.append("amount", '500')
                formData.append("attachments", file)
                let response = await LAMT_API.endpoints.clientAdmin.purchase.addSupplierInvoice(formData)
                setLoading(false)
                if (response.status === 200) {
                  showAlert.success(response?.data?.message)
                  navigate('/purchases')
                }
                else showAlert.failure(response?.data?.message ?? "Failed!")
              }}
            >
              <Form>
                <div className="pocketExpense-form">
                  <div className="pef-inner">
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '30px',
                        marginBottom: '20px'

                      }}
                    >
                      <img src={ReferFriend} alt="" width={'50px'} height={'50px'} />
                      <div>
                        <p style={{ lineHeight: '0', fontWeight: 'bold' }}>{user?.first_name + " " + user?.last_name}</p>
                        <p style={{ lineHeight: '0.2' }}>{user?.email}</p>
                      </div>
                    </div>
                    <div className="pefi-area-main">
                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="dateofInvoice">Date of Invoice</label>
                        </div>
                        <div className="fields">
                          <Field
                            id="dateofInvoice"
                            name="dateofInvoice"
                            placeholder="Date of Invoice"
                          />
                        </div>
                      </div>
                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="datetime">Due Date</label>
                        </div>

                        <div className="fields">
                          <Field
                            id="datetime"
                            name="datetime"
                            placeholder="3rd April 2023 at 01:09"
                          />
                        </div>
                      </div>

                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="value">What is the default currency for this client? *</label>
                        </div>

                        <div className="fields">
                          <div className="inner-field">
                            <Field id="value" name="value" placeholder="£" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pefi-area-main">
                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="reference">Reference</label>
                        </div>
                        <div className="fields">
                          <Field
                            id="reference"
                            name="reference"
                            style={{ width: 550, padding: 30 }}
                          />
                        </div>
                      </div>
                      <div className="pefi-area">
                        {/* <div className="labels">
                          <label htmlFor="datetime">Due Date</label>
                        </div> */}

                        <div className="fields">
                          <Field
                            id="attachments"
                            name="attachments"
                            type="file"
                            placeholder="+ Attachments"
                            style={{ width: 550, marginTop: 30, textAlign: "center", padding: 30 }}
                          />
                        </div>
                      </div>

                    </div>

                    <div className="vat-rate">
                      <p>Is this invoice a refund being issued to you by your Client?</p></div>

                    <div className="vat-rate">
                      <p className="vr-para" style={{ paddingTop: 20, paddingBottom: 20, borderBottom: "1px solid #D9D9D9CC" }}>Line Item</p>
                    </div>

                    <div className="vat-rate">
                      <p className="vr-para" style={{ paddingTop: 20, paddingBottom: 30, borderBottom: "1px solid #D9D9D9CC", textAlign: "center" }}>+ Add new line item</p>
                    </div>
                    <div className="total-sales" style={{ textAlign: 'right' }}>
                      <p>Subtotal: <span style={{ fontWeight: "bold" }}>£100.00</span></p>
                      <p>VAT: <span style={{ fontWeight: "bold" }}>£100.00</span></p>
                      <p>Total:<span style={{ fontWeight: "bold" }}>£120.00</span></p>
                    </div>
                    <div className="form-button">
                      <button type="submit" className="btn-save" disabled={loading}>Save Invoice</button>
                      <button type="button" className="btn-delete" disabled={id === "0"} onClick={handleDelete}>Delete Invoice</button>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSupplierInvoice;
