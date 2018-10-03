import React, { Component } from 'react';
import axios from 'axios';
import FeedItem from './FeedItem';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds:[],
    }
  }

  componentWillMount() {
    const { getAccessToken } = this.props.auth;
    const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
    const url = 'http://localhost:4000/courses';
    return axios.get(url, { headers })
      .then( response => this.setState({ feeds: response.data}))
  }

  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {
          !isAuthenticated() && (
            <h4>You are not logged in! Please {' '}
            <a
              style={{ cursor: 'pointer'}}
              onClick={this.login.bind(this)}
              >Log In </a>
              {' '}to continue
            </h4>
          )
        }
        {
          isAuthenticated() && (
            this.state.feeds.map( item => 
              <FeedItem key={item.id} feed={item} />)
          )
        }
      </div>
    )
  }
}


export default Feed; 
