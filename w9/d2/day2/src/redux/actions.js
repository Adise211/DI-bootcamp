


export const firstName = (fname) => {
  return {
    type:'ADD_FIRST_NAME',
    payload:fname
  }
}

export const secondName = (sname) => {
  return {
    type:'ADD_SECOND_NAME',
    payload:sname
  }
}
