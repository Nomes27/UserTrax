import React from "react";
class User extends React.Component {
  state = {
    user: {},
    posts: [],
  };

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.user_id}`)
      .then((response) => {
        return response.json(); //promise
      })
      .then((json) => {
        this.setState({ user: json });
      });
    fetch(
      `https://jsonplaceholder.typicode.com/users/${this.props.user_id}/posts`
    )
      .then((response) => {
        return response.json(); //promise
      })
      .then((json) => {
        this.setState({ posts: json });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>user info here...</p>
      </div>
    );
  }
}

export default User;
