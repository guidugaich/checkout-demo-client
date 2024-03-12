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
    <div className='basket'>
      <h2>Basket</h2>
        {basketItemsDisplay && basketItemsDisplay.map(item => (
          <div key={item.id} className='basketRow'>
            <span className='basketItemName'>{item.name}</span>
            <div>
              <button
                onClick={() => removeProductFromBasket(item.id)}
                className='basketChangeQtyBtn'
              >
                <span>-</span>
              </button>
              {item.quantity}
              <button
                onClick={() => addProductToBasket(item.id)}
                className='basketChangeQtyBtn'
              >
                <span>+</span>
              </button>
            </div>
            ${item.totalItemPrice}
            <button onClick={() => removeProductFromBasketCompletely(item.id)}>Remove</button>
          </div>
        ))}
      <p>Total: ${totalBasketAmount}</p>
    </div>
  );
};

export default Basket;
