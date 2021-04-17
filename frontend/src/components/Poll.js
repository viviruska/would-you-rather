import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
  toPollDetail = (e, id, status) => {
    console.log(status)
    // TODO: redirect to details view of the poll
  }

  render() {
    const { id, poll, author, status } = this.props;

    if (poll === null) {
      return <p>This poll doesn't exist</p>
    }

    const { optionOne} = poll
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
            <button 
              className='view-poll-btn'
              onClick={(e) => this.toPollDetail(e, id, status)}
            >
              View Poll
            </button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ polls, users }, { id, status }) {
  const poll = polls[id]
  const author = poll ? users[poll.author] : null

  return {
    poll: poll,  // TODO: formatPoll?
    author: author,
    status: status
  }
}

export default connect(mapStateToProps)(Poll)