import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
  render() {
    console.log(this.props)
    const { id, poll, author } = this.props;

    return (
      <div className='poll-item'>
        <div className='poll-header'>
          <span className='header-text'>{author.name} asks:</span>
        </div>
        <div>{author.avatarURL}</div>
        <div>View Poll button</div>
        {id}
      </div>
    )
  }
}

function mapStateToProps({ polls, users }, { id }) {
  const poll = polls[id]
  const author = users[poll.author]

  return {
    poll: poll,  // formatPoll?
    author: author
  }
}

export default connect(mapStateToProps)(Poll)