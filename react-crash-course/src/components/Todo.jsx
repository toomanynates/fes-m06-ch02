import './Todo.css'

/* option 1 props */
// function Todo({title, para}) {

/* option 2 props */
function Todo(props) {
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
            {/* option 1 props
            <h2>{title}</h2>
            <p>{para}</p>
            */}
            <h2>{props.title}</h2>
            <p>{props.para}</p>
            <button onClick={() => {btnClick()}}>Delete</button>
        </div>
    )
}

export default Todo;