import React, { Component } from 'react';
import './App.css';
import Task from './Task';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      task: ''
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick(){
    this.setState({data: [...this.state.data, this.state.task], task: ''})
  }

  render() {
    return (
      <div className="main-container">
        <p className="task-text" >Task:</p>
        <div className="task-adder" >
          <input name="task" onChange={(e) => this.handleChange(e)} value={this.state.task} type="text" />
          <button onClick={() => this.handleClick()} className="add-btn" >Add</button>
        </div>
        {this.state.data.map((task, index) => {
          return (<Task number={index} taskName={task} />)
        })}
      </div>
    );
  }
}

export default App;
