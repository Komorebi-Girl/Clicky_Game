import React from "react";

const Header = props => (
<div className="jumbotron" style={{ width: '100%' }}>
  <h1 className="display-4 text-center">Your score is: {props.children}</h1>
</div>
)

export default Header; 