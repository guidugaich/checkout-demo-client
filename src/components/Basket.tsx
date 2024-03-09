import React from 'react';
import { IProduct } from './ProductList';
import products from '../services/data/products';

export interface IBasket {
  [key: string]: number;
}

interface BasketProps {
  basket: IBasket;
  addProductToBasket: (productId: string) => void;
  removeProductFromCart: (productId: string) => void;
}

const Basket: React.FC<BasketProps> = ({ basket, addProductToBasket, removeProductFromCart }) => {
  const basketItemsDisplay = Object.keys(basket).map((basketItemId) => {
    const quantity: number = basket[basketItemId];
    const unitPrice: number = products.find(p => p.id === basketItemId)?.price || 0
    const name: string = products.find(p => p.id === basketItemId)?.name || ''

    const totalItemPrice = quantity * unitPrice; 

    return {
      id: basketItemId,
      name,
      quantity,
      unitPrice,
      totalItemPrice
    }
  });

  const totalBasketAmount = basketItemsDisplay.reduce((acc, curr) => {
    return acc + curr.quantity*curr.unitPrice;
  }, 0);

  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {basketItemsDisplay.map(item => (
          <li key={item.id}>
            {item.name} 
            <button onClick={() => removeProductFromCart(item.id)}>-</button>
            {item.quantity}
            <button onClick={() => addProductToBasket(item.id)}>+</button>
            {item.totalItemPrice}
          </li>
        ))}
      </ul>
      <p>Total: ${totalBasketAmount}</p>
    </div>
  );
};

export default Basket;
