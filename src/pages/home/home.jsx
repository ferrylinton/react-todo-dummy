import React from "react";
import { FaSearch, FaPlusCircle } from "react-icons/fa";

import TodoItem from "../../components/todo-item/todo-item";
import Modal from "../../components/modal/modal";

import { get, add, update } from "../../services/todo-service";

import './home.scss';

function Home() {

  const initTodo = {
    id: 0,
    task: "",
    created: null,
    completed: false
  }

  const [todos, setTodos] = React.useState(get());
  const [openModal, setOpenModal] = React.useState(false);
  const [todo, setTodo] = React.useState(initTodo);

  const showAddModal = () => {
    setTodo(initTodo);
    toggle();
  }

  const showEditModal = (todo) => {
    console.log('showEditModal ....');
    console.log(todo);
    setTodo(todo);
    toggle();
  }

  const onSubmit = (e) => {
    e.preventDefault();
    toggle();

    if(todo.id === 0){
      console.log('add.............');
      add(todo);
    }else{
      console.log('update............');
      console.log(todo);
      update(todo);
    }
    
    setTodos(get());
    setTodo(initTodo);
  }

  const toggle = () => {
    setOpenModal(!openModal);
    toggleScrollLock();
  }

  const toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };

  const onChange = (e) => {
    console.log("onChange.............");
    console.log(e.target.name + " : " + e.target.value);
    const { value, name } = e.target;
    setTodo({ ...todo, [name]: value });
  }

  React.useEffect(() => {
    console.log(`openModal : ${openModal}`);
    console.log(`todo : ${JSON.stringify(todo)}`);
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
              key={todo.id}
              index={index}
              todo={todo}
              showEditModal={showEditModal}
            />
          ))}
        </div>
      </div>
      {openModal ? (<Modal toggle={toggle} onSubmit={onSubmit} todo={todo} onChange={onChange} />) : null}
    </>
  )
}

export default Home;