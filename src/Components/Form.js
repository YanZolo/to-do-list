import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ""
        }
    }

    handleInputValue = (inputForm) => {
        this.setState({task: inputForm.target.value })         
             
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTask(this.state.task)
        this.setState({task: ''})
        if(this.props.modify){
            this.props.handleInputValue(this.state.task)
        }
    }

    render() {

        return (
            <>

                <h1 className='col-4 p-0 ms-5'>To do list</h1>
                <form className='row col-6 d-flex mt-5 ms-5'  onSubmit={this.handleSubmit}  >
                    <div className='col-4 p-0 m-0'>
                        <input className='form-control' type='text' value={this.state.task} onChange={this.handleInputValue} />
                    </div>
                    <div className=' col-3 p-0 m-0'>
                        <button className='btn btn-outline-primary p-2' type='submit'>{this.props.modify ? 'Modifier ma tâche': 'Ajouter à ma list' }</button>
                    </div>

                </form>
            </>
        )
    }
}

export default Form