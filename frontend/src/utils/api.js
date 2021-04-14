// I didn't set up just yet a full-fledged server as well as a database,
// I'm just mocking that.
// In order to interact with the fake database, you would use these methods.
import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer
} from '_DATA.js'

export function getInitialData() {
  return Promise.all([
    _getQuestions(),
    _getUsers(),
  ]).then(([questions, users]) => ({
    questions,
    users,
  }))
}

export function saveQuestion(question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
  return _saveQuestionAnswer({ authedUser, qid, answer })
}