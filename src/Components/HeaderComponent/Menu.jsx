import React from 'react'
import index from './../../index';

let styles={
 position:"relative",
}
const Menu = () => {
 return (
 <div className="AuthMenu">
 <ul>
 <li><a href="#">
 Cart
 <span style={{styles}}><i className="fa fa-cart-plus" ariaHidden="true"></i></span>
 </a></li>
 <li><a href="#">
 Sign in
 <span style={{styles}}><i class="fas fa-user" ariaHidden="true"></i></span>
 
 </a></li>
 </ul>
 </div>
 )
}

export default Menu