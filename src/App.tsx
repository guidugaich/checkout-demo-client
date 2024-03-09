import { useState } from 'react'
import './App.css'
import Basket, { IBasket } from './components/Basket'
// import CheckoutFrame from './components/CheckoutFrame'
import Header from './components/Header'
import ProductList from './components/ProductList'
import products from './services/data/products'

const removeProductFromBasket = (obj: IBasket, keyToRemove: string): IBasket => {
  const { [keyToRemove]: _, ...rest } = obj;
  return rest;
};

function App() {
  const [basket, setBasket] = useState<IBasket>({});

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

  const removeProductFromCart = (productId: string) => {
    if (basket[productId] === 1) {
      setBasket(prevState => {
        return removeProductFromBasket(prevState, productId)
      });

      return;
    }

    setBasket(prevState => ({
      ...prevState,
      [productId]: prevState[productId] - 1
    }));
  };
  
  return (
    <>
      <Header />
      <ProductList
        products={products}
        addProductToBasket={addProductToBasket}
      />
      <Basket
        basket={basket}
        addProductToBasket={addProductToBasket}
        removeProductFromCart={removeProductFromCart}
      />
    </>
  )
}

export default App
