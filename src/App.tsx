/* global CheckoutWebComponents */
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PaymentSuccessPage from './pages/PaymentSuccessPage'
import PaymentCancelPage from './pages/PaymentCancelPage'
import PaymentFailurePage from './pages/PaymentFailurePage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/checkout-demo-client" element={<Home />} />
        <Route path="/checkout-demo-client/success" element={<PaymentSuccessPage />} />
        <Route path="/checkout-demo-client/failure" element={<PaymentFailurePage />} />
        <Route path="/checkout-demo-client/cancel" element={<PaymentCancelPage />} />
      </Routes>
	</BrowserRouter>
  )
}

export default App
