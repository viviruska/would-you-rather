import React, { Component } from "react";
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';

class Login extends Component {
  render() {
    const { users } = this.props

    // only for testing
    const friendOptions = [
        {
          key: 'Jenny Hess',
          text: 'Jenny Hess',
          value: 'Jenny Hess',
          image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
        },
        {
          key: 'Elliot Fu',
          text: 'Elliot Fu',
          value: 'Elliot Fu',
          image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
        },
        {
          key: 'Stevie Feliciano',
          text: 'Stevie Feliciano',
          value: 'Stevie Feliciano',
          image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg' },
        },
        {
          key: 'Christian',
          text: 'Christian',
          value: 'Christian',
          image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg' },
        },
        {
          key: 'Matt',
          text: 'Matt',
          value: 'Matt',
          image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg' },
        },
        {
          key: 'Justen Kitsune',
          text: 'Justen Kitsune',
          value: 'Justen Kitsune',
          image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg' },
        },
    ]

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
          <form>
          <Dropdown
            placeholder='Select User'
            fluid
            selection
            options={friendOptions}
          />
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(Login)