import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Home page
        <div>
          <h3>Unanswered</h3>
          <ul>
            {this.props.unansweredPollIds.map((pollId) => (
              <li key={pollId}>
                {pollId}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Answered</h3>
          <ul>
            {this.props.answeredPollIds.map((pollId) => (
              <li key={pollId}>
                {pollId}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ polls, users, authedUser}) {
  const pollIds = Object.keys(polls)
    .sort((a,b) => polls[b].timestamp - polls[a].timestamp)

  const userAnswers = users[authedUser].answers

  return {
    unansweredPollIds: pollIds.filter((pollId) => !(pollId in userAnswers)),
    answeredPollIds: pollIds.filter((pollId) => pollId in userAnswers),
  }     
  }


export default connect(mapStateToProps)(Home)