import React from 'react'
import ReactDOM from 'react-dom'

import { Test } from '../../dist'

const App = (props) => {
  return <Test />
}

ReactDOM.render(<App />, document.getElementById('app'))