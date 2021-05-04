import React, { Component } from "react";
import { connect } from 'react-redux'


class User extends Component {
  render() {

    const {name, avatarURL, answers, questions} = this.props.user
    const result = Object.values(answers).length + questions.length
    return (
      <div className='poll-item user-container'>
        <img 
          src={avatarURL}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div>
          <div className='divider-horizontal-1'></div>
          <div className='new-poll-text-2 lower'>{name}</div>
          <div className='score-per-type'>
            <div className='score-text'>Answered questions</div>
            <div className='score-text'>{Object.values(answers).length}</div>
          </div>
          <hr/>
          <div className='score-per-type'>
            <div className='score-text'>Created questions</div>
            <div className='score-text'>{questions.length}</div>
          </div>
        </div>
        <div>
          <div className='divider-horizontal-2'></div>
          <div className='score-sum-container'>
            <div className='poll-header'>
              <span className='poll-header-text'>Score</span>
            </div>
            <div className='score-sum'>
              <div className='score-circle'>{result}</div>
            </div>
          </div>
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