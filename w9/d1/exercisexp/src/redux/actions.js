
export const increase = (number) => {
  return {
    type:'INCREASE_COUNT',
    payload: number
  }
}


export const decrease = (number) => {
  return {
    type:'DECREASE_COUNT',
    payload: number
  }
}
