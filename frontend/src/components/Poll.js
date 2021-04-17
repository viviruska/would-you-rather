import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
  render() {
    console.log(this.props)
    const { id, poll, author } = this.props;

    if (poll === null) {
      return <p>This poll doesn't exist</p>
    }

    const { optionOne, optionTwo } = poll
    const { name, avatarURL } = author

    return (
      <div className='poll-item'>
        <div className='poll-header'>
          <span className='poll-header-text'>{name} asks:</span>
        </div>
        <div className='poll-overview'>
          <img 
            src={avatarURL}
            alt={`Avatar of ${name}`}
            className='avatar'
          />
          <div className='poll-info'>
            <div className='divider'></div>
            <span className='poll-text general'>Would you rather</span>
            <span className='poll-text'>{ `...${optionOne.text}...` }</span>
            <button className='view-poll-btn'>View Poll</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ polls, users }, { id }) {
  const poll = polls[id]
  const author = poll ? users[poll.author] : null

  return {
    poll: poll,  // formatPoll?
    author: author
  }
}

export default connect(mapStateToProps)(Poll)