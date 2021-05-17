export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_POLL_ANSWER = 'SAVE_POLL_ANSWER'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}
