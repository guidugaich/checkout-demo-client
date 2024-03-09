import React from 'react';

export interface IProduct {
  id: string;
  name: string;
  price: number;
}

interface ProductListProps {
  products: IProduct[];
  addProductToBasket: (productId: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addProductToBasket }) => {
  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addProductToBasket(product.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
