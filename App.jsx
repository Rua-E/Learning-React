import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';
import Counter from './components/Counter.jsx';
import React, {useState} from 'react';

function App() {
  // return <Counter />

  const [showModal, setShowModal] = useState(false)
  // setShowModal(false)
  // let isModalOpen = true;


  function onTodoDelete(){
    setShowModal(true)
    console.log('onTodoDelete()')
  }

  function cancelModal(){
    setShowModal(false);
  }
  function confirmModal(){
    setShowModal(false);
  }

  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}></input>
        <button >Add todo</button>
      </div>
      <div className='todo__wrapper'>
        <Todo 
          title="Finish Frontend Simplified"
          paragraph="Code along with Frontend Simplified step by step"
          onTodoDelete={onTodoDelete}
          />
        <Todo 
          title="Finish Interview Section"
          paragraph="Finish every interview question in the next 6 weeks" 
          onTodoDelete={onTodoDelete}
          />
        <Todo 
          title="Land a $100K Job" 
          paragraph="Apply to 100 jobs"
          onTodoDelete={onTodoDelete}
        />
      </div>
      {showModal && <Modal cancelModal={cancelModal} confirmlModal={confirmModal} title="Are you sure you want to delete?" /> }
    </div>
  );
}

export default App;
