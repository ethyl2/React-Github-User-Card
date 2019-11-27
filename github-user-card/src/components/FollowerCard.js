import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class FollowerCard extends Component {
    constructor() {
        super();
        this.state= {
            follower: []
        }
    }

    componentDidMount () {
        axios.get(`https://api.github.com/users/${this.props.user.login}`)
        .then(response => {
          //console.log(response);
          this.setState({...this.state, follower: response.data})
        })
        .catch(err=> console.log(err));
    }

    render() { 
        return (
            <UserCard user={this.state.follower} />
        )
    }
}

export default FollowerCard;