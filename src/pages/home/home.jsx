import React from "react";
import { FaSearch, FaPlusCircle } from "react-icons/fa";

import TodoItem from "../../components/todo-item/todo-item";
import Modal from "../../components/modal/modal";

import './home.scss';

function generateId() {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
}

function Home() {


  const [todos, setTodos] = React.useState([
    {
      id: generateId(),
      task: "This is a sampe todo",
      created: new Date(),
      completed: true
    },
    {
      id: generateId(),
      task: "This is a sampe todo",
      created: new Date(),
      completed: false
    }
  ]);
  const [openModal, setOpenModal] = React.useState(false);
  const [task, setTask] = React.useState("");

  const add = () => {
    setOpenModal(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(false);

    const newTodos = [...todos, {
      id: generateId(),
      task,
      created: new Date(),
      completed: false
    }];
    setTodos(newTodos);

    setTask("");
  }

  const toggle = () => {
    setOpenModal(!openModal);
  }

  const handleTaskChange = (e) => setTask(e.target.value);

  React.useEffect(() => {    
    console.log(`openModal : ${openModal}`);
    console.log(`task : ${task}`);
  });

  return (
    <>
      <div className="flex-center">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button><FaSearch /></button>
        </div>
        <div className="add-box">
          <button onClick={add}><FaPlusCircle /><span>ADD</span></button>
        </div>
        <div className="todos">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
            />
          ))}
        </div>
      </div>
      <Modal openModal={openModal} toggle={toggle} handleSubmit={handleSubmit} task={task} handleTaskChange={handleTaskChange} />
    </>
  )
}

export default Home;