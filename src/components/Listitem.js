import React from "react";
import { removeBook, updateBook } from "../utils/api";

const inputStyle = {
  width: "400px"
};

class Listitem extends React.Component {
  state = {
    isEditing: false
  };

  deleteBook() {
    removeBook(this.props.book.id).then(response => {
      this.props.updateCallBack();
      console.log("Delete book...");
    });
  }

  editBook() {
    this.setState({ isEditing: true });
    this.forceUpdate();
    console.log("Update book...");
  }

  saveBook() {
    this.setState({ isEditing: false });
    updateBook(
      this.props.book.id,
      this.refs.titleInput.value,
      this.refs.authorInput.value
    ).then(response => {
      this.props.updateCallBack();
    });
  }

  render() {
    return this.state.isEditing ? (
      <li className="list-item list-group-item d-flex align-items-center">
        <input
          type="text"
          placeholder={this.props.book.title}
          ref="titleInput"
          className="form-control"
          style={inputStyle}
        />
        <input
          type="text"
          placeholder={this.props.book.author}
          ref="authorInput"
          className="form-control"
          style={inputStyle}
        />

        <div className="buttons">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.saveBook.bind(this)}
          >
            Spara
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.deleteBook.bind(this)}
          >
            Ta bort
          </button>
        </div>
      </li>
    ) : (
      <li className="list-item list-group-item d-flex align-items-center">
        <strong className="title">{this.props.book.title}</strong>

        <div className="author">{this.props.book.author}</div>

        <div className="buttons">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.editBook.bind(this)}
          >
            Editera
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.deleteBook.bind(this)}
          >
            Ta bort
          </button>
        </div>
      </li>
    );
  }
}

export default Listitem;
