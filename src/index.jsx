import React from 'react'
import ReactDOM from 'react-dom'

import App from 'App'
import { ReducerProvider } from 'reducer/context';

ReactDOM.render(<ReducerProvider><App /></ReducerProvider>, document.getElementById('root'))

