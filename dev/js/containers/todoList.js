import React, { Component } from 'react';
import Todos from '../containers/todos'


class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <span className="glyphicon glyphicon-list"></span>To Do List Items
                                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        <Todos />
                    </ul>
                </div>
                <div className="panel-footer">
                    <span>Footer</span>
                </div>
            </div>




        )
    }
}



export default TodoList