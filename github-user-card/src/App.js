import React , { Component } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';


class App extends Component {
  constructor() {
    super();
    this.state = {
      username: 'ethyl2',
      user: [],
      followers: [],
    }
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(response => {
      //console.log(response);
      this.setState({...this.state, user: response.data})
    })
    .catch(err => console.log(err));

    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(response => {
        //console.log(response);
        this.setState({...this.state, followers: response.data})
        this.state.followers.forEach(follower => {
          //console.log(follower.login);
          axios.get(`https://api.github.com/users/${follower.login}`)
          .then(response => {
            //console.log(response);
            this.setState({...this.state, [follower.login]: response.data})
          })
          .catch(err => console.log(err))
        })   
      })
      .catch(err => console.log(err));
  }

  render() {
    //console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub Users</h1>
        </header>
        <UserCard user={this.state.user} />
        <h2>Followers:</h2> 
        {this.state.followers.map(follower => {
          return (
            <UserCard user={follower} key={follower.id} />
            )
          }
        )}
      </div>
    );
  }
}

export default App;
