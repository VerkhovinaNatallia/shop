import './Breadcrums.css'
import arrow_icon from '../Assest/breadcrum_arrow.png'



const Breadcrums = (props) => {
const {product} = props;

    return (
        <div className="breadcrums">
            Магазин <img src={arrow_icon} alt=''/> Главная <img src={arrow_icon} alt=''/>{product.categoryRu}  <img src={arrow_icon} alt=''/> {product.name}

        </div>
      );
}
 
export default Breadcrums;