import React from 'react'
import "./HeaderComponent.css"
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'

const HeaderComponent = () => {
 return (
 <section id="HeaderComp">
 <article>
 <Logo/>
 <Search/>
 <Menu/>
 </article>
 </section>
 )
}

export default HeaderComponent