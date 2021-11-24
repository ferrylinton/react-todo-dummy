import React from "react";
import { FaSearch, FaPlusCircle } from "react-icons/fa";

import TodoItem from "../../components/todo-item/todo-item";
import Modal from "../../components/modal/modal";

import { get, search, add, update } from "../../services/todo-service";

import './home.scss';

const initTodo = {
  id: 0,
  task: "",
  status: "NEW",
  email: "ferrylinton@gmail.com",
  createdAt: new Date(),
  updatedAt: null
}

function Home() {

  const [todos, setTodos] = React.useState(get());
  const [openModal, setOpenModal] = React.useState(false);
  const [todo, setTodo] = React.useState(initTodo);
  const [keyword, setKeyword] = React.useState("");

  const showAddModal = () => {
    setKeyword("");
    setTodo(initTodo);
    toggle();
  }

  const showEditModal = (todo) => {
    setKeyword("");
    setTodo(todo);
    toggle();
  }

  const onSubmit = (e) => {
    e.preventDefault();
    toggle();

    if (todo.id === 0) {
      add(todo);
    } else {
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
    const { value, name } = e.target;
    setTodo({ ...todo, [name]: value });
  }

  const onKeywordChange = (e) => {
    const { value } = e.target;
    setKeyword(value)
  }

  const onSearch = (e) => {
    e.preventDefault();
    setTodos(search(keyword));
  }

  React.useEffect(() => {
    console.log(keyword);
  })

  return (
    <>
      <div className="flex-center">
        <form id="search-form" name="search-form" className="search-box" autoComplete="false" onSubmit={onSearch}>
          <input type="text" placeholder="Search..." value={keyword} onChange={onKeywordChange} />
          <button type="submit"><FaSearch /></button>
        </form>
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