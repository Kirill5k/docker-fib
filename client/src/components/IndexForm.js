import React, { Component } from "react";
import PropTypes from "prop-types";

export default class IndexForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    index: ""
  };

  updateInputValue = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = (event) => {
    event.preventDefault();
    const { index } = this.state;
    if (Number(index)) {
      this.props.onSubmit(index).then(() => this.setState({ index: "" }));
    }
  };

  render() {
    const { index } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="index-input">Enter your index:</label>
          <input
            id="index-input"
            name="index"
            type="number"
            value={index}
            onChange={this.updateInputValue}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
