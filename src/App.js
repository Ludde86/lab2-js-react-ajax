import React, { Component } from "react";
import Header from "./components/ui/Header/Header";
import Add from "./components/Add";
import Display from "./components/Display";
import { addBook } from "./utils/api";

const API_KEY = "https://www.forverkliga.se/JavaScript/api/crud.php?requestKey";

class App extends Component {
  sendBook = async e => {
    //e.preventDefault();
    console.log("Adding book...");
    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;

    const api_call = await fetch(API_KEY);
    const data = await api_call.json();
    console.log(data);

    addBook(title, author);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Add sendBook={this.sendBook} />
        <Display />
      </div>
    );
  }
}

export default App;
