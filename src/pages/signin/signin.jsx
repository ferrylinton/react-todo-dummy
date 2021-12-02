import React from 'react';
import { Form, Button } from 'react-bootstrap';
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
    <div className="d-flex justify-content-center">
      <div className="signin-box">
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete="false" noValidate>
          <div className="signin-title">Sign In</div>

          <Form.Group className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Username"
              autoComplete="off"
              {...register('username')}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid">{errors.username?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              size="lg"
              type="password"
              placeholder="Password"
              autoComplete="off"
              {...register('password')}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex">
            <Button
              type="reset" 
              variant="secondary"
              size="lg"
              onClick={() => reset()}
              className="flex-fill">
              Reset
            </Button>
            <Button 
              type="submit" 
              variant="primary" 
              size="lg"
              className="flex-fill">
              Sign In
            </Button>
          </div>
          
        </Form>
      </div>
    </div>
  );
}

export default Signin;