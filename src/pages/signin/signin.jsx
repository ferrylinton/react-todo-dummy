import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import "./signin.scss";



function Signin() {

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters')
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <>
    <div className="logo text-center my-3">todo</div>
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit(onSubmit)} className="border m-3 mt-5 px-4 pb-4 signin-box" autoComplete="false" noValidate>
        <h3 className="text-secondary text-uppercase text-center fw-bold my-4">Sign In</h3>

        <div className="form-group mb-3">
          <input
            name="username"
            type="text"
            placeholder="Username"
            autoComplete="off" 
            {...register('username')}
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.username?.message}</div>
        </div>

        <div className="form-group mb-3">
          <input
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="off" 
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>

        <div className="d-flex">
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-secondary flex-fill">
            Reset
          </button>
          <button type="submit" className="btn btn-primary flex-fill">
            Sign In
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Signin;