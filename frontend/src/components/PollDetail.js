import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredPoll from './UnansweredPoll'
import AnsweredPoll from './AnsweredPoll'

class PollDetail extends Component {
  render() {
    const { status, id } = this.props;

    if (id === null) {
        return <p>This poll doesn't exist</p>  // TODO: nice 404 page
      }

    return (
      <div>
        {status === 'unanswered'
          ? <UnansweredPoll id={id}/>
          : <AnsweredPoll id={id}/>
        }
      </div>
    )
  }
}

function mapStateToProps({ polls, users, authedUser }, ownProps) {
  const pollId = ownProps.match.params.question_id
  const poll = polls[pollId]
  const userAnswers = users[authedUser].answers
  const status = pollId in userAnswers ? 'answered' : 'unanswered'

  return {
    status,
    id: poll ? pollId : null
  }
}

export default connect(mapStateToProps)(PollDetail)