import React from "react";

const Form = props => (
  <form onSubmit={props.sendBook} className="book-form col-6">
    <legend>Lägg till dina favoritböcker</legend>
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        id="title"
        aria-describedby="title"
        placeholder="Lägg till titel"
      />

      <input
        type="text"
        className="form-control"
        id="author"
        rows="3"
        data-gramm="true"
        data-txt_gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0"
        data-gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0"
        data-gramm_editor="true"
        placeholder="Lägg till författare"
      />
    </div>
    <button type="submit" className="btn btn-primary btn-lg btn-block">
      Skicka
    </button>
  </form>
);

export default Form;
