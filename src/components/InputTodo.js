import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: "",
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title)
      this.setState({
        title: "",
      })
    } else {
      alert("please input a task")
    }
    this.props.addTodoProps(this.state.title)
    this.setState({
      title: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          className="text-input"
          name="title"
          value={this.state.title}
          onChange={this.onChange} />
        <button className="submit-input">Submit</button>
      </form>
    )
  }
}

export default InputTodo;
