const React = require('react')
const GreeterMessage = require('./GreeterMessage')
const GreeterForm = require('./GreeterForm')

// Container component
const Greeter = React.createClass({
  // this method is byDefault provided by react and called whenver ReactDOM.render is called
  getDefaultProps: function () { // wil set dafault props for the class
    return {
      name: 'React',
      message: 'This is the default message'
    }
  },

  // default method of react to get initial state of component
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },

  // user defined method, passing the state to children component
  handleNewData: function (updates) {
    this.setState(updates)
  },

  // this method is also byDefault provided by react and called whenver ReactDOM.render is called
  render: function () {
    const name = this.state.name // accessing properties passed to the class
    const message = this.state.message
    /* onSubmit expects a function to be passed to it */
    return (
      <div>
        <GreeterMessage name={name} message={message} />

        <GreeterForm onNewData={this.handleNewData} />
      </div>
    )
  }
})

module.exports = Greeter
