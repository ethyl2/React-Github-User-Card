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
      lookupMessage: ''
    }
  }

  submitUser = (event)  => {
    event.preventDefault();
    let submittedUser = event.target.newUser.value;
    console.log('in submitUser');
    console.log(submittedUser);
    //console.log(event.target.newUser.value);
    this.setState({...this.state, username: submittedUser});
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      console.log('in componentDidUpdate');
      axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(response => {
        //console.log(response);
        this.setState({...this.state, lookupMessage: 'Found user'});
        this.setState({...this.state, user: response.data})
      })
      .catch(err => {
        console.log(err)
        this.setState({...this.state, lookupMessage: "Didn't find user. Check your username to make sure it is correct."});
      });

      axios.get(`https://api.github.com/users/${this.state.username}/followers`)
        .then(response => {
          //console.log(response);
          this.setState({...this.state, followers: response.data})
        })
        .catch(err => console.log(err));
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

        <form onSubmit={this.submitUser}>
          <label htmlFor='newUser'>Get GitHub User: </label>
          <input type='text' name='newUser' id='newUser' placeholder='github username' />
          <button type='submit'>Get User</button>
        </form>
        <p>{this.state.lookupMessage}</p>

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
