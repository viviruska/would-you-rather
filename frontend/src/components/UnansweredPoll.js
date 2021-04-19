import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSavePollAnswer } from '../actions/polls'

class UnansweredPoll extends Component {
  state = {
    selectedOption: null
  }

  onValueChange = (e) => {
    this.setState({
      selectedOption: e.target.value
    });
  }

  formSubmit = (e) => {
    e.preventDefault();

    const { dispatch, id } = this.props;
    dispatch(handleSavePollAnswer(id, this.state.selectedOption))

    console.log('----SUBMIT-----')
    console.log(id)
  }
  
  render() {
    
    const { poll, author, authedUser } = this.props

    if (authedUser === null) {
      return 'You must log in to access this page'
    }

    const { optionOne, optionTwo } = poll
    const { name, avatarURL } = author
    console.log(optionOne, optionTwo, name, avatarURL)

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
            <div className='divider'></div>
            <span className='poll-text general-big'>Would You Rather ...</span>
            <form onSubmit={(e) => this.formSubmit(e)}>
              <div className='radio'>
                <label className='poll-text'>
                  <input
                    type='radio'
                    value='optionOne'
                    checked={this.state.selectedOption === 'optionOne'}
                    onChange={this.onValueChange}
                  />
                  { optionOne.text }
                </label>
              </div>
              <div className='radio'>
                <label className='poll-text'>
                  <input
                    type='radio'
                    value='optionTwo'
                    checked={this.state.selectedOption === 'optionTwo'}
                    onChange={this.onValueChange}
                  />
                  { optionTwo.text}
                </label>
              </div>
              <div>Selected option is: {this.state.selectedOption}</div>
              <button
                type='submit'
                className='view-poll-btn'
              >
                Submit
              </button>
            </form>
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
    author,
    authedUser
  }
}

export default connect(mapStateToProps)(UnansweredPoll)