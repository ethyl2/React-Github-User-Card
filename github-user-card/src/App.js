import React , { Component } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    }
  }
  componentDidMount() {
    axios.get(' https://api.github.com/users/ethyl2')
    .then(response => {
      console.log(response);
      this.setState({...this.state, user: response.data})
    })
    
    .catch(err => console.log(err));
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Users</h1>
      </header>
      <UserCard user={this.state.user} /> 
    </div>
  );
  }
}

export default App;
