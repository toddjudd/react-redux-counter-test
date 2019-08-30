import React, { Component } from "react";
import { useDispatch } from 'react-redux';
import { incrementOne, decrementOne, incrementTwo, decrementTwo, updateCounter } from '../actions'

function Modify() {
  const dispatch = useDispatch();
  return (
    <div className="Modify">
      <button onClick={() => dispatch(incrementOne())}>Add to Count One</button>
      <button onClick={() => dispatch(decrementOne())}>Subtrat From Count One</button>
      <button onClick={() => dispatch(incrementTwo())}>Add to Count Two</button>
      <button onClick={() => dispatch(decrementTwo())}>Subtrat From Count Two</button>
      <input type="number" name='one'/>
      <input type="number" name='two'/>
      <button onClick={() => dispatch(updateCounter({one:10, two:55}))}>Submit</button>
    </div>
  );
}

export default Modify;
