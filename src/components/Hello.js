import React, { Component } from "react";
import { useDispatch } from 'react-redux';
import { incrementOne, decrementOne, incrementTwo, decrementTwo, updateCounter } from '../actions'
import Form from './Form'

function Submit(props) {
  const dispatch = useDispatch();
  const { state } = props
  return (
    <Form updater={(state) => dispatch(updateCounter(state))}></Form>
  );
}

export default Submit;
