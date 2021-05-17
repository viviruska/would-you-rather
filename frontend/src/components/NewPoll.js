import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSavePoll } from '../actions/polls'

class NewPoll extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleChange = (e, questionNum) => {
    questionNum === 'one'
      ? this.setState({ optionOne: e.target.value })
      : this.setState({ optionTwo: e.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { dispatch } = this.props;
    dispatch(handleSavePoll(this.state.optionOne, this.state.optionTwo))
    this.props.history.push(`/`)
  };

  inputIsEmpty = () => {
    return this.state.optionOne === '' || this.state.optionTwo === ''
  }

  render() {
    return (
      <div className='poll-item'>
        <div className='new-poll-header'>
          <span className='new-poll-header-text'> Create New Question</span>
        </div>
        <div className='poll-container poll-info'>
          <div className='new-poll-text-1'>Complete the question: </div>
          <div className='new-poll-text-2'>Would you rather ...</div>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder=""
              value={this.state.optionOne}
              onChange={(e) => this.handleChange(e, 'one')}
              className="form-control" 
              // ref={(c) => this.optionOne = c}
              name="optionOne"
            />
            {/* <div className='test'><hr className="solid"/> */}
            <div className='or-text'>---- OR ----</div>
            {/* <hr className="solid"/></div> */}
            <input
              type="text"
              className="form-control"
              value={this.state.optionTwo}
              onChange={(e) => this.handleChange(e, 'two')}
              // ref={(c) => this.optionTwo = c} name="optionTwo"
            />
            <button
              disabled={this.inputIsEmpty()}
              className='new-poll-btn' 
              style={{
                backgroundColor: this.inputIsEmpty() ? 'grey' : '#1fa67e', 
                border: this.inputIsEmpty() ? 'grey' : '2px solid green'
              }}
              >
                Submit
              </button>
          </form>
        </div>
      </div>
    )
  }
}


export default connect()(NewPoll)