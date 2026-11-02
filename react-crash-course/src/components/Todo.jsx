import './Todo.css'

function Todo({title, para}) {
/*
props:
title string
para string
*/    
    function btnClick(id) {
        console.log("clicked id =", id);
    }

    return (
        <div className='todo'>
            <h2>{title}</h2>
            <p>{para}</p>
            <button onClick={() => {btnClick()}}>Delete</button>
        </div>
    )
}

export default Todo;