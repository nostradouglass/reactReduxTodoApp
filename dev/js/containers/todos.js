import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux' 
import { removeTodo }from '../actions/index'

class Todos extends Component {
    constructor(props) {
        super(props)
        this.mapTodos = this.mapTodos.bind(this);
    }
    
    mapTodos() {
        return this.props.todos.map((item) => {
            return <li className="list-group-item" key={item.id}>
                                   <span> {item.todo}</span>
                            <div className="pull-right action-buttons">
                                <a href="#"><span className="glyphicon glyphicon-pencil"></span></a>
                                <a href="#" className="trash"><span className="glyphicon glyphicon-trash" onClick={() => {this.props.removeTodo(item.id)}}></span></a>
                                <a href="#" className="flag"><span className="glyphicon glyphicon-flag"></span></a>
                            </div>
                        </li>
        })
    }

    render() {
        return (
            <ul className="list-group">
           {this.mapTodos()}
           </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);