const Greeter = React.createClass({
  getDefaultProps: function () { // wil set dafault props for the class
    return {
      name: 'React'
    }
  },
  render: function () {
    const name = this.props.name // accessing properties passed to the class
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>This is from a Component.</p>
      </div>
    )
  }
})

const firstName = 'Aishwarya' // passing a variable in props

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById('app')
)
