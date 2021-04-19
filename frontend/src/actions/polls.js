import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const SAVE_POLL_ANSWER = 'SAVE_POLL_ANSWER'

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}

function savePollAnswer({ authedUser, pollId, answer }) {
  return {
    type: SAVE_POLL_ANSWER,
    authedUser,
    pollId,
    answer,
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
        console.log(res)
        //dispatch(savePollAnswer({ authedUser, id, answer }))
      })
  }
}