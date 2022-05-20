import {INCREMENT,DECREMENT} from './actions.js';


const initState = {
  count:0
}


export const reducer = (state=initState, action={}) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, count:state.count + 1}
    case DECREMENT:
      return {...state, count:state.count - 1}
    default:
      return {...state}

  }
}





// 2. In the src folder, create a subfolder named reducers containing an index.js file. Set the state to zero by default. The state corresponds to the counter to increment.
// Use several switch cases that check the action.type:
// one case to INCREMENT,
// the other one to DECREMENT
