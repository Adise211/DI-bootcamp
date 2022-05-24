import React from 'react';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      count:0,
      countTwo:null,
      operator:null
    }
  }

  // Delete
    handleAC = () => {
      return (
        this.setState({count:0}) ,
        this.setState({operator:null})
      )
    }



  // numbers
    handleclick = (e) => {
      // console.log(e.target.value);
      if (this.state.count === 0) {
          this.setState({count:e.target.value})
          // this.setState({countTwo:e.target.value})
      } else  {
        this.setState({count:this.state.count + e.target.value})
      }

    }





  // Dot operator
    handleDot = (e) => {
      this.state.count !== null
      ? this.setState({count:this.state.count + e.target.value})
      : this.setState({count:0})

    }


  // Operators
    handleOperator = (e) =>{

      if (this.state.count === 0) {
        this.setState({operator:null})
      } else {
        this.setState({operator: e.target.name})

      }


    }


    handleResult = () => {
      const {count,countTwo} = this.state;
      switch (this.state.operator) {
        case '/':
          return count / countTwo
        case 'x':
          return count * countTwo
        case '+':
          return count + countTwo
        case '-':
          return count - countTwo
        default:
          console.log('Something went wrong');

      }
    }










  render() {
    const {count,operator, countTwo} = this.state;
    return (
      < >
        <h2>I'm from Calculator component !</h2>
        <h1>{count} {operator} {countTwo}</h1>
        {
          operator !== null ? <p>{operator}</p>: console.log('insert numbers')
        }
        <button onClick={this.handleAC}> AC </button>
        <button name='/' onClick={this.handleOperator}>/</button>
        <button name='x' onClick={this.handleOperator}>x</button>

        <button value='7' onClick={this.handleclick}>7</button>
        <button value='8' onClick={this.handleclick}>8</button>
        <button value='9' onClick={this.handleclick}>9</button>

        <button name='-' onClick={this.handleOperator}>-</button>

        <button value='4' onClick={this.handleclick}>4</button>
        <button value='5' onClick={this.handleclick}>5</button>
        <button value='6' onClick={this.handleclick}>6</button>

        <button name='+' onClick={this.handleOperator}>+</button>

        <button value='1' onClick={this.handleclick}>1</button>
        <button value='2' onClick={this.handleclick}>2</button>
        <button value='3' onClick={this.handleclick}>3</button>

        <button onClick={this.handleResult}>=</button>
        <button value='0' onClick={this.handleclick}>0</button>
        <button value='.' onClick={this.handleDot}>.</button>
      </>

    )
  }
} // end of class


// his.setState({countTwo:null})

export default Calculator;
