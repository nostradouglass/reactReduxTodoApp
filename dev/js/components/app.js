import React, { Component }from 'react';
import SearchBar from '../containers/searchbar';
import TodoList from '../containers/todoList';

require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('../../scss/styles.scss')

export default class App extends Component{
    render() {
        return (
            <div>

    <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
        <h3>React-Redux Simple Todo App.</h3>
    </div>
  </div>
</nav>

            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    </div>
                    <div className="col-xs-10 col-sm-6 col-md-5 col-lg-4">
                        <SearchBar />
                        <br />
                        <br />  
                        <TodoList />
                    </div>
                    <div className="col-xs-0 col-sm-4 col-md-5 col-lg-6">
                        
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    </div>
                </div>
            </div>
            
            
            </div>
        )
    }
}