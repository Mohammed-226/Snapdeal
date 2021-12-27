import React, { Component } from 'react'
import TopHeader from './Components/TopHeaderComponents/TopHeader';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';

export default class App extends Component {
 render() {
 return (
 <div>
 <TopHeader/>
 <HeaderComponent/>
 </div>
 )
 }
}