import React, { Component } from 'react';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    addTodo(todo){
        if (todo.length > 0) {
            this.props.addTodo(todo);
            this.setState({ value: '' });
        }
    }
    
    render() {
        return (
            <div>
                <input type="text" placeholder="Add Task.." onChange={this.handleChange} />
                <button className="btn btn-primary" onClick={ () => this.addTodo(this.state.value)} >Add Task</button>
            </div>
        );
    }
}

export default TodoInput;