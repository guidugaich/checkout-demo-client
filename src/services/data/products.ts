import { IProduct } from "../../components/ProductList"
import whiteShirtImgPath from '../../assets/white.jpeg';
import blackShirtImgPath from '../../assets/black.jpeg';
import redShirtImgPath from '../../assets/red.jpeg';
import blueShirtImgPath from '../../assets/blue.jpeg';
import greenShirtImgPath from '../../assets/green.jpeg';


const products: IProduct[] = [
    { id: '50dcfaa5-1ca3-414d-a1cf-286a86f28a4a', name: 'White T-Shirt', price: 15, imgSrc: whiteShirtImgPath },
    { id: '166e4b39-284f-43cf-aca7-dd36adfd8c1a', name: 'Black T-Shirt', price: 15, imgSrc: blackShirtImgPath },
    { id: '33528b18-6c69-4d4b-bca7-59cff1b06231', name: 'Red T-Shirt', price: 30, imgSrc: redShirtImgPath },
    { id: 'b8068bed-c7aa-4c65-b8cc-21f09ca97ecd', name: 'Blue T-Shirt', price: 40, imgSrc: blueShirtImgPath },
    { id: 'db4c40b7-6bbe-46fb-aa02-a92ea8df20e5', name: 'Green T-Shirt', price: 40, imgSrc: greenShirtImgPath },
]

export default products