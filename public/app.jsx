const GreeterMessage = React.createClass ({
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

const GreeterForm = React.createClass ({
  onFormSubmit: function (e) {
    e.preventDefault() // this prevents the form from submitting and causing a page refresh or a browser reload
    const name = this.refs.name.value

    if (name.length > 0) {
      this.refs.name = ''
      this.props.onNewName(name)
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref='name' />
          <button>Set Name</button>
        </form>
      </div>
    )
  }
})

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
      name: this.props.name
    }
  },

  // user defined method, passing the state to children component
  handleNewName: function (name) {
    this.setState({
      name: name
    })
  },

  // this method is also byDefault provided by react and called whenver ReactDOM.render is called
  render: function () {
    const name = this.state.name // accessing properties passed to the class
    const message = this.props.message
    /* onSubmit expects a function to be passed to it */
    return (
      <div>

      <GreeterMessage name={name} message={message} />

        <GreeterForm onNewName={this.handleNewName} />
      </div>
    )
  }
})

const firstName = 'Aishwarya' // passing a variable in props

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById('app')
)
