/* global CheckoutWebComponents */
import { useState } from 'react'
import './App.css'
import Basket, { IBasket } from './components/Basket'
// import Frame from './components/Frame'
import Header from './components/Header'
import ProductList from './components/ProductList'
import products from './services/data/products'
import CheckoutButton from './components/CheckoutButton'
import CountySelection, { Country } from './components/CountySelection'
import CheckoutPaymentComponent from './components/CheckoutPaymentComponent'


function App() {
  const [basket, setBasket] = useState<IBasket>({});
  const [country, setCountry] = useState<Country>('GB');
  const [paymentSession, setPaymentSession] = useState({});

  const addProductToBasket = (productId: string) => {
    if (!basket[productId]) {
      setBasket(prevState => ({
        ...prevState,
        [productId]: 1
      }));
      
      return;
    }

    setBasket(prevState => ({
      ...prevState,
      [productId]: prevState[productId] + 1
    }));
  };

  const removeProductFromBasket = (productId: string) => {
    if (basket[productId] === 1) {
      removeProductFromBasketCompletely(productId);

      return;
    }

    setBasket(prevState => ({
      ...prevState,
      [productId]: prevState[productId] - 1
    }));
  };
  
  const removeProductFromBasketCompletely = (productId: string) => {
    const { [productId]: _, ...rest } = basket;
    setBasket(rest)
  };

  const updateCountry = (newCountry: Country) => {
    setCountry(newCountry);
  };

  const setPaymentSessionData = (paymentSessionData: any) => {
    setPaymentSession(paymentSessionData);
  };

  console.log('paymentSessionData', paymentSession);

  return (
    <>
      <Header />
      <CountySelection updateCountry={updateCountry} />
      <ProductList
        products={products}
        addProductToBasket={addProductToBasket}
      />
      <Basket
        basket={basket}
        addProductToBasket={addProductToBasket}
        removeProductFromBasket={removeProductFromBasket}
        removeProductFromBasketCompletely={removeProductFromBasketCompletely}
      />
      <CheckoutButton
        basket={basket}
        country={country}
        setPaymentSessionData={setPaymentSessionData}
      />
      <CheckoutPaymentComponent
        paymentSession={paymentSession}
      />
    </>
  )
}

export default App
