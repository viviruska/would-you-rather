import React, { Component } from "react";
import { connect } from 'react-redux'


class User extends Component {
  render() {

    const {name, avatarURL, answers, questions} = this.props.user
    return (
      <div className='poll-item user-container'>
        <img 
          src={avatarURL}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div className='user-data'>
          <div className='divider'></div>
          <div>Answered questions  {Object.values(answers).length}</div>
          <div>Created questions  {questions.length}</div>
        </div>
        <div className='score'>
          <div>score</div>
          <div>score2</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users}, { id }) {
  return {
    user: users[id]
  }
}

export default connect(mapStateToProps)(User)