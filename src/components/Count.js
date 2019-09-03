import React, { Component } from "react";
import { useSelector } from 'react-redux'

function Count(props) {
  const counter = useSelector(state => state.counter)
  return (
    <div className="Count">
      Counter one: {counter.one}
      <br/>
      Counter two: {counter.two}
      <br/>
      State one: {props.one}
      <br/>
      State two: {props.two}
    </div>
  );
}

export default Count;
