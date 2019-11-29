import React from 'react'

class AddTodo extends React.Component {
  state = {
    title: ''
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleDownKey = (e) => {
    if (e.keyCode === 13) {
      this.handleSubmit()
    }
  }

  handleSubmit = () => {
    const id = Date.now()

    this.props.addTodo({
      id,
      title: this.state.title
    })

    this.setState({
      title: ''
    })
  }

  render() {
    const { title } = this.state

    return (
      <div>
        <input
          value={title}
          onChange={this.handleChange}
          onKeyDown={this.handleDownKey}
        />
        <button onClick={this.handleSubmit}>Add Todo</button>
      </div>
    )
  }
}

export { AddTodo }
