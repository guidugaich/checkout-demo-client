import React from 'react';
import { getBasketItemsDisplay, getTotalBasketAmount } from '../utils/basketUtils';

export interface IBasket {
  [key: string]: number;
}

interface BasketProps {
  basket: IBasket;
  addProductToBasket: (productId: string) => void;
  removeProductFromBasket: (productId: string) => void;
  removeProductFromBasketCompletely: (productId: string) => void;
}

const Basket: React.FC<BasketProps> = ({
  basket,
  addProductToBasket,
  removeProductFromBasket,
  removeProductFromBasketCompletely
}) => {
  const basketItemsDisplay = getBasketItemsDisplay(basket);
  const totalBasketAmount = getTotalBasketAmount(basket);
  
  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {basketItemsDisplay && basketItemsDisplay.map(item => (
          <li key={item.id}>
            {item.name} 
            <button onClick={() => removeProductFromBasket(item.id)}>-</button>
            {item.quantity}
            <button onClick={() => addProductToBasket(item.id)}>+</button>
            {item.totalItemPrice}
            <button onClick={() => removeProductFromBasketCompletely(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${totalBasketAmount}</p>
    </div>
  );
};

export default Basket;
