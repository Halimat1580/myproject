import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import RecipientPage from './pages/RecipientPage'
import AddressPage from './pages/AddressPage'
import AllProductsPage from './pages/AllProductsPage'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/checkout' element= {<OrderPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/updaterecipient' element = {<RecipientPage />} />
          <Route path='/addaddress' element= {<AddressPage />} />
          <Route path='/allproducts' element= {<AllProductsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
