import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const SAVE_POLL_ANSWER = 'SAVE_POLL_ANSWER'
export const SAVE_POLL = 'SAVE_POLL'

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}

function savePollAnswer({ authedUser, id, answer }) {
  return {
    type: SAVE_POLL_ANSWER,
    authedUser,
    id,
    answer,
  }
}

function savePoll({ optionOne, optionTwo, authedUser }) {
  return {
    type: SAVE_POLL,
    optionOne,
    optionTwo,
    authedUser,
  }
}

export function handleSavePollAnswer(id, answer) {
  return (dispatch, getState ) => {
    const { authedUser } = getState()

    return saveQuestionAnswer({
        authedUser,
        qid: id,
        answer
      })
      .catch((e) => {
        console.warn('Error in handleSavePollAnswer: ', e)
        alert('There was an error saving the poll answer. Please try again.')
      })
      .then((res) => {
        dispatch(savePollAnswer({ authedUser, id, answer }))
      })
  }
}

export function handleSavePoll(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser
    })
    .catch((e) => {
      console.warn('Error in handleSavePoll: ', e)
      alert('There was an error saving the poll. Please try again.')
    })
    .then((res) => {
      dispatch(savePoll({ optionOne, optionTwo, authedUser }))
    })
  }
}