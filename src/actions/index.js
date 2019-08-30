export const incrementOne = () => {
  return {
    type: 'INCREMENT_ONE'
  }
};

export const decrementOne = () => {
  return {
    type: 'DECREMENT_ONE'
  }
};

export const incrementTwo = () => {
  return {
    type: 'INCREMENT_TWO'
  }
};

export const decrementTwo = () => {
  return {
    type: 'DECREMENT_TWO'
  }
};

export const updateCounter = (counter) => {
  return {
    type: 'UPDATE_COUNTER',
    counter
  }
}