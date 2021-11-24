import { FaEdit } from "react-icons/fa";
import moment from "moment";

import "./todo-item.scss";

function TodoItem({todo, showEditModal}){
  return (
    <div className={"todo-item " + (todo.completed ? "completed" : "")}>
      <div className="todo-item-text">
        <span>{todo.task}</span>
        <span className="secondary">{moment(todo.created).format('YYYY-MM-DD HH:mm')}</span>
      </div>
      <div className="todo-item-button">
        <button type="button" onClick={() => showEditModal(todo)}><FaEdit /></button>
      </div>
    </div>
  );
}

export default TodoItem;