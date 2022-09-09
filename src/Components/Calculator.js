import './Calculator.css';
import React, { useState } from 'react';
import calculate from '../Logic/calculate';

const Calculator = () => {
  const [totalSum, setTotalSum] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    setTotalSum(calculate(totalSum, e.target.textContent));
  };

  
    return (
      <div className="container">

        <div className="result"><span>   {totalSum.total} {totalSum.operation} {totalSum.next}</span></div>

        <div className="row">
          <button onClick={clickHandler}  type="button" className="button">AC</button >
          <button onClick={clickHandler} type="button" className="button">+/-</button >
          <button onClick={clickHandler} type="button" className="button">%</button >
          <button onClick={clickHandler} type="button" className="button-alt">÷</button >
        </div>

        <div className="row">
          <button onClick={clickHandler} type="button" className="button">7</button >
          <button onClick={clickHandler} type="button" className="button">8</button >
          <button onClick={clickHandler} type="button" className="button">9</button >
          <button onClick={clickHandler} type="button" className="button-alt">x</button >
        </div>

        <div className="row">
          <button onClick={clickHandler} type="button" className="button">4</button >
          <button onClick={clickHandler} type="button" className="button">5</button >
          <button onClick={clickHandler} type="button" className="button">6</button >
          <button onClick={clickHandler} type="button" className="button-alt">-</button >
        </div>

        <div className="row">
          <button onClick={clickHandler} type="button" className="button">1</button >
          <button onClick={clickHandler} type="button" className="button">2</button >
          <button onClick={clickHandler} type="button" className="button">3</button >
          <button onClick={clickHandler} type="button" className="button-alt">+</button >
        </div>

        <div className="row">
          <button onClick={clickHandler} type="button" className="button-0">0</button >
          <button onClick={clickHandler} type="button" className="button">.</button >
          <button onClick={clickHandler} type="button" className="button-alt">=</button >
        </div>

      </div>
    );
  }


export default Calculator;
