import './RelativeProducts.css';
import data_product from '../Assest/data';
import Item from '../Item/Item';

const RelativeProducts = () => {
    return (  
        <div className="relativeproducts">
            <h2>Вам может понравиться</h2>
            <hr/>
            <div className='relativeproducts_item'>
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

                })}
            </div>
        </div>
    );
}
 
export default RelativeProducts;