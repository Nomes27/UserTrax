import React from "react";
import Axios from "axios";
class CreatePost extends React.Component {
  state = {
    title: "",
    body: "",
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  sendPost = (event) => {
    event.preventDefault();

    Axios.post(
      `https://jsonplaceholder.typicode.com/users/${this.props.id}/posts`,
      {
        userId: this.props.id,
        id: this.props.postcount + 1,
        title: this.state.title,
        body: this.state.body,
      }
    )
      .then((response) => {
        console.log(response.data);
        console.log("posted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.sendPost} className="post_form">
          <label htmlFor="title">Post Title</label>
          <input
            placeholder="enter your title here"
            name="title"
            id="title"
            className="post_form_input_title"
            onChange={this.handleChange}
          ></input>
          <label>Content</label>
          <input
            placeholder="enter your post here"
            name="body"
            id="body"
            className="post_form_input_body"
            onChange={this.handleChange}
          ></input>
          <button type="submit">Add new post</button>
        </form>
      </div>
    );
  }
}

export default CreatePost;
