import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  render() {
    const { dispatch, authedUser } = this.props
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        {(authedUser)
          ? <li>
              <div>Welcome, {authedUser}</div>
              <img src=''/>
            </li>
          : ''
        }
        {(authedUser) 
          ? <li>
              <NavLink 
                to='/' 
                activeClassName='active'
                onClick={() => dispatch(removeAuthedUser())}
              >
                Logout
              </NavLink>
            </li>
          : ''
        }
      </ul>
    </nav>
  )
}
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Nav)