import { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assest/cart_cross_icon.png'


const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
    return ( 
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Продукт</p>
            <p>Название</p>
            <p>Цена</p>
            <p>Количество</p>
            <p>Всего</p>
            <p>Удалить</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return(
                    <div>
                    <div className='cartitems-format cartitems-format-main'>
                        <img src={e.image} alt='' className='carticon-product-icon'/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-qunatity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=''/>
        
                    </div>
                    <hr/>
                </div>
                )
            }
            return null;
        })}
        <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h2>Kорзина</h2>
                <div>
                    <div className='certitems-total-item'>
                        <p>Итог</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <p>Стоимость доставки</p>
                        <p>Бесплатно</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <h3>Итого</h3>
                        <h3>{0}руб.</h3>
                    </div>
                </div>
                <button>Купить</button>
            </div>
            <div className='cartitems_promocode'>
                <p>Если у вас есть промокод, введите его здесь</p>
                <div className='cartitems_promobox'>
                    <input type='text' placeholder='промокод'/>
                    <button>Применить</button>
                </div>
            </div>
        </div>
    
    
    </div> );
}
 
export default CartItems;


