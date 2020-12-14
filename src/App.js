import "./App.css";
import React from "react";
import { Router, Link } from "@reach/router";
import UsersList from "./Pages/usersList";
import User from "./Pages/user";
class App extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json(); //promise
      })
      .then((json) => {
        this.setState({ users: [...json] });
      });
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header"></header>
        <h1>homepage</h1>
        <Router>
          <UsersList path="/" />
          <User path="users/:user_id"></User>
        </Router>
      </div>
    );
  }
}

export default App;

/*


homepage    /     list of all users and option to create new user
user page     /:user_id   individual user (on this page can see all posts, option to delete user). option to creat new post
*/
