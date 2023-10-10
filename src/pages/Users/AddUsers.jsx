import React from 'react'
import '../../index.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { TabView, TabPanel } from 'primereact/tabview';
import { Form, Field, Formik } from "formik";

const AddUser = () => {
    return (
        <>
            <div className='main-area'>
                <div className="sidebar-area">
                    <Sidebar />
                </div>
                <div className="dashboardContainer">
                    <Navbar />
                    <div className='users-page'>
                        <TabView>
                            <TabPanel header="User Details">
                                <div className="top-user-details">
                                    <div className="user-details-inner">
                                        <div className="udi-start">
                                            <label>Your Logo</label>
                                            <input type="file" className="userUploadImg" />
                                        </div>

                                        <div className="user-inner-details">
                                            <div className="uid-area">
                                                <div className="uid-section">
                                                    <label>Legal Name</label>
                                                    <input type="text" className='ui-field' placeholder='Jack Jones' />
                                                </div>

                                                <div className="uid-section">
                                                    <label>Email Address</label>
                                                    <input type="text" className='ui-field' placeholder='jack@gmail.com' />
                                                </div>

                                                <div className="uid-section">
                                                    <label>Street Address</label>
                                                    <input type="text" className='ui-field' placeholder='Houe 13, Street 14' />
                                                </div>
                                            </div>

                                            <div className="uid-area">
                                                <div className="uid-section">
                                                    <label>City Town</label>
                                                    <input type="text" className='ui-field' placeholder='London' />
                                                </div>

                                                <div className="uid-section">
                                                    <label>Post Code</label>
                                                    <input type="text" className='ui-field' placeholder='1254' />
                                                </div>

                                                <div className="uid-section">
                                                    <label>Country</label>
                                                    <input type="text" className='ui-field' placeholder='United Kingdom' />
                                                </div>
                                            </div>
                                        </div>

                                        <button type='submit' className='btn-user-submit'>Submit</button>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel header="Permissions">
                              <Formik>
                              <Form>
                               <div className="user-permission">
                                    <div className="up-inner-section">
                                        <div className="upis-start">
                                            <p>Customers</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Expenses</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Estimates</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Invoices</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Payments</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Reports</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Staff Roles</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Settings</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Subscriptions</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Leads</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <button type='submit' className='btn-user-submit'>Submit</button>
                                    </div>
                                </div>
                               </Form>
                              </Formik>
                            </TabPanel>

                        </TabView>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddUser