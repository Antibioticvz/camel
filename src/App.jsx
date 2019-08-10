import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


import Header from 'components/Header'
import Form from 'screens/FormPage'
import Result from 'screens/ResultPage'

import './styles.scss'

const App = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = process.env.REACT_APP_SCRIPT_SOURCE
    script.id = process.env.REACT_APP_INSTANT_GAME_ID
    document.body.appendChild(script)
    script.onload = () => window.FBInstant.initializeAsync().then(() => window.FBInstant.startGameAsync().then())
  }, [])

  return (
    <Router>
      <div>
        <Header />
        <Link to='/'>Form</Link>
        <br />
        <Link to='result'>Result</Link>
        <Route exact path="/" component={Form} />
        <Route path="/result" component={Result} />
      </div>
    </Router >
  );
}

export default App
