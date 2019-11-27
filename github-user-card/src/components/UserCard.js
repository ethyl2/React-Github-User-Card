import React, {Component} from 'react';

class UserCard extends Component {
    
    render() {
        return (
            <div className='card'>
                <div className='imgContainer'>
                    <img src={this.props.user.avatar_url} alt='bio pic' />
                </div>
                <header>
                    {this.props.user.name? <h2>{this.props.user.name}</h2> : null}
                    <h3>{this.props.user.login}</h3> 
                    {this.props.user.bio? <p>{this.props.user.bio}</p> : null}
                    {this.props.user.company? <p>{this.state.user.company}</p>: null}
                    {this.props.user.location? <p>Location: {this.props.user.location}</p> : null}
                </header>
                <div className='cardBody'>
                    <a href={this.props.user.url}>{this.props.user.url}</a>
                    <a href={this.props.user.blog}>{this.props.user.blog}</a>
                    {this.props.user.email? <p>{this.props.user.email}</p>: null}
                    {this.props.user.followers? <p>Followers: {this.props.user.followers}</p> : null}
                    {this.props.user.following? <p>Following: {this.props.user.following}</p> : null}
                    <p> {this.props.user.hireable? 'Hireable: yes': null}</p>
                </div>
            </div>
        )
    }
}
export default UserCard;