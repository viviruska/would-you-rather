import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class Home extends Component {
  state = {
    'activeTab': 'unanswered'
  }

  render() {
    const isUnanswered = this.state.activeTab === 'unanswered'
    const isAnswered = this.state.activeTab === 'answered'
    console.log(this.props)

    return (
      <div className='container'>
        <div 
          className='header-left'
          style={{
            backgroundColor: isUnanswered ? '#e2e2e2' : 'white', 
            color: isUnanswered ? 'green' : 'black'
          }}
          onClick={() => this.setState({activeTab: 'unanswered'})}
        >
          <span className='header-text'>Unanswered Questions</span>
        </div>
        <div 
          className='header-right'
          style={{
            backgroundColor: isAnswered ? '#e2e2e2' : 'white',
            color: isAnswered ? 'green' : 'black'
          }}
          onClick={() => this.setState({activeTab: 'answered'})}
        >
          <span className='header-text'>Answered Questions</span>
        </div>
        <div className='polls-container'>
          {isUnanswered
            ? <ul className='poll-un-list'>
                {this.props.unansweredPollIds.map((pollId) => (
                  <li key={pollId}>
                    <Poll id={pollId} />
                  </li>
                ))}
              </ul>
            : <ul className='poll-un-list'>
                {this.props.answeredPollIds.map((pollId) => (
                  <li key={pollId}>
                    <Poll id={pollId} />
                  </li>
                ))}
              </ul>
          }

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