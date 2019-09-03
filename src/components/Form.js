import React, { Component } from "react";
import { useDispatch, connect } from 'react-redux';
import { incrementOne, decrementOne, incrementTwo, decrementTwo, updateCounter } from '../actions'
import Count from './Count'
import Submit from './Submit'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      one: 0,
      two: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState(
      {[e.target.name]: e.target.value}
    )
  }

  handleSubmit(e) {
    this.props.updater(this.state)
    alert(`one: ${this.state.one} two: ${this.state.two}`);
  }

  render() {
    return (
      <div className="Welcome">
        <h1>Welcome</h1>
        <input type="number" name='one' value={this.state.one} onChange={this.handleChange}/>
        <input type="number" name='two' value={this.state.two} onChange={this.handleChange}/>
        <Count one={this.state.one} two={this.state.two}></Count>
        <Submit state={this.state}></Submit>
      </div>
    );
  }
}
        // <button onClick={this.handleSubmit}>Submit</button>
const mapStateToProps = (state) => {
  return {
    one: state.one,
    two: state.two
  }
}

export default connect(mapStateToProps, null)(Welcome);
// export default Welcome;