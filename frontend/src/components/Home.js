import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  state = {
    'activeTab': 'unanswered'
  }

  render() {
    console.log(this.props)
    return (
      <div className='container'>
        <div 
          className='header-left' 
          style={{backgroundColor: this.state.activeTab === 'unanswered' ? '#e2e2e2' : 'white'}}
          onClick={() => this.setState({activeTab: 'unanswered'})}
        >
            Unanswered
        </div>
        <div 
          className='header-right' 
          style={{backgroundColor: this.state.activeTab === 'answered' ? '#e2e2e2' : 'white'}}
          onClick={() => this.setState({activeTab: 'answered'})}
        >
          Answered
        </div>
        <div className='poll-container'>
          {this.state.activeTab === 'unanswered'
          ? <ul>
              {this.props.unansweredPollIds.map((pollId) => (
                <li key={pollId}>
                  {pollId}
                </li>
              ))}
            </ul>
          : <ul>
              {this.props.answeredPollIds.map((pollId) => (
                <li key={pollId}>
                  {pollId}
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