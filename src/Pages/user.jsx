import React from "react";
import avatar from "../images/avatar.png";
import axios from "axios";
class User extends React.Component {
  state = {
    user: {},
    posts: [],
    address: {},
    company: {},
    deleted: false,
  };

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.user_id}`)
      .then((response) => {
        return response.json(); //promise
      })
      .then((json) => {
        console.log(json);
        this.setState({
          user: { ...json, ...json.address },
          address: { ...json.address },
          company: { ...json.company },
        });
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

  deleteUser = (event) => {
    axios
      .delete(
        `https://jsonplaceholder.typicode.com/users/${this.props.user_id}`
      )
      .then(() => {
        console.log("deleted");
        this.setState({ deleted: true });
      });
  };

  render() {
    const user = this.state.user;
    const address = this.state.address;
    const company = this.state.company;
    return (
      <div>
        {this.state.deleted ? (
          <p>This user has been successfully deleted</p>
        ) : (
          <div>
            <section className="user_container">
              <h1>{this.props.name}</h1>
              <img
                src={avatar}
                alt="avatar placeholder"
                className="user_avatar"
              ></img>
              <h2>{user.name}</h2>
              <h3 className="user_subheading">Username</h3>
              <p className="user_detail">{user.username}</p>
              <h4 className="user_subheading">Email</h4>
              <p className="user_detail">{user.email}</p>
              <h4 className="user_subheading">Phone</h4>
              <p className="user_detail">{user.phone}</p>
              <h4 className="user_subheading">Address </h4>
              <p className="user_detail">
                Address: {address.suite}, {address.street}, {address.city},{" "}
                {address.zipcode}
              </p>
              <h4 className="user_subheading">Company</h4>
              <p className="user_detail">
                {company.name}, {company.catchPhrase}, {company.bs}
              </p>

              <button onClick={this.deleteUser}>Delete User</button>
            </section>
            <section className="user_posts_container">
              {this.state.posts.map((post) => {
                return (
                  <section className="user_post" key={post.id}>
                    <h4 className="user_post_subheading">{post.title}</h4>
                    <p>{post.body}</p>
                  </section>
                );
              })}
            </section>
          </div>
        )}
      </div>
    );
  }
}

export default User;
