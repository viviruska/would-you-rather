import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import PollDetail from './PollDetail'
import NewPoll from './NewPoll'
import UserList from './UserList'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
      <Router>
        <div>
          <LoadingBar />
          <Nav />
          {this.props.loading === true
            ? null
            : <div>
                <Route path='/' exact component={Home} />
                <Route path='/questions/:question_id' component={PollDetail} />
                <Route path='/add' component={NewPoll} />
                <Route path='/leaderboard' component={UserList} />
              </div>
          }
        </div>        
      </Router>
    )
  }
}

function mapStateToProps({ polls, users, authedUser }) {
  return {
    loading: 
      // Object.keys(users).length === 0 || 
      // Object.keys(polls).length === 0 || 
      authedUser === null
  }
}

export default connect(mapStateToProps)(App);
