import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <Link to='/count'>Count</Link>
        <Link to='/modify'>Modify</Link>
      </div>
    );
  }
}

export default Nav;
