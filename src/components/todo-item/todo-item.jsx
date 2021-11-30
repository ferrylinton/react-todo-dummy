import { FaEdit } from "react-icons/fa";
import moment from "moment";

import "./todo-item.scss";

function TodoItem({todo, showTodoModal}){
  let clzName = "todo-item";

  if(todo.status === 'DONE'){
    clzName += " done"
  }else if(todo.status === 'DELETED'){
    clzName += " deleted"
  }
  return (
    <div className={clzName}>
      <div className="todo-item-text">
        <span>{todo.task}</span>
        <span className="secondary">{moment(todo.created).format('YYYY-MM-DD HH:mm')}</span>
      </div>
      {(todo.status === 'PENDING') ? <button className="todo-item-button" type="button" onClick={() => showTodoModal(todo)}><FaEdit /></button> : null}
    </div>
  );
}

export default TodoItem;