import React from "react";
import AddUser from "../Components/addUser";
import { Router, Link } from "@reach/router";

class UsersList extends React.Component {
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
      <div>
        <table className="users_table">
          <thead>
            <tr>
              <th className="users_table_header">Name</th>
              <th className="users_table_header">Username</th>
              <th className="users_table_header">Email</th>
              <th className="users_table_header">Company</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((row) => {
              return (
                <tr key={row.id}>
                  <td className="users_table_row">
                    <Link to={`users/${row.id}`}> {row.name}</Link>
                  </td>

                  <td className="users_table_row">{row.username}</td>
                  <td className="users_table_row">{row.email}</td>
                  <td className="users_table_row">{row.company.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to="/users/create">
          <button>Add User</button>
        </Link>
      </div>
    );
  }
}

export default UsersList;
