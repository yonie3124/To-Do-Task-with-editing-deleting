import React, { Component } from 'react';

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      description: ''   
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task, this.state.description);
    this.setState({ task: '',
                    description: ''                    
  });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder='Enter Item'
          value={this.state.task}
          name='task'
          onChange={this.handleChange}
          autoFocus ></input>           
        <input
          type="text"
          name='description'
          placeholder='Item Description'
          value={this.state.description}
          onChange={this.handleChange}
          autoFocus ></input>        
        
        <button class="add" type="submit">
          Add
        </button>
      </form>
    );
  }
}