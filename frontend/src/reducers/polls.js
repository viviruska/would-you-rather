import { RECEIVE_POLLS, SAVE_POLL_ANSWER } from '../actions/polls'

export default function polls(state={}, action) {
  switch (action.type) {
      case RECEIVE_POLLS:
        return {
          ...state,
          ...action.polls
        }
      case SAVE_POLL_ANSWER:
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            [action.answer]: {
              ...state[action.id][action.answer],
              votes: state[action.id][action.answer].votes.concat([action.authedUser])
            }
          }
        }
      default:
        return state;
  }
}