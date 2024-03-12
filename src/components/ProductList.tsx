import React from 'react';

export interface IProduct {
  id: string;
  name: string;
  price: number;
  imgSrc: string;
}

interface ProductListProps {
  products: IProduct[];
  addProductToBasket: (productId: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addProductToBasket }) => {
  return (
    <div className="productList">
        {products.map(product => (
            <div className="productItem" key={product.id}>
              <p className='productName'>{product.name} - ${product.price}</p>
              <img src={product.imgSrc}/>
              <button onClick={() => addProductToBasket(product.id)}>Add to Cart</button>
            </div>
        ))}
    </div>
  );
};

export default ProductList;
