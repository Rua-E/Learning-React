import './Todo.css'

function Todo({title, paragraph}) {
    function deleteTodo(id) {
        console.log(id ,title.toUpperCase())
    }

    return (
        <div className='todo'>
            <p> {title} </p>
            <span>{paragraph} </span>
            <button onClick={() => deleteTodo(1)} >Delete</button>
        </div>
    )
}

export default Todo