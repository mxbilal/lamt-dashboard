import React from "react";
import { Formik, Form, Field } from "formik";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Uncategorised from "../../assets/img/uncategorised.png";

const PocketExpense = () => {
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
                firstName: "",
                lastName: "",
                email: "",
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              <Form>
                <div className="pocketExpense-form">
                  <div className="pef-inner">
                    <div className="pefi-area-main">
                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="description">Description</label>
                        </div>
                        <div className="fields">
                          <Field
                            id="description"
                            name="description"
                            placeholder="Description"
                          />
                        </div>
                      </div>

                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="datetime">Date & Time</label>
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
                          <label htmlFor="value">Value</label>
                        </div>

                        <div className="fields">
                          <div className="inner-field">
                            <p className="currency">£</p>
                            <Field id="value" name="value" placeholder="0" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-center">
                      <div className="fc-inner-section">
                        <div className="fcis-start">
                          <div className="fcis-inner">
                            <div className="fcis-img">
                              <img src={Uncategorised} alt="" />
                            </div>

                            <div className="fcis-text">
                              <p className="uncat-heading">
                                <b>Uncategorised</b> <br />
                                <span className="uncat-para">
                                  £0.00(£0.00 VAT)
                                </span>
                              </p>
                            </div>

                            <div className="fcis-expand">
                              <ExpandMoreIcon />
                            </div>
                          </div>

                          <div className="fcis-inner-2">
                            <div className="fcis-text">
                              <p className="uncat-heading-line">
                                + Add extra line item
                              </p>
                            </div>
                          </div>

                          <div className="fcis-inner">
                            <div className="fcis-text">
                              <p className="uncat-heading-line">
                                + Attachments
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="vat-rate">
                      <p className="vr-para">VAT Rate</p></div>
                    <div role="group" aria-labelledby="my-radio-group" className="radio-row">
                      <label>
                        <Field type="radio" name="picked" value="One" />
                        Standard Rate
                      </label>
                      <label>
                        <Field type="radio" name="picked" value="Two" />
                        Exempt
                      </label>

                      <label>
                        <Field type="radio" name="picked" value="Three" />
                        Reduced Rate (12.5%)
                      </label>

                      <label>
                        <Field type="radio" name="picked" value="Four" />
                        Reduced Rate
                      </label>

                      <label>
                        <Field type="radio" name="picked" value="Four" />
                        No VAT (Outside Scope)
                      </label>
                    </div>

                    <div role="group" aria-labelledby="my-radio-group" className="radio-row-2">
                      <label>
                        <Field type="radio" name="picked" value="Five" />
                        Reverse Charge (20%)
                      </label>
                      <label>
                        <Field type="radio" name="picked" value="Six" />
                        Zero Rate
                      </label>

                    </div>

                    <div className="form-button">
                      <button className="btn-save">Save Changes</button>
                      <button className="btn-delete">Delete Expense</button>
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

export default PocketExpense;
