import { getInitialData } from '../utils/api'
import { receivePolls } from './polls'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ questions, users }) => {
        // const { authedUser } = getState()
        dispatch(receivePolls(questions))
        dispatch(receiveUsers(users))
        dispatch(hideLoading())
      })
  }
}