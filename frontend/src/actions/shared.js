import { getInitialData } from '../utils/api'
import { receivePolls } from './polls'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'vivirsk'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ questions, users }) => {
        dispatch(receivePolls(questions)),
        dispatch(receiveUsers(users)),
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}