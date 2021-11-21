import "./modal.scss"


function Modal({ openModal, toggle, handleSubmit, task, handleTaskChange }) {
  return (
    <div className={"modal " + (openModal ? "show" : "")}>
      <div className="modal-content">
        <span className="close" onClick={toggle}></span>
        <div className="modal-body">
          <form className="form">
            <label htmlFor="task">
              <input type="text" id="task" placeholder="Task" value={task} onChange={handleTaskChange} />
              <span>Task</span>
            </label>
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn" onClick={toggle}>Cancel</button>
          <input type="submit" className="btn primary" value="Save" onClick={handleSubmit}></input>
        </div>
      </div>

    </div>
  )
}

export default Modal;