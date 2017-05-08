// Presentational component
const GreeterMessage = React.createClass({
  render: function () {
    const name = this.props.name
    const message = this.props.message
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    )
  }
})

// Presentational component
const GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault() // this prevents the form from submitting and causing a page refresh or a browser reload
    const updates = {}
    const name = this.refs.name.value
    const message = this.refs.message.value

    if (name.length > 0) {
      this.refs.name.value = ''
      updates.name = name
    }

    if (message.length > 0) {
      this.refs.message.value = ''
      updates.message = message
    }

    this.props.onNewData(updates)
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type='text' ref='name' placeholder='Enter Name' />
          </div>
          <div>
            <textArea rows='2' ref='message' placeholder='Enter Message' />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
})

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

const firstName = 'Aishwarya' // passing a variable in props

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById('app')
)
