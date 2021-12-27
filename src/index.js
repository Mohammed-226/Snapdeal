import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import "./style.css"


export default class index extends Component {
 render() {
 return (
 <div>
 <App/>
 </div>
 )
 }
}
ReactDOM.render(<App/>,document.getElementById('root'))