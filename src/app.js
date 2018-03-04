import React from 'react'
import { hot } from 'react-hot-loader'

import legoMan from './static/legoMan.svg'

const App = () => (<div>
  <img src={legoMan} />
</div>)

export default hot(module)(App)
