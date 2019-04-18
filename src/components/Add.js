import React from "react";
import Form from "./Form";

const Add = props => (
  <div className="container">
    <div className="row form-section">
      <Form sendBook={props.sendBook} />
    </div>
  </div>
);

export default Add;
