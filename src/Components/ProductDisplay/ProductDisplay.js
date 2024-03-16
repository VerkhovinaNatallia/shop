import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assest/star_icon.png";
import star_dull_icon from "../Assest/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const {product} =props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <img className='productdisplay-main-img' src={product.image} alt=''/>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <h2>{product.autor}</h2>
            <div className='productdisplay-right-star'>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
                <p>122</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>{product.old_price}руб</div>
                <div className='productdisplay-right-price-new'>{product.new_price}руб</div>
            </div>
            <div className='productdisplay-right-description'>
                <p className='productdisplay-right-category'><span>Хаpактеристики:</span></p>
                <p className='productdisplay-right-category'><span>Автор</span> — {product.autor}</p>
                <p className='productdisplay-right-category'><span>Обложка</span> — {product.cover}</p>
                <p className='productdisplay-right-category'><span>Год издания</span> — {product.edition} </p>
                <p className='productdisplay-right-category'><span>Размер</span> — {product.size}</p>
                <p className='productdisplay-right-category'><span>Количество страниц</span> — {product.pages} </p>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Купить</button>

            
        </div>
        
    </div>
  )
}
export default ProductDisplay;