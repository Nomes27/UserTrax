import "./App.css";
import React from "react";
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
        <table className="users_table">
          <tr>
            <th className="users_table_header">Name</th>
            <th className="users_table_header">Username</th>
            <th className="users_table_header">Email</th>
            <th className="users_table_header">Company</th>
          </tr>
          {this.state.users.map((row) => {
            return (
              <tr>
                <td className="users_table_row">{row.name}</td>
                <td className="users_table_row">{row.username}</td>
                <td className="users_table_row">{row.email}</td>
                <td className="users_table_row">{row.company.name}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;

/*


homepage    /     list of all users and option to create new user
user page     /:user_id   individual user (on this page can see all posts, option to delete user). option to creat new post
*/
