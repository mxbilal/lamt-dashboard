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
import { LAMT_API } from './api'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ForgetPassword from './pages/ForgetPassword/ForgetPassword'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import ClientLogin from './pages/ClientLogiin/ClientLogin'
import RegisterType from './pages/Signup/RegisterType'

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
            <Route path='/admin/login' element={<Login />} />
            <Route path='/login' element={
              <ProtectedRoute children={<ClientLogin />} />
            } />
            <Route path='/forget-password' element={
              <ProtectedRoute children={<ForgetPassword />} />
            } />
            <Route path='/new-password' element={
              <ProtectedRoute children={<ResetPassword />} />
            } />
            <Route path='/signup-type' element={
              <ProtectedRoute children={<RegisterType />} />
            } />
            <Route path='/transaction' element={<ProtectedRoute> <Transaction /> </ProtectedRoute>} />
            <Route path='/add-connection' element={<AddConnection />} />
            <Route path='/expenses' element={<Expenses />} />
            <Route path='/add-expense' element={<PocketExpense />} />
            <Route path='/dividend' element={<Dividend />} />
            <Route path='/pay-dividend' element={<DividendPayment />} />
            <Route path='/payroll' element={<Payroll />} />
            <Route path='/refer-friends' element={<ReferFriends />} />
            <Route path='/taxes' element={<Taxes />} />
            <Route path='/market-perks' element={<MarketPerks />} />
            <Route path='/purchases' element={<Purchases />} />
            <Route path='/sales' element={<Sales />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
