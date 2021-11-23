import React from "react";
import { FaSearch, FaPlusCircle } from "react-icons/fa";

import TodoItem from "../../components/todo-item/todo-item";
import Modal from "../../components/modal/modal";

import {get, add} from "../../services/todo-service";

import './home.scss';

function Home() {


  const [todos, setTodos] = React.useState(get());
  const [openModal, setOpenModal] = React.useState(false);
  const [task, setTask] = React.useState("");

  const showAddModal = () => {
    toggle();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    toggle();

    console.log(e.target.task.value);

    add(e.target.task.value)
    setTodos(get());
    setTask("");
  }

  const toggle = () => {
    setOpenModal(!openModal);
    toggleScrollLock();
  }

  const toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };

  const handleTaskChange = (e) => setTask(e.target.value);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

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
          <button onClick={showAddModal}><FaPlusCircle /><span>ADD</span></button>
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
      {openModal ? (<Modal toggle={toggle} handleSubmit={handleSubmit} task={task} handleTaskChange={handleTaskChange} />) : null}
    </>
  )
}

export default Home;