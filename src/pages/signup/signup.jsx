import React from 'react';
import { Form, Button } from 'react-bootstrap';
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

    <div className="d-flex justify-content-center">
      <div className="signup-box">
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete="false" noValidate>
          <div className="signup-title">Sign Up</div>

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

          <Form.Group className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Email"
              autoComplete="off"
              {...register('email')}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
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

          <Form.Group className="mb-3">
            <Form.Control
              size="lg"
              type="password"
              placeholder="Confirm Password"
              autoComplete="off"
              {...register('confirmPassword')}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.confirmPassword?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Check 
              size="lg"
              label="I agree"
              {...register('acceptTerms')}
              isInvalid={!!errors.acceptTerms}
            />
            <Form.Control.Feedback type="invalid">{errors.acceptTerms?.message}</Form.Control.Feedback>
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
              Sign Up
            </Button>
          </div>

        </Form>
      </div>
    </div>
  );
}

export default Signup;