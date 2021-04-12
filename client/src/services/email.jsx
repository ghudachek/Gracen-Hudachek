import emailjs from "emailjs-com";
import React from "react";
import { init } from "emailjs-com";
init("user_XKnCSgkwP4Zd6f9lcfIcw");

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      feedback: "",
    };
  }
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }
  sendMessage(event) {
    event.preventDefault();
    const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      to_name: "ghudachek@gmail.com",
      feedback: this.state.feedback,
    };
    emailjs.send("service_gqlrnwd", "template_4u1kyhr", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        return <p>Success! Message Sent</p>;
      },
      function (error) {
        console.log("FAILED...", error);
        return <p>Message Failed to Send.</p>;
      }
    );
    this.setState({
      name: "",
      email: "",
      feedback: "",
    });
  }
  render() {
    return (
      <div>
        <form
          className="ui form"
          id={this.props.id}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
        >
          <input
            id="name"
            name="name"
            onChange={this.handleInputChange.bind(this)}
            placeholder="your name"
            required
            value={this.state.name}
            style={{ width: "100%" }}
            rows={1}
          />
          <br />
          <input
            id="email"
            name="email"
            onChange={this.handleInputChange.bind(this)}
            placeholder="your email address"
            required
            value={this.state.email}
            style={{ width: "100%" }}
            rows={1}
          />
          <br />
          <textarea
            id="feedback"
            name="feedback"
            onChange={this.handleInputChange.bind(this)}
            placeholder="what would you like to chat about?"
            required
            value={this.state.feedback}
            style={{ width: "100%", height: "250px" }}
          />
          <br />
          <input
            type="button"
            value="Send"
            className="ui button"
            style={{
              fontFamily: "Amatic SC",
              fontSize: "20px",
            }}
            onClick={this.sendMessage.bind(this)}
          />
        </form>
      </div>
    );
  }
}
