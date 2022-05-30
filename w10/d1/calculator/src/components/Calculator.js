import {useState} from 'react';




const Calculator = () => {

  const arr = [1,2,3,4,5,6,7,8,9]
  const [cal,setCal] = useState('');
  const [result, setResult] = useState('');
  const operator = ['/','*','+','-','.'];

  // Display numbers and operators
  const updateCal = (value) => {
    if (
      (operator.includes(value) && cal === '' )||
      ( operator.includes(value) && operator.includes(cal.slice(-1))) ) {
      return;
    }

    setCal(cal + value)

    if (!operator.includes(value)) {
      setResult(eval(cal + value).toString());
    }
  }

  // Equel button
  const calculateAll = () => {
    setCal(eval(cal).toString());
  }

  // AC button (delete)
  const deleteButton = () => {
    if (cal === '') {
      return;
    }

    const newValue = cal.slice(0, -1)
    setCal(newValue)
    setResult(newValue)

  }






  return (
    <div className='calculator'>
      <div className='display'>
        {result ? <span>({result})</span> : ''}
        { cal || 0 }
        </div>
        <div className='operators'>
          <button onClick={deleteButton} className='top ac'>AC</button>

          <button onClick={() => updateCal('+')} className='top'>+</button>
          <button onClick={() => updateCal('-')} className='top'>-</button>
          <button onClick={() => updateCal('*')} className='top'>*</button>
          <button onClick={() => updateCal('/')} className='top'>/</button>
        </div>

        <div className='digits'>
          {
            arr.map((item,i) => {
              return (
                  <button key={i} onClick={() => updateCal(item.toString())}>{item}</button>
              )
            })
          }
          <button onClick={() => updateCal('0')}>0</button>
          <button onClick={() => updateCal('.')}>.</button>

          <button onClick={calculateAll}>=</button>

        </div>


    </div>
  )




}








export default Calculator;



























// import {useReducer, useEffect, useState} from 'react';
//
//
//
// // My reducer :
//
// const initState = {
//   result:0,
//   prevValue:null,
//   nextValue:null
// }
//
// export const reducer = (state,action) =>{
//   switch (action.type) {
//     case 'PLUS':
//
//       return {...state,result:state.result + 1}
//     case 'MINUS':
//       return {...state}
//     case 'MULTIPLY':
//       return {...state}
//     case 'DIVIDE':
//       return {...state}
//     case 'DOT':
//       return {...state}
//     default:
//       return {...state}
//
//   }
// }
//
//
//
//
//
//
// const Calculator = (props) => {
//
//   const [state,dispatch] = useReducer(reducer,initState);
//
//
//   const handleOperator = (e) => {
//     // console.log(e.target.value);
//     state.result === 0 ? setState({result:e.target.value}) : console.log('not 0');
//   }
//
//
//   return (
//     <div>
//       <h1>Calculator</h1>
//       <h2>{state.result}</h2>
//       <button onClick={() => dispatch({type:'PLUS'})}>+</button>
//       <button>-</button>
//       <button>*</button>
//       <button>/</button>
//       <button>.</button>
//       <button>AC</button>
//
//       <button value='9' onClick={handleOperator}>9</button>
//       <button value='8' onClick={handleOperator}>8</button>
//       <button value='7' onClick={handleOperator}>7</button>
//     </div>
//   )
// }
//
//
//
//
//

// class Calculator extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count:0,
//       countTwo:null,
//       operator:null
//     }
//   }
//
//   // Delete
//     handleAC = () => {
//       return (
//         this.setState({count:0}) ,
//         this.setState({operator:null})
//       )
//     }
//
//
//
//   // numbers
//     handleclick = (e) => {
//       // console.log(e.target.value);
//       if (this.state.count === 0) {
//           this.setState({count:e.target.value})
//           // this.setState({countTwo:e.target.value})
//       } else  {
//         this.setState({count:this.state.count + e.target.value})
//       }
//
//     }
//
//
//
//
//
//   // Dot operator
//     handleDot = (e) => {
//       this.state.count !== null
//       ? this.setState({count:this.state.count + e.target.value})
//       : this.setState({count:0})
//
//     }
//
//
//   // Operators
//     handleOperator = (e) =>{
//
//       if (this.state.count === 0) {
//         this.setState({operator:null})
//       } else {
//         this.setState({operator: e.target.name})
//
//       }
//
//
//     }
//
//
//     handleResult = () => {
//       const {count,countTwo} = this.state;
//       switch (this.state.operator) {
//         case '/':
//           return count / countTwo
//         case 'x':
//           return count * countTwo
//         case '+':
//           return count + countTwo
//         case '-':
//           return count - countTwo
//         default:
//           console.log('Something went wrong');
//
//       }
//     }
//
//
//
//
//
//
//
//
//
//
//   render() {
//     const {count,operator, countTwo} = this.state;
//     return (
//       < >
//         <h2>I'm from Calculator component !</h2>
//         <h1>{count} {operator} {countTwo}</h1>
//         {
//           operator !== null ? <p>{operator}</p>: console.log('insert numbers')
//         }
//         <button onClick={this.handleAC}> AC </button>
//         <button name='/' onClick={this.handleOperator}>/</button>
//         <button name='x' onClick={this.handleOperator}>x</button>
//
//         <button value='7' onClick={this.handleclick}>7</button>
//         <button value='8' onClick={this.handleclick}>8</button>
//         <button value='9' onClick={this.handleclick}>9</button>
//
//         <button name='-' onClick={this.handleOperator}>-</button>
//
//         <button value='4' onClick={this.handleclick}>4</button>
//         <button value='5' onClick={this.handleclick}>5</button>
//         <button value='6' onClick={this.handleclick}>6</button>
//
//         <button name='+' onClick={this.handleOperator}>+</button>
//
//         <button value='1' onClick={this.handleclick}>1</button>
//         <button value='2' onClick={this.handleclick}>2</button>
//         <button value='3' onClick={this.handleclick}>3</button>
//
//         <button onClick={this.handleResult}>=</button>
//         <button value='0' onClick={this.handleclick}>0</button>
//         <button value='.' onClick={this.handleDot}>.</button>
//       </>
//
//     )
//   }
// } // end of class


// his.setState({countTwo:null})

// export default Calculator;
