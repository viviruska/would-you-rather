import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  render() {
    const { dispatch, authedUser } = this.props
    const { name, avatarURL } = authedUser;
  return (
    // TODO: remove style
    <div style={{marginTop: '20px', marginBottom: '20px'}}>
    <nav>
      <ul className='ui teal tabular menu'>
        <li>
          <NavLink to='/' exact activeClassName='active item'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='item' >
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='item'>
            Leaderboard
          </NavLink>
        </li>
        <div className='right menu'>
        {(authedUser)
          ? <li>
            <div className='table'>
              <img src={avatarURL} className='small-avatar'/>
              <div className='table-row'>Welcome, {name}</div>
              </div>
            </li>
          : ''
        }
        {(authedUser) 
          ? <li>
              <NavLink 
                to='/' exact
                activeClassName='item'
                onClick={() => dispatch(removeAuthedUser())}
              >
                Logout
              </NavLink>
            </li>
          : ''
        }</div>
      </ul>
    </nav>
    </div>
  )
}
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser ? users[authedUser] : ''
  }
}

export default connect(mapStateToProps)(Nav)