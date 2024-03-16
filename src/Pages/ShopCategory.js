import React, { useContext } from 'react';
import {ShopContext} from '../Context/ShopContext'
import './Css/ShopCategory.css';
import Item from '../Components/Item/Item';



function ShopCategory(props) {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <div >
      {props.category === "classic"? <h1>Классика. Яркие страницы</h1>:<></>}
      {props.category === "novels"? <h1>Современные романы</h1>:<></>}
      {props.category === "detektive"? <h1>Агата Кристи</h1>:<></>}
      {props.category === "horror"? <h1>Стивен Кинг</h1>:<></>}
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} autor={item.autor} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }else{
            return null;
          }
        })}
      </div>

    </div>
  )
}

export default ShopCategory