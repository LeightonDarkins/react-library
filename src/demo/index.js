import React from 'react'
import ReactDOM from 'react-dom'

import { Test, CheckBox } from '../../dist'

const App = (props) => {
  const change = () => {
    console.log('changed!')
  }

  return (
    <div>
      <Test />
      <CheckBox label='this is a label' onChange={change} />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))