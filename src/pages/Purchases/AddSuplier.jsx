import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Uncategorised from "../../assets/img/uncategorised.png";
// import { LAMT_API } from "../../api";
// import { showAlert } from "../../utils";
import { useNavigate, useParams } from "react-router-dom";
import { Select } from "@mui/material";

const AddSuplier = () => {
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
                    onSubmit={""}
                >
                    <Form>
                        <div className="pocketExpense-form">
                            <div className="pef-inner">
                                <div className="pefi-area-main">
                                    <div className="pefi-area">
                                        <div className="labels">
                                            <label htmlFor="description">Legal Name</label>
                                        </div>
                                        <div className="fields">
                                            <Field
                                                id="description"
                                                name="description"
                                                placeholder="Jack Jones"
                                            />
                                        </div>
                                    </div>
                                    <div className="pefi-area">
                                        <div className="labels">
                                            <label htmlFor="datetime">Email Address</label>
                                        </div>

                                        <div className="fields">
                                            <Field
                                                id="datetime"
                                                name="datetime"
                                                placeholder="jack@gmail.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="pefi-area">
                                        <div className="labels">
                                            <label htmlFor="value">Account Number</label>
                                        </div>

                                        <div className="fields">
                                            <div className="inner-field">
                                                <Field id="value" name="value" placeholder="999999999" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pefi-area-main">
                                    <div className="pefi-area">
                                        <div className="labels">
                                            <label htmlFor="description">Sort Code</label>
                                        </div>
                                        <div className="fields">
                                            <Field
                                                id="description"
                                                name="description"
                                                placeholder="999 999 999"
                                            />
                                        </div>
                                    </div>
                                    <div className="pefi-area">
                                        <div className="labels">
                                            <label htmlFor="datetime">What is the default currency for this supplier</label>
                                        </div>

                                        <div className="fields">
                                            <Field
                                                id="text"
                                                name="currency"
                                                placeholder="&pound;"
                                            />
                                        </div>
                                    </div>

                                    <div className="pefi-area">
                                        <div className="labels">
                                            <label htmlFor="value">Country</label>
                                        </div>

                                        <div className="fields">
                                            <div className="inner-field">
                                                <Field id="value" name="value" placeholder="United Kingdom" />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="pefi-area-main-2">
                                    <div className="pefi-area">
                                        <div className="labels">
                                            <label htmlFor="description">How many days do you normally give this supplier to pay?</label>
                                        </div>
                                        <div className="fields">
                                            <Field as="select" name="number" className="numberOfDays">
                                                <option value="10">10</option>
                                                <option value="20">20</option>
                                                <option value="30">30</option>
                                            </Field>
                                        </div>
                                    </div>
                                 

                                    <div className="pefi-area" style={{display:"none"}}>
                                        <div className="labels">
                                            <label htmlFor="value">What is the default currency of this client?</label>
                                        </div>

                                        <div className="fields">
                                        <Field as="select" name="number" className="currencyForClient">
                                                <option value="1">&pound;</option>
                                                <option value="2">$</option>
                                                <option value="3">&euro;</option>
                                            </Field>
                                        </div>
                                    </div>
                                </div>

                                <div className="vat-rate">
                    <p className="vr-para">What is the default VAT rate for this supplier?</p></div>
                  <div role="group" aria-labelledby="my-radio-group" className="radio-row">
                    <label>
                      <Field type="radio" name="picked" value={'1'} />
                      Capital Purchases (20%)
                    </label>
                    <label>
                      <Field type="radio" name="picked" value={'2'} />
                      EC Goods (Zero Rated)
                    </label>

                    <label>
                      <Field type="radio" name="picked" value={'3'} />
                     Exempt
                    </label>

                    <label>
                      <Field type="radio" name="picked" value={'4'} />
                      EC Goods Standared (Acquisitions)
                    </label>

                    <label>
                      <Field type="radio" name="picked" value={'5'} />
                      VAT on Imports
                    </label>

                  </div>

                  <div role="group" aria-labelledby="my-radio-group" className="radio-row" style={{marginTop:"2%"}}>
                    <label>
                      <Field type="radio" name="picked" value={'6'} />
                      No VAT (Outside Scope)
                    </label>
                    <label>
                      <Field type="radio" name="picked" value={'7'} />
                      Reduced Rate
                    </label>

                    <label>
                      <Field type="radio" name="picked" value={'8'} />
                     Reduced Rate (12.5%)
                    </label>

                    <label>
                      <Field type="radio" name="picked" value={'9'} />
                    Standared Rate
                    </label>

                    <label>
                      <Field type="radio" name="picked" value={'10'} />
                      Zero Rate
                    </label>

                  </div>

                  <div role="group" aria-labelledby="my-radio-group" className="radio-rows" style={{marginTop:"2%"}}>
                    <label>
                      <Field type="radio" name="picked" value={'11'} />
                      Reversed Charge (20%)
                    </label>
                    <label>
                      <Field type="radio" name="picked" value={'12'} />
                      Custom Rate
                    </label>

                  </div>
                             
                                <div className="form-button">
                                    <button type="submit" className="btn-save" >Add Supplier</button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    </div>
</>
  )
}

export default AddSuplier