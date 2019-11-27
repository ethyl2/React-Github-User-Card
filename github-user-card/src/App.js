import React , { Component } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';


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
        <h2 className='subheading'>Followers:</h2> 
        {this.state.followers.map(follower => {
          return (
            <FollowerCard user={follower} key={follower.id} />
            )
          }
        )}
      </div>
    );
  }
}

export default App;
