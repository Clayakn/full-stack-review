import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { login } from '../../redux/reducer';

class Profile extends Component {

  componentDidMount(){
    axios.get('/api/profile').then(response => {
      this.props.login(response.data);
    }).catch(error => {
      console.log('Axios error GET /api/profile', error)
    })
  }

  render() {
    return (
      <div className='profile'>
        <h1>Profile</h1>
        {this.props.user 
        ? <div>
            <div>Name: {this.props.user.name}</div>
            <div>Email: {this.props.user.email}</div>
            <div>
              <img src={this.props.user.picture_url} alt='Profile'/>
            </div>
          </div>
        : <div> Loading...</div> 
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state 
  return {
    user
  }
}

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);