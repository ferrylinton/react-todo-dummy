import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { add, update } from "../../services/todo-service";

function TodoModal(props) {

  const validationSchema = Yup.object().shape({
    task: Yup.string()
      .required('Task is required')
      .min(6, 'Task must be at least 3 characters')
      .max(50, 'Task must not exceed 50 characters')
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: props.todo,
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = todo => {
    console.log(todo);
    if (props.todo.id === '0') {
      add(todo);
    } else {
      update(todo);
    }

    props.closeTodoModal();
  };

  return (
    <>
      <Modal show={true} onHide={props.closeTodoModal}>
        <Modal.Header closeButton className="bg-light text-secondary py-2">
          <Modal.Title className="fs-5 text-uppercase">{ props.todo.id === '0' ? 'New Data' : 'Update Data'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)} className="px-2 py-4" autoComplete="false" noValidate>

            <div className="form-group mb-3">
              <input
                name="task"
                type="text"
                placeholder="Task"
                autoComplete="off"
              
                {...register('task')}
                className={`form-control ${errors.task ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.task?.message}</div>
            </div>

            <Form.Select aria-label="NEW" {...register("status")} className="mb-3">
              <option value="PENDING">NEW</option>
              <option value="DONE">DONE</option>
              <option value="DELETED">DELETED</option>
            </Form.Select>

            <div className="d-flex">
              <button
                type="button"
                onClick={() => reset()}
                className="btn btn-secondary flex-fill">
                Reset
              </button>
              <button type="submit" className="btn btn-primary flex-fill">
                Save
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TodoModal;
