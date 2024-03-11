import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PaymentSuccessPage from './pages/PaymentSuccessPage'
import PaymentCancelPage from './pages/PaymentCancelPage'
import PaymentFailurePage from './pages/PaymentFailurePage'


function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/checkout-demo-client/'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<PaymentSuccessPage />} />
        <Route path="/failure" element={<PaymentFailurePage />} />
        <Route path="/cancel" element={<PaymentCancelPage />} />
      </Routes>
	</BrowserRouter>
  )
}

export default App
