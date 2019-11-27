import React, {Component} from 'react';

class UserCard extends Component {
    
    render() {
        return (
            <div className='card'>
                <div className='imgContainer'>
                    <img src={this.props.user.avatar_url} alt='bio pic' />
                </div>
                <header>
                    <h2>{this.props.user.name}</h2>
                    <h3>{this.props.user.login}</h3> 
                    <p>{this.props.user.bio}</p>
                    {this.props.user.company? <p>{this.state.user.company}</p>: null}
                    <p>Location: {this.props.user.location}</p>
                </header>
                <div className='cardBody'>
                    <a href={this.props.user.url}>{this.props.user.url}</a>
                    <a href={this.props.user.blog}>{this.props.user.blog}</a>
                    {this.props.user.email? <p>{this.props.user.email}</p>: null}
                    <p>Followers: {this.props.user.followers}</p>
                    <p>Following: {this.props.user.following}</p>
                    <p>Hireable: {this.props.user.hireable? 'yes': 'no'}</p>
                </div>
            </div>
        )
    }
}
export default UserCard;