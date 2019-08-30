const counterReducer = (state = {one: 1, two: 1}, action) => {
  switch(action.type){
    case 'INCREMENT_ONE':
      return {...state, one:state.one+1} 
    case 'DECREMENT_ONE':
      return {...state, one:state.one-1} 
    case 'INCREMENT_TWO':
      return {...state, two:state.two+1} 
    case 'DECREMENT_TWO':
      return {...state, two:state.two-1} 
    case 'UPDATE_COUNTER':
      return action.counter
    default :
      return state
  }
}

export default counterReducer