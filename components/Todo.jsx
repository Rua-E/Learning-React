import './Todo.css'

function Todo({title, paragraph, onTodoDelete}) {
    function deleteTodo(id) {
        console.log(id ,title.toUpperCase())
    }

    return (
        <div className='todo'>
            <p> {title} </p>
            <span>{paragraph} </span>
            <button 
                onClick={onTodoDelete} >Delete</button>
        </div>
    )
}

export default Todo