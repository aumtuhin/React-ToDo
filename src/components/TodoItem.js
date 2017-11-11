import React, { Component } from 'react';

class TodoItem extends Component {
    removeTodo(){
        this.props.removeTodo(this.props.id);
    }
    render() {
        return (
            <div className="todoWrapper" >
                <button className="removeTodo" onClick={ (e)=> this.removeTodo(this.props.id) } >Remove</button>
                <span>{this.props.todo.text}</span>
            </div>
        );
    }
}

export default TodoItem;