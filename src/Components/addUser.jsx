import React from "react";
import axios from "axios";

class AddUser extends React.Component {
  state = {
    userCreated: false,
  };

  addUser = (event) => {
    event.preventDefault();

    let user = this.state;

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        id: this.props.userscount + 1,
        name: user.name,
        username: user.username,
        email: user.email,
        address: {
          street: user.street,
          suite: user.suite,
          city: user.city,
          zipcode: user.zipcode,
        },
        phone: user.phone,
        wesbite: user.website,
        company: {
          name: user.company,
          catchPhrase: user.catchPhrase,
        },
      })
      .then((response) => {
        console.log("user created");
        console.log(response.data, "reponseeeeeeeeeeeeeeeeeee");
        this.setState({ userCreated: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.addUser} className="adduser_form">
          <label htmlFor="name">Name</label>{" "}
          <input
            id="name"
            name="name"
            type="text"
            onChange={this.handleChange}
            required
          ></input>
          <label htmlFor="username">Username</label>{" "}
          <input
            id="username"
            name="username"
            type="text"
            onChange={this.handleChange}
            required
          ></input>
          <label htmlFor="email">Email</label>{" "}
          <input
            id="email"
            name="email"
            type="text"
            onChange={this.handleChange}
            required
          ></input>
          <label htmlFor="suite">Address (suite)</label>{" "}
          <input
            id="suite"
            name="suite"
            type="text"
            onChange={this.handleChange}
          ></input>
          <label htmlFor="street">Address- street name</label>{" "}
          <input
            id="street"
            name="street"
            type="text"
            onChange={this.handleChange}
          ></input>
          <label htmlFor="city">City</label>{" "}
          <input
            id="city"
            name="city"
            type="text"
            onChange={this.handleChange}
          ></input>
          <label htmlFor="zipcode">Zipcode</label>{" "}
          <input
            id="zipcode"
            name="zipcode"
            type="text"
            onChange={this.handleChange}
          ></input>
          <label htmlFor="zipcode">Phone</label>{" "}
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={this.handleChange}
            required
          ></input>
          <label htmlFor="wesbite">Website</label>{" "}
          <input
            id="website"
            name="website"
            type="text"
            onChange={this.handleChange}
          ></input>
          <label htmlFor="company">Company Name</label>{" "}
          <input
            id="company"
            name="company"
            type="text"
            onChange={this.handleChange}
          ></input>
          <label htmlFor="company-tagline">Company Tagline</label>{" "}
          <input
            id="company-tagline"
            name="catchphrase"
            type="text"
            onChange={this.handleChange}
          ></input>
          <button type="submit">Add User</button>
        </form>
        {this.state.userCreated && <p>User succcessfully created</p>}
      </div>
    );
  }
}

export default AddUser;
