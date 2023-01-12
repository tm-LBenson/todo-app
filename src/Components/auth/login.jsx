/** @format */

import { Button, TextInput } from '@mantine/core';
import React, { useState, useContext } from 'react';
import { When } from 'react-if';
import { Link } from 'react-router-dom';
import { LoginContext } from './context.jsx';

const Login = () => {
  const [state, setState] = useState({ username: '', password: '' });
  const { login, logout, loggedIn } = useContext(LoginContext);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(state.username, state.password);
  
  };

  return (
    <>
      <When condition={loggedIn}>
        <Button
          onClick={logout}
          color={'red'}
        >
          <Link to="/">Log Out</Link>
        </Button>
      </When>

      <When condition={!loggedIn}>
        <form
          className="login-form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <TextInput
            placeholder="UserName"
            name="username"
            onChange={handleChange}
          />
          <TextInput
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <Button
            color={'green'}
            type="submit"
          >
            Login
          </Button>
        </form>
      </When>
    </>
  );
};

export default Login;
