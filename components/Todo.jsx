import './Todo.css'

function Todo({title, paragraph}) {
    console.log(title, paragraph)
    return (
        <div className='todo'>
            <h2> {title} </h2>
            <span>{paragraph} </span>
            <button>Delete</button>
        </div>
    )
}

export default Todo