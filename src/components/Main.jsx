import React from 'react';
import CreateTask from './CreateTask';
import TaskList from './TaskList';

const tasks = [];
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
    };
  }
  createTask = (task, description, date) => {
    if (task.trim() === '' || (description.trim() === '')) {
        alert("fill in the input content)");
        return;
    }
    let copyItems
    copyItems = `${task}, ${description},`
    task = copyItems
    tasks.push({ task, isCompleted: false });
    this.setState({ tasks: tasks });
    
  };
  toggleTask = (taskId) => {
    const taskItem = tasks[taskId];
    taskItem.isCompleted = !taskItem.isCompleted;
    this.setState({ tasks: tasks });
   
  };
  deleteTask = (taskId) => {
    tasks.splice(taskId, 1);
    this.setState({ tasks: tasks });
   
  };
  editTask = (taskId, task) => {
    const taskItem = tasks[taskId];
    taskItem.task = task;
    this.setState({ tasks: tasks });
 
  };
  render() {
    return (
      <div className="main">
        <h1 id='main-title'>Tasks To Do</h1>
        <div className="content">
          <CreateTask createTask={this.createTask} />
        <hr />
          <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask} toggleTask={this.toggleTask}
          />
        </div>
      </div>
    );
  }
}