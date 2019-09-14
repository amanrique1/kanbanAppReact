import React, { Component } from 'react';
import './Styles.css';

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tittle:props.task.tittle,
            description:props.task.description,
            index:props.index
        };
        this.deleteMe=this.deleteMe.bind(this);
    }
    deleteMe(){
        this.props.remove(this.state.index)
    }

    render() {
        return (
                <div className="card bg-light mb-3">
                    <div className="card-header text-left">{this.state.tittle}</div>
                    <div className="card-body">
                        <p className="card-text">{this.state.description}</p>
                        <div id="btnDone"> <button onClick={this.deleteMe} type="button" id="doneButton" className="btn btn-primary">Done</button></div>
                    </div>
                </div>
        );
    }
}

export default Task;