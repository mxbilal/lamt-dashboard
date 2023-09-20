import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Transaction from './pages/Transaction/Transaction'
import AddConnection from './pages/AddConnection/AddConnection'
import Expenses from './pages/Expenses/Expenses'
import PocketExpense from './pages/PocketExpense/PocketExpense'
import Dividend from './pages/Dividend/Dividend'
import DividendPayment from './pages/DividendPayment/DividendPayment'
import Payroll from './pages/Payroll/Payroll'
import ReferFriends from './pages/ReferFriends/ReferFriends'
import Taxes from './pages/Taxes/Taxes'
import MarketPerks from './pages/MarketPerks/MarketPerks'
import Purchases from './pages/Purchases/Purchases'
import Sales from './pages/Sales/Sales'
import Reports from './pages/Reports/Reports'
import Settings from './pages/Settings/Settings'
import Login from './pages/Login/Login'
import TwoFactor from './pages/Login/TwoFactor'
import { LAMT_API } from './api'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ForgetPassword from './pages/ForgetPassword/ForgetPassword'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import ClientLogin from './pages/ClientLogiin/ClientLogin'
import RegisterType from './pages/Signup/RegisterType'
import Register from './pages/Signup/Register'
import MultiStep from './pages/Signup/MultiStep'
import Plans from './pages/Plans/Plans'
import AddSalesInvoice from './pages/Sales/AddSalesInvoice'
import AddSupplierInvoice from './pages/Purchases/AddSupplierInvoice'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    LAMT_API.init()
  }, [])
  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route index element={<ProtectedRoute children={<Dashboard />} />} />
            <Route path='/admin/login' element={<ProtectedRoute children={<Login />} />} />
            <Route path='/login' element={<ProtectedRoute children={<ClientLogin />} />} />
            <Route path='/forget-password' element={<ProtectedRoute children={<ForgetPassword />} />} />
            <Route path='/reset-password' element={<ProtectedRoute children={<ResetPassword />} />} />
            <Route path='/signup-type' element={<ProtectedRoute children={<RegisterType />} />} />
            <Route path='/signup' element={<ProtectedRoute children={<Register />} />} />
            <Route path='/plans' element={<ProtectedRoute children={<Plans />} />} />
            <Route path='/signup/:step' element={<ProtectedRoute children={<MultiStep />} />} />
            <Route path='/two-factor' element={<ProtectedRoute children={<TwoFactor />} />} />
            <Route path='/transaction' element={<ProtectedRoute children={<Transaction />} />} />
            <Route path='/add-connection' element={<ProtectedRoute children={<AddConnection />} />} />
            <Route path='/expenses' element={<ProtectedRoute children={<Expenses />} />} />
            <Route path='/add-expense/:id' element={<ProtectedRoute children={<PocketExpense />} />} />
            <Route path='/dividend' element={<ProtectedRoute children={<Dividend />} />} />
            <Route path='/pay-dividend' element={<ProtectedRoute children={<DividendPayment />} />} />
            <Route path='/payroll' element={<ProtectedRoute children={<Payroll />} />} />
            <Route path='/refer-friends' element={<ProtectedRoute children={<ReferFriends />} />} />
            <Route path='/taxes' element={<ProtectedRoute children={<Taxes />} />} />
            <Route path='/market-perks' element={<ProtectedRoute children={<MarketPerks />} />} />
            <Route path='/purchases' element={<ProtectedRoute children={<Purchases />} />} />
            <Route path='/sales' element={<ProtectedRoute children={<Sales />} />} />
            <Route path='/add-sales-invoice/:id' element={<ProtectedRoute children={<AddSalesInvoice />} />} />
            <Route path='/reports' element={<ProtectedRoute children={<Reports />} />} />
            <Route path='/settings' element={<ProtectedRoute children={<Settings />} />} />
            <Route path='/add-supplier-invoice/:id' element={<ProtectedRoute children={<AddSupplierInvoice />} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
