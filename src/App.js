import React from 'react'
import Form from './Components/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './Components/List'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  addTask = (e) => {
    this.setState({ tasks: [{ description: e, status: 'To do' }, ...this.state.tasks] })
  }


  deleteTask = (index) => {

    console.log('task to remove is in index:',index)

    const cloneTasks = [...this.state.tasks]
    cloneTasks.splice(index, 1)
    this.setState({ tasks: cloneTasks })
  }

  render() {

    console.log('task value:', this.state.tasks)
    return (
      <>

        <Form addTask={this.addTask} />
        <List tasks={this.state.tasks} deleteTask={this.deleteTask} />

      </>
    )
  }
}

export default App