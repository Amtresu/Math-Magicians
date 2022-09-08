import './Calculator.css';
import React from 'react';
import calculate from '../Logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      total: 0,
      next: null,
      operation: null,};
      this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }


  render() {
    const {total, operation, next} = this.state;
    return (
      <div className="container">

        <div className="result"><span> {total} {operation} {next}</span></div>

        <div className="row">
          <button onClick={this.clickHandler}  type="button" className="button">AC</button >
          <button onClick={this.clickHandler} type="button" className="button">+/-</button >
          <button onClick={this.clickHandler} type="button" className="button">%</button >
          <button onClick={this.clickHandler} type="button" className="button-alt">÷</button >
        </div>

        <div className="row">
          <button onClick={this.clickHandler} type="button" className="button">7</button >
          <button onClick={this.clickHandler} type="button" className="button">8</button >
          <button onClick={this.clickHandler} type="button" className="button">9</button >
          <button onClick={this.clickHandler} type="button" className="button-alt">x</button >
        </div>

        <div className="row">
          <button onClick={this.clickHandler} type="button" className="button">4</button >
          <button onClick={this.clickHandler} type="button" className="button">5</button >
          <button onClick={this.clickHandler} type="button" className="button">6</button >
          <button onClick={this.clickHandler} type="button" className="button-alt">-</button >
        </div>

        <div className="row">
          <button onClick={this.clickHandler} type="button" className="button">1</button >
          <button onClick={this.clickHandler} type="button" className="button">2</button >
          <button onClick={this.clickHandler} type="button" className="button">3</button >
          <button onClick={this.clickHandler} type="button" className="button-alt">+</button >
        </div>

        <div className="row">
          <button onClick={this.clickHandler} type="button" className="button-0">0</button >
          <button onClick={this.clickHandler} type="button" className="button">.</button >
          <button onClick={this.clickHandler} type="button" className="button-alt">=</button >
        </div>

      </div>
    );
  }
}

export default Calculator;
