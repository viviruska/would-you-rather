import {
  RECEIVE_POLLS,
  SAVE_POLL_ANSWER,
  SAVE_POLL
} from '../actions/polls'
import { generateUID } from '../utils/helpers'

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
      case SAVE_POLL:
        const newId = generateUID();

        return {
          ...state,
          [newId]: {
            author: action.authedUser,
            timestamp: Date.now(),
            optionOne: {
              votes: [],
              text: action.optionOne
            },
            optionTwo: {
              votes: [],
              text: action.optionTwo
            }
          }
        }
      default:
        return state;
  }
}