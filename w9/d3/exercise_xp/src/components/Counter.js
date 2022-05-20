import React from 'react';
import {connect} from 'react-redux';
import {increase,decrease} from '../redux/actions';
import thunk from 'redux-thunk';


class Counter extends React.Component {



  incrementIfOdd = () => {
      const {count} = this.props;
      if (count % 2 !== 0) {
        this.props.handleIncrease(count)

      } else {
        return count
      }
    }



    incrementAsync = (dispatch) => {
      const {count,handleIncrease} = this.props;
      return dispatch => {
              setTimeout(() => {
                  console.log("setTimeout")
                  dispatch(handleIncrease(count))
              }, 3000);
          };




    }



    render () {
      return (
        <div>
          <button onClick={this.props.handleIncrease}>+</button><br/>
          <button onClick={this.props.handleDecrease}>-</button>
          <p>{this.props.count}</p>
          <button onClick={this.incrementIfOdd}>Increment if odd </button><br/>
          <button onClick={this.incrementAsync}>Increment Async</button>


        </div>
        )


    }




} // end of class



const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrease: () => dispatch(increase()),
    handleDecrease: () => dispatch(decrease())

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);



// return dispatch => {
//         setTimeout(() => {
//             console.log("setTimeout")
//             dispatch(handleIncrease(count))
//         }, 3000);
//     };


// 3. In the src folder, create a subfolder named components containing a Counter.js file.
// Render the value that will be incremented and decremented
// Add a + button to increment the counter by 1, by dispatching an INCREMENT type action, using a reducer case.
// Add a - button to decrease the counter by 1, by dispatching an DECREMENT type action, using a `reducer`` case

// 4. Add a button which will only increment the counter by 1 if the current value is an odd number, calling a new
// function named incrementIfOdd. Create the incrementIfOdd function in the Counter.js file.
