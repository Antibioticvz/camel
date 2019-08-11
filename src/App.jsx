import React, { useEffect, useState } from 'react'

import ROUT from 'constants/rout'
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

  const [rout, setRoute] = useState(ROUT.FORM)

  const COMPONENT = {
    FORM: <Form {...{
      checkResult: () => setRoute(ROUT.RESULT)
    }} />,
    RESULT: <Result />,
  }
  return (
    <>
      <Header />
      <div className="container is-fluid">
        {COMPONENT[rout]}
      </div>
    </>
  );
}

export default App
