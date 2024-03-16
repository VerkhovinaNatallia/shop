import React, { useContext, useState } from 'react';

import './Navbar.css';
import logo from '../Assest/autumn-leaves-book-logo-icon-design-bookstore-logo-design-minimalistic-logo-for-books-with-leaf_8019.svg';
import card_icom from '../Assest/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {
    const[menu,setMenu]=useState('shop');
    const {getTotalCartItems}=useContext(ShopContext);
    return (  
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo'/>
                <p>Books</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{ setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Главная</Link>{menu === "shop"? <hr/>:<></>}</li>
                <li onClick={()=>{ setMenu('classic')}}><Link style={{textDecoration:'none'}} to='/classic'>Классика</Link>{menu === "classic"? <hr/>:<></>}</li>
                <li onClick={()=>{ setMenu('novels')}}><Link style={{textDecoration:'none'}} to='/novels'>Романы</Link> {menu === "novels"? <hr/>:<></>}</li>
                <li onClick={()=>{ setMenu('detektive')}}><Link style={{textDecoration:'none'}} to='/detektive'>Детективы</Link> {menu === "detektive"? <hr/>:<></>}</li>
                <li onClick={()=>{ setMenu('horror')}}><Link style={{textDecoration:'none'}} to='/horror'>Король ужасов</Link> {menu === "horror"? <hr/>:<></>}</li>
            </ul>
            <div className='nav-ogin-cart'>
            <Link to='/login'><button>Войти</button></Link>
            <Link to='/cart'><img src={card_icom} alt='card'/></Link>
                
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    );
}
 
export default Navbar;