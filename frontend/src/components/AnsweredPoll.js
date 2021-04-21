import React, { Component } from 'react'
import { connect } from 'react-redux'

class AnsweredPoll extends Component {

  render() {
    const { poll, author, id } = this.props;
    const { optionOne, optionTwo } = poll
    const { name, avatarURL } = author

    const numOfOptionOneVotes = optionOne.votes.length
    const numOfOptionTwoVotes = optionTwo.votes.length
    const sumOfVotes = numOfOptionOneVotes + numOfOptionTwoVotes
    const oneRatio = sumOfVotes > 0 ? Math.round((numOfOptionOneVotes/sumOfVotes) * 100) : 0
    const twoRatio = sumOfVotes > 0 ? Math.round((numOfOptionTwoVotes/sumOfVotes) * 100) : 0

    return (
      <div className='poll-item'>
        <div className='poll-header'>
          <span className='poll-header-text'>{name} asks:</span>
        </div>
        <div className='poll-container'>
          <img
            src={avatarURL}
            alt={`Avatar of ${name}`}
            className='avatar-result'
          />
          <div className='poll-info'>
            <div className='divider-result'></div>
            <span className='poll-text-result'>Results: </span>
            <div className='result-container'>
              <span className='result-text'>
                Would you rather { optionOne.text }
              </span>
              <progress id="progressBar" max="100" value={oneRatio}></progress>
              <div className='result-text'>{numOfOptionOneVotes} out of {sumOfVotes} votes</div>
            </div>
            <div className='result-container'>
              <span className='result-text'>
                Would you rather { optionTwo.text }
              </span>
              <progress id="progressBar" max="100" value={twoRatio}></progress>
              <div className='result-text'>{numOfOptionTwoVotes} out of {sumOfVotes} votes</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ polls, users, authedUser }, { id }) {
  const poll = polls[id]
  const author = poll ? users[poll.author] : null

  return {
    poll,
    author
  }
}

export default connect(mapStateToProps)(AnsweredPoll)