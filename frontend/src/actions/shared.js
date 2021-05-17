import { getInitialData } from '../utils/api'
import { receivePolls } from './polls'
import { receiveUsers } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ questions, users }) => {
        dispatch(receivePolls(questions))
        dispatch(receiveUsers(users))
        dispatch(hideLoading())
      })
  }
}