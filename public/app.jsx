const Greeter = React.createClass({
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

ReactDOM.render(
  <Greeter name='Aishwarya' />,
  document.getElementById('app')
)
