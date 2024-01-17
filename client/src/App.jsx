import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'
import Order from './pages/Order.jsx'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import RecipientPage from './pages/RecipientPage'
import AddressPage from './pages/AddressPage'
import AllProductsPage from './pages/AllProductsPage'
import {Toaster} from 'react-hot-toast'
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/checkout' element= {<OrderPage />} />
          <Route path='/Order' element={<Order/>} />
          
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/updaterecipient' element = {<RecipientPage />} />
          <Route path='/addaddress' element= {<AddressPage />} />
          <Route path='/allproducts' element= {<AllProductsPage />} />
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/password/:resetToken' element={<ResetPassword/>}/>
        </Routes>
        
         
      </Router>
      <Toaster/>
    </>
  )
}

export default App
