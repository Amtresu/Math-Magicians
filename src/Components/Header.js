import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import './Style/Header.css';
const Header = () =>{
    return(
        <div className='header-container'>
        <h1 className='title'>Math Magicians</h1>
        <ul>
            <nav>
            <ul className='nav-list'>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Calculator">Calculator</Link></li>
                <li><Link to="/Quote">Quote</Link></li>
            </ul>
            </nav>
        </ul>
        </div>
    )
}

export default Header