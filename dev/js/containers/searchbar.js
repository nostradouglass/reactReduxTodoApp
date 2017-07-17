import React, {Component} from 'react';
import { connect }from 'react-redux'
import {bindActionCreators} from 'redux'
import {addTodo} from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        this.setState({todo: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({todo: ''});
    }

    render() {
        return (
            <div>
                <h3 className="bg-primary text-center addHeader">Add to Todo's</h3>
            <form onSubmit={this.handleSubmit} className="form-inline">
                <div className="form-group">
                    <div className="input-group">
                <input onChange={this.handleInput} type="text" className="form-control inputTodo" value={this.state.todo}placeholder="Enter a Todo Item..." />
                <span className="input-group-addon addTodoBtn">Add Todo</span>
                </div>
                </div>
            </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTodo }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar); 