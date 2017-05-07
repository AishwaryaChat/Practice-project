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

  // user defined method
  OnButtonClick: function (e) {
    e.preventDefault() // this prevents the form from submitting and causing a page refresh or a re-browser reload
    let nameRefs = this.refs.name
    const name = nameRefs.value
    nameRefs.value = '' // making the input text value null after state change

    // checking if the input text value passed contains something or not
    if (typeof name === 'string' && name.length > 0) {
      // sets the new state of the component
      this.setState(
        {
          name: name
        }
      )
    }
  },
  // this method is also byDefault provided by react and called whenver ReactDOM.render is called
  render: function () {
    const name = this.state.name // accessing properties passed to the class
    const message = this.props.message
    /* onSubmit expects a function to be passed to it */
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!!!'}</p>

        <form onSubmit={this.OnButtonClick}>
          <input type='text' ref='name' />
          <button>Set Name</button>
        </form>
      </div>
    )
  }
})

const firstName = 'Aishwarya' // passing a variable in props

ReactDOM.render(
  <Greeter name={firstName} message='Message from props' />,
  document.getElementById('app')
)
