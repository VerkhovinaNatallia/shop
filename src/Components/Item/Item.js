import { Link } from 'react-router-dom';
import './Item.css'


const Item = (props) => {
    return (  
        <div className='item'>
            <div className='item-photo'>
                <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt =''/>
                </Link>
            </div>

            <p className='item-name'>{props.name}</p>
            <p className='item-autor'>{props.autor}</p>        
            <div className='item-prices'>
                <div className='item-prices-new'>
                    {props.new_price}руб.
                </div>
                <div className='item-prices-old'>
                    {props.old_price}руб.
                </div>
            </div>
        
        </div>
    );
}
 
export default Item;