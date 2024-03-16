import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionsBox from '../Components/DescriptionsBox/DescriptionsBox';
import RelativeProducts from '../Components/RelativeProducts/RelativeProducts';

function Product() {
  const {all_product} = useContext(ShopContext);
  const{productId}=useParams();
  const product = all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product} />
      <DescriptionsBox  product={product}/>
      <RelativeProducts/>
    </div>
  )
}

export default Product