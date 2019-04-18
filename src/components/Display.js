import React from "react";
import List from "./List";

class Display extends React.Component {
  render() {
    return (
      <div className="display-books">
        <div className="container">
          <List />
        </div>
      </div>
    );
  }
}

export default Display;
