import React from 'react'
import Form from './Components/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './Components/List'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      modify: false,
      taskToChange: '',
      taskIndexToChange: ''
      
    }
  }

  addTask = (e) => {
    this.setState({ tasks: [{ description: e, status: 'To do' }, ...this.state.tasks] })
  }


  deleteTask = (item,index) => {

    console.log('task to remove is in index:',index)
    console.log('task to remove is :',item)

    const cloneTasks = [...this.state.tasks]
    cloneTasks.splice(index, 1)
    this.setState({ tasks: cloneTasks })
    console.log('task removed:', item.description)
  }
  
  changeTask = (item, index) => {  
    console.log('task to change is in index:',index)
    console.log('task to change is :',item)
    console.log('task to change is :',item)
    this.setState({modify: this.state.modify? false: true, taskToChange: item.description, taskIndexToChange: index})       
  }

  handleInputValue = (newValue) => {
    const cloneTasks = [...this.state.tasks]
    cloneTasks.splice(this.state.taskIndexToChange, 1,{description: newValue, status: 'todo'} )
    this.setState({tasks: cloneTasks, modify: this.state.modify ? false: true }) 
       
  }


  render() {
    console.log('modify :',this.state.modify)
    console.log('tasks values is update:', this.state.tasks)
    return (
      <>

        <Form addTask={this.addTask} handleInputValue={this.handleInputValue} modify={this.state.modify} />
        <List tasks={this.state.tasks} deleteTask={this.deleteTask} ChangeTask={this.changeTask} />

      </>
    )
  }
}

export default App