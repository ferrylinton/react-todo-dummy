import React from 'react';
import ReactDOM from 'react-dom';
import gsap from "gsap";

import "./modal.scss";


class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.modalRef = React.createRef();
    this.modalContentRef = React.createRef();
    this.taskRef = React.createRef();

    const onComplete = () => {
      this.taskRef.current.focus();
    };

    this.timeline = gsap.timeline({ paused: true, onComplete });
  }

  componentDidMount() {
    this.timeline
      .from(this.modalRef.current, {
        duration: 0.25,
        autoAlpha: 0
      })
      .from(this.modalContentRef.current, {
        duration: 0.25,
        autoAlpha: 0,
        y: 25
      });

    this.timeline.play();

    setTimeout(function(){ document.body.addEventListener("click", this.onClickOutside) }.bind(this), 200);
    
  }

  componentWillUnmount() {
    this.timeline.kill();
    document.body.removeEventListener("click", this.onClickOutside);
  }

  onClickOutside = e => {
    if (this.modalContentRef.current && !this.modalContentRef.current.contains(e.target)) {
      e.preventDefault();
      e.stopPropagation();
      this.props.toggle();
    }
  };

  render() {
    return ReactDOM.createPortal(
      <div className="modal" ref={this.modalRef}>
        <div className="modal-content" ref={this.modalContentRef}>
          <span className="close" onClick={this.props.toggle}></span>
          <div className="modal-body">
            <form className="form" autoComplete="false" onSubmit={this.props.onSubmit}>
              <input type="text" id="task" name="task" placeholder="Task" value={this.props.todo.task} onChange={this.props.onChange} ref={this.taskRef} autoComplete="off" />
              <div className="buttons">
                <button type="button" className="btn" onClick={this.props.toggle}>Cancel</button>
                <button type="submit" className="btn primary">Save</button>
              </div>
            </form>
          </div>
        </div>

      </div>,
      document.body
    )
  }
}

export default Modal;