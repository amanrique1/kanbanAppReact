import React, { Component } from 'react';

class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tittle: "",
            description: "",
            addFunction: props.addFunction
        };
        this.addMe = this.addMe.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }
    addMe() {
        if (this.state.tittle !== "" && this.state.description !== "") {
            this.state.addFunction({ tittle: this.state.tittle, description: this.state.description });
            alert("Task added");
        }else{
            alert("There's an empty field");
        }
    }
    changeValue(e) {
        if (e.target.id === "tittle") {
            this.setState({
                tittle: e.target.value
            });
        } else {
            this.setState({
                description: e.target.value
            });
        }
    }

    render() {
        return (

            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Task</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Tittle</span>
                            </div>
                            <input id="tittle" type="text" className="form-control" aria-label="tittle" aria-describedby="basic-addon1" value={this.state.tittle} onChange={this.changeValue}></input>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Description</span>
                            </div>
                            <textarea id="description" className="form-control" aria-label="description" value={this.state.description} onChange={this.changeValue}></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.addMe} data-dismiss="modal">Save Task</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask;