import React from 'react';
import {increase,decrease} from '../redux/actions.js';
import {connect} from 'react-redux';



class Counter extends React.Component {




  render () {
    return (
      <div>
        <button onClick={this.props.increase}>+</button>
        <p>Count   {this.props.count}</p>
        <button onClick={this.props.decrease}>-</button>

      </div>
    )
  }


} // end of class


const mapStateToProps = (state) => {
  // console.log(state);
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: (e) => dispatch(increase(e.target)),
    decrease: (e) => dispatch(decrease(e.target))
  }
}





export default connect(mapStateToProps,mapDispatchToProps)(Counter);
