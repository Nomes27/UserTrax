import React from "react";

import { Link } from "@reach/router";

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
                <tr key={row.id} className="users_table_row">
                  <td className="users_table_field">
                    <Link to={`users/${row.id}`} className="users_table_link">
                      {" "}
                      {row.name}
                    </Link>
                  </td>

                  <td className="users_table_field">
                    {" "}
                    <Link to={`users/${row.id}`} className="users_table_link">
                      {row.username}
                    </Link>
                  </td>
                  <td className="users_table_field">
                    {" "}
                    <Link to={`users/${row.id}`} className="users_table_link">
                      {row.email}
                    </Link>
                  </td>
                  <td className="users_table_field">
                    {" "}
                    <Link to={`users/${row.id}`} className="users_table_link">
                      {row.company.name}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to="/users/create">
          <button className="users_table_button">Add User</button>
        </Link>
      </div>
    );
  }
}

export default UsersList;
