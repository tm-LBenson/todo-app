/** @format */

import { Button, TextInput } from '@mantine/core';
import React, { useContext, useState } from 'react';

import fetchApi from '../../utility/fetchApi';

import { LoginContext } from './context';
import Redirect from './Redirect';

export default function SignUp() {
  const [loggedIn, setLoggedIn] = useState(false);
  const signUp = async (body) => {
    try {
      await fetchApi(`https://api-js401.herokuapp.com/signup`, body, 'POST');
    } catch (error) {
      console.error(error);
    }
  };

  const { login } = useContext(LoginContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
      role: e.target.role.value,
    };
    await signUp(body);
    console.log(e.target.username.value, e.target.password.value);
    await login(e.target.username.value, e.target.password.value);
    setLoggedIn(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput
          name="username"
          label="Username"
        />
        <TextInput
          name="password"
          label="Password"
        />
        <TextInput
          name="role"
          label="role"
        />
        <Button type="submit">Submit</Button>
      </form>
      
    </>
  );
}
