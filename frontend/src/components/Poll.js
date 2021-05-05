import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Poll extends Component {
  toPollDetail = (e, id) => {
    // e.preventDefault()
    this.props.history.push(`/questions/${id}`)
  }

  render() {
    const { id, poll, author } = this.props;

    const { optionOne} = poll
    const { name, avatarURL } = author

    return (
      <div className='poll-item'>
        <div className='poll-header'>
          <span className='poll-header-text'>{name} asks:</span>
        </div>
        <div className='poll-container'>
          <img 
            src={avatarURL}
            alt={`Avatar of ${name}`}
            className='avatar'
          />
          <div className='poll-info'>
            <div className='dividerm'></div>
            <span className='poll-text general'>Would you rather</span>
            <span className='poll-text'>{ `...${optionOne.text}...` }</span>
            <button 
              className='view-poll-btn'
              onClick={(e) => this.toPollDetail(e, id)}
            >
              View Poll
            </button>
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
    poll: poll,  // TODO: formatPoll?
    author: author
  }
}

export default withRouter(connect(mapStateToProps)(Poll))