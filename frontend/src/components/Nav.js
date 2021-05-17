import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = ( e, { name } ) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { dispatch, authedUser } = this.props
    const { name, avatarURL } = authedUser;
    const { activeItem } = this.state
  
    return (
      <div style={{marginTop: '20px', marginBottom: '20px'}}>
      <Menu tabular>
        <Menu.Item
          as={Link}
          to='/' exact 
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/add' 
          name='add'
          active={activeItem === 'add'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/leaderboard'
          name='leaderboard'
          active={activeItem === 'leaderboard'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
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
            ? <Menu.Item
                as={Link}
                to='/'
                name='log out'
                active={activeItem === 'log out'}
                onClick={() => dispatch(removeAuthedUser())}
              /> : ''
          }
        </Menu.Menu>
      </Menu>
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