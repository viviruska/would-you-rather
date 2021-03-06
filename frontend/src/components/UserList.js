import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class UserList extends Component {

  render() {
    return (
      <div className='polls-container'>
        <ul className='poll-un-list'>
          {this.props.users.map((user) => (
            <li className='li2' key={user.id}>
              <User id={user.id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const sortedUsers = Object.values(users).sort(
    function (a,b) { return (
      (Object.values(b.answers).length + b.questions.length)-(Object.values(a.answers).length + a.questions.length)
    )
    })

  return {
    users: sortedUsers
  }
}

export default connect(mapStateToProps)(UserList)