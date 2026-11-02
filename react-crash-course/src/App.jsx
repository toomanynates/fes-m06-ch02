import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("useEffect")  //  called upon mount
  } ) 

  return (
    <>
      <section >
        <div>
          <Title />
          <input type="text" onChange={(event) => {
            console.log(event.target.value);
          }} />
          <button>Add TODO</button>
          <div className='todo__wrapper'>
            <Todo title="Finish Frontend Simplified"
                  para="Code along step by step"></Todo>

            <Todo title="Finish interview section"
                  para="Finish every interview question"/>

            <Todo title="Land $100k job"
                  para="Buy lunch"/>
            <Todo title="Praise God"
                  para="Use hymns and spiritual songs"/>
          </div>
          <Modal title="Are you super super sure?"/>
        </div>
        </section>
    </>
  );
}

export default App
