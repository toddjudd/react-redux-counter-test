import React, { Component } from "react";
import { useSelector } from 'react-redux'

function Count() {
  const counter = useSelector(state => state.counter)
  return (
    <div className="Count">
      {counter.one}
      {counter.two}
    </div>
  );
}

export default Count;
