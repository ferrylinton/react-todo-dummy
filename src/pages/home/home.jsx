import React from "react";
import { FaSearch, FaPlusCircle } from "react-icons/fa";

import TodoItem from "../../components/todo-item/todo-item";
import TodoModal from "../../components/todo-modal/todo-modal";

import { get, search} from "../../services/todo-service";

import './home.scss';

const initTodo = {
  id: '0',
  task: "",
  status: "PENDING",
  email: "ferrylinton@gmail.com",
  createdAt: new Date(),
  updatedAt: null
}

function Home() {

  const [todos, setTodos] = React.useState(get());
  const [show, setShow] = React.useState(false);
  const [todo, setTodo] = React.useState(initTodo);
  const [keyword, setKeyword] = React.useState("");


  const showTodoModal = (todo) => {
    if(todo){
      setTodo(todo);
    }else{
      setTodo(initTodo);
    }
    
    setShow(true);
  }

  const closeTodoModal = () => {
    setShow(false);
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
    setTodos(get());
  }, [show])

  return (
    <>
    <div className="logo text-center my-3">todo</div>
    <div className="content-wrapper">
      <div className="flex-center">
        <form id="search-form" name="search-form" className="search-box" autoComplete="false" onSubmit={onSearch}>
          <input type="text" placeholder="Search..." value={keyword} onChange={onKeywordChange} />
          <button type="submit"><FaSearch /></button>
        </form>
        <div className="add-box">
          <button onClick={() => showTodoModal()}><FaPlusCircle /><span>ADD</span></button>
        </div>
        <div className="todos">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              showTodoModal={showTodoModal}
            />
          ))}
          {todos.length > 0 ? '' : (<div className="message">No data</div>)}
        </div>
      </div>
      {show ? (<TodoModal closeTodoModal={closeTodoModal} todo={todo} />) : null }
    </div>
    </>
  )
}

export default Home;