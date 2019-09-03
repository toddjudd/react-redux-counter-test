import React, { Component } from "react";
import { useDispatch } from 'react-redux';
import { incrementOne, decrementOne, incrementTwo, decrementTwo, updateCounter } from '../actions'

function Submit(props) {
  const dispatch = useDispatch();
  const { state } = props
  return (
    <button onClick={() => dispatch(updateCounter(state))}>Submit</button>
  );
}

export default Submit;
