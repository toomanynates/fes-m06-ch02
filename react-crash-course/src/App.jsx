import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section >
        <div>
          <Title />
          <div className='todo__wrapper'>
            <Todo></Todo>
            <Todo />
            <Todo />
          </div>
          <Modal />
        </div>
        </section>
    </>
  );
}

export default App
