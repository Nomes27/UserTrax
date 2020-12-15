import React from "react";
import { FaUsers } from "react-icons/fa";
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
        <section className="user_total">
          <FaUsers className="fa_icon" alt="user icon" />
          <p>{this.state.users.length} total users</p>
        </section>
        <table className="users_table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((row) => {
              return (
                <tr key={row.id} className="users_table_row">
                  <td>
                    <Link to={`users/${row.id}`} className="users_table_link">
                      {" "}
                      {row.name}
                    </Link>
                  </td>

                  <td>
                    {" "}
                    <Link to={`users/${row.id}`} className="users_table_link">
                      {row.username}
                    </Link>
                  </td>
                  <td>
                    {" "}
                    <Link to={`users/${row.id}`} className="users_table_link">
                      {row.email}
                    </Link>
                  </td>
                  <td>
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
