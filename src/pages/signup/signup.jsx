import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import "./signup.scss";



function Signup() {

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
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
      <form onSubmit={handleSubmit(onSubmit)} className="border m-3 mt-5 px-4 pb-4 signup-box" autoComplete="false" noValidate>
        <h3 className="text-secondary text-uppercase text-center fw-bold my-4">Sign Up</h3>

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
            name="email"
            type="text"
            placeholder="Email"
            autoComplete="off" 
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
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

        <div className="form-group mb-3">
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            autoComplete="off" 
            {...register('confirmPassword')}
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''
              }`}
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>

        <div className="form-group form-check mb-3">
          <input
            name="acceptTerms"
            type="checkbox"
            {...register('acceptTerms')}
            className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''
              }`}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        </div>

        <div className="d-flex">
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-secondary flex-fill">
            Reset
          </button>
          <button type="submit" className="btn btn-primary flex-fill">
            Sign Up
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Signup;