import React from 'react'
import {Route, Routes} from "react-router-dom";
import './App.css';
import Calculator from './Components/Calculator';
import Header from './Components/Header'
import Home from './Components/Home'
import Quote from './Components/Quote.js';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Calculator' element={<Calculator />}></Route>
          <Route path='/Quote' element={<Quote />}></Route>
        </Routes>      
      </div>
    );
  }
}

export default App;
