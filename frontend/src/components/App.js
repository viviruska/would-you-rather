import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <Home />
        }
      </div>
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
