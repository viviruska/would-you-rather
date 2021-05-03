import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class UserList extends Component {

  render() {
    console.log('----------USERS--------')
    console.log(this.props)

    return (
      <div className='polls-container'>
        <ul className='poll-un-list'>
          {this.props.users.map((user) => (
            <li key={user.id}>
              <User id={user.id} />
            </li>
          ))}
        </ul>
        Leaderboard
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
  console.log(sortedUsers)

  return {
    users: sortedUsers
  }
}

export default connect(mapStateToProps)(UserList)