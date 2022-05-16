const initState = {
  fname:'',
  sname:'',
  results: { }
}



export const reducer = (state=initState, action={}) => {
  switch (action.type) {
    case 'ADD_FIRST_NAME':
      return { ...state,results:action.payload} // action.payload -> the new state .. state -> the initState
    case 'ADD_SECOND_NAME':
      return {...state,results:action.payload}
    default:
      return{...state}

  }

}
