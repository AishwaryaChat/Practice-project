const React = require('react')

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

module.exports = GreeterForm
