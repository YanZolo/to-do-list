import React from 'react'

class List extends React.Component {



    render() {
        
        return (
            <>
                {this.props.tasks.map((item,index) =>

                (
                    <div className='d-flex justify-content-between col-5  mt-5 ms-5'>
                        <div className='border w-50'>
                            <p><strong>Description: </strong></p>
                            <p>{item.description}</p>                            
                        </div>

                        <div className='border w-50'>
                            <p><strong>Status: </strong></p>
                            <p>{item.status}</p>
                        </div>

                            <button className='btn btn-outline-danger ' onClick={()=>{this.props.deleteTask(index)}}>supprimer</button>

                    </div>

                )


                )}

            </>
        )
    }
}

export default List