export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_POLL_ANSWER = 'SAVE_POLL_ANSWER'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
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