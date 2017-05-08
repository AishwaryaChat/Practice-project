const React = require('react')
const ReactDOM = require('react-dom')
const Greeter = require('Greeter')

const firstName = 'Aishwarya' // passing a variable in props

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById('app')
)
