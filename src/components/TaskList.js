import React, { Component } from 'react';
import './Styles.css';
import Task from './Task';
import AddTask from './AddTask';

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tittle: props.tskl.tittle,
            tasks: props.tskl.tasks
        };
        this.removeTask = this.removeTask.bind(this);
        this.addTask = this.addTask.bind(this);
    }
    removeTask(index) {
        this.setState(this.state.tasks.splice(index, 1));
    }
    addTask(task) {
        this.setState({
            //Le estoy diciendo que actualice el estado de la app
            tasks: [...this.state.tasks, task]
          });
    }

    render() {
        let todosHTML = this.state.tasks.map((item, i) => {
            return (
                <Task task={item} remove={this.removeTask} key={i} />
            )
        })
        return (
            <div className="card col-md-4">
                <h6 id='myCardTitle'>{this.state.tittle}</h6>
                <div className="card-body">
                    {todosHTML}
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Add Task </button>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <AddTask addFunction={this.addTask} />
                </div>
            </div>
        );
    }
}
export default TaskList;