import React from "react";
import Listitem from "./Listitem";
import { fetchBooks } from "./../utils/api";

class List extends React.Component {
  state = {
    books: []
  };

  getBooks() {
    fetchBooks().then(response => {
      let status = response.status;
      let data = response.data;
      console.log("Status: " + status);
      this.setState({ books: data });
    });
  }

  componentDidMount = () => {
    console.log("Get books...");
    this.getBooks();
  };

  updateList() {
    this.getBooks();
    this.forceUpdate();
  }

  render() {
    return (
      <div className="col-12">
        <ul className="list-group">
          {this.state.books.map(book => {
            return (
              <Listitem
                book={book}
                key={book.id}
                updateCallBack={this.updateList.bind(this)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
