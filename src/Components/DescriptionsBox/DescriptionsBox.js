import './DescriptionsBox.css'

const DescriptionsBox = (props) => {
   const {product} =props;
    return ( 
        <div className='descriptionsbox'>
             <div className='descriptionsbox-description'>
             <p>{product.description}</p>
                
             </div>
        </div>
     );
}
 
export default DescriptionsBox;