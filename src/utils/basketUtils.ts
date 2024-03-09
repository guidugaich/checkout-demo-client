import { IBasket } from "../components/Basket";
import products from "../services/data/products";

export const getBasketItemsDisplay = (basket: IBasket) => {
    if (!basket) return null;
    return Object.keys(basket).map((basketItemId) => {
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
};


export const getTotalBasketAmount = (basket: IBasket) => {
    const basketItems = getBasketItemsDisplay(basket);
    
    if (!basketItems) return 0;

    return basketItems.reduce((acc, curr) => {
        return acc + curr.quantity*curr.unitPrice;
    }, 0);
};
