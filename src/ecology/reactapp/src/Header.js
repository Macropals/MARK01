import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        {/* <img
          src="https://logrocket-assets.io/img/logo.png"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        /> */}
        <hr />
        <h5>
          <i> Macropals presents</i>
        </h5>
        <h1>Air contamination control system for Foundries</h1>
      </div>
    );
  }
}

export default Header;