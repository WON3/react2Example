import React, { Component } from 'react';
import './App.css';

import Login from './Views/Login/Login';
import Home from './Views/Home/Home'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password:'',
      loginDisplay:'block',
      homeDisplay:'none'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Keeps track of what the user types
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //Keeps track of when the user submits the form.
  handleSubmit(e){
    e.preventDefault()
    if(this.state.email && this.state.password){
      this.setState({
        loginDisplay:'none',
        homeDisplay:'block'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Login loginDisplay={this.state.loginDisplay} handleSubmit={this.handleSubmit}  password={this.state.password} email={this.state.email} handleChange={this.handleChange} />
        <Home homeDisplay={this.state.homeDisplay}  password={this.state.password} email={this.state.email}/>
      </div>
    );
  }
}

export default App;
