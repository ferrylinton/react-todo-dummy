import React from "react";
import { Button } from "react-bootstrap";
import { FaPlusCircle,  FaRedoAlt} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import TodoItem from "../../components/todo-item/todo-item";
import TodoModal from "../../components/todo-modal/todo-modal";

import { get, search } from "../../services/todo-service";

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
    if (todo) {
      setTodo(todo);
    } else {
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

  const onReload = () => {
    setKeyword("");
    setTodos(search(""));
  }

  React.useEffect(() => {
    if(!show){
      setKeyword("");
      setTodos(get());
    }
    
  }, [show])

  return (
    <div className="d-flex justify-content-center">
      <div className="home-box">
        <form name="search-form" autoComplete="false" onSubmit={onSearch}>
          <div className="form-group search-box">
            <button type="submit"><FiSearch /></button>
            <input type="text" className="form-control" placeholder="Search..." value={keyword} onChange={onKeywordChange} />
          </div>
        </form>
        <div className="buttons">
          <Button variant="secondary" type="button" onClick={() => onReload()}><FaRedoAlt /><span>REFRESH</span></Button>
          <Button variant="primary" type="button" onClick={() => showTodoModal()}><FaPlusCircle /><span>ADD</span></Button>
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
      {show ? (<TodoModal closeTodoModal={closeTodoModal} todo={todo} />) : null}
    </div>
  )
}

export default Home;