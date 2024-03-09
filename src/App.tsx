import { useState } from 'react'
import './App.css'
import Basket, { IBasket } from './components/Basket'
// import CheckoutFrame from './components/CheckoutFrame'
import Header from './components/Header'
import ProductList from './components/ProductList'
import products from './services/data/products'


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
        removeProductFromBasket={removeProductFromBasket}
        removeProductFromBasketCompletely={removeProductFromBasketCompletely}
      />
    </>
  )
}

export default App
