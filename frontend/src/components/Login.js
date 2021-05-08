import React, { Component } from "react";
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    selectedUser: ''
  }

  handleChange = (e, data) => {
    this.setState({ selectedUser: data.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { dispatch } = this.props;
    dispatch(setAuthedUser(this.state.selectedUser))
  }

  render() {
    const { users } = this.props

    return (
      <div className='poll-item-2'>
        <div className='new-poll-header'>
          <div className='login-header-text'>Welcome to the Would You Rather app!</div>
          <div className='login-header-text-2'>Please sign in to continue</div>
        </div>
        <div className=''>
          <img 
            src={'/img/mici.jpeg'}
            className='login-img'
            alt='logo'
          />
          <div className='login-text'>Sign in</div>
          <form className='sign-in-form' onSubmit={(e) => this.handleSubmit(e)}>
          <Dropdown
            placeholder='Select User'
            fluid
            selection
            options={users}
            onChange={this.handleChange} 
          />
            <button
              className='new-poll-btn' 
              style={{ padding: '10px 275px'}}
              >
                Submit
              </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const usersOptions = Object.values(users)
  const usersArray = []
  usersOptions.forEach(user => {
    usersArray.push({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    })
  });

  return {
    users: usersArray
  }
}

export default connect(mapStateToProps)(Login)