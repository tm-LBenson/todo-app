/** @format */

import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';

const testUsers = {
  Administrator: {
    password: 'ADMIN',
    name: 'admin',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW5pc3RyYXRvciIsInJvbGUiOiJhZG1pbiIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJywncmVhZCcsJ3VwZGF0ZScsJ2RlbGV0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.pAZXAlTmC8fPELk2xHEaP1mUhR8egg9TH5rCyqZhZkQ',
  },
  Editor: {
    password: 'EDITOR',
    name: 'editor',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRWRpdG9yIiwicm9sZSI6ImVkaXRvciIsImNhcGFiaWxpdGllcyI6IlsncmVhZCcsJ3VwZGF0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.3aDn3e2pf_J_1rZig8wj9RiT47Ae2Lw-AM-Nw4Tmy_s',
  },
  Writer: {
    password: 'WRITER',
    name: 'writer',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV3JpdGVyIiwicm9sZSI6IndyaXRlciIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.dmKh8m18mgQCCJp2xoh73HSOWprdwID32hZsXogLZ68',
  },
  User: {
    password: 'USER',
    name: 'user',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsInJvbGUiOiJ1c2VyIiwiY2FwYWJpbGl0aWVzIjoiWydyZWFkJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.WXYvIKLdPz_Mm0XDYSOJo298ftuBqqjTzbRvCpxa9Go',
  },
};

export const LoginContext = React.createContext();

const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({ capabilities: [] });
  const [error, setError] = useState(null);
  function can(capability) {
    console.log(user);
    return user?.capabilities?.includes(capability);
  }

  const login = async (role, password) => {
    console.log('logging in', role);
    let auth = Object.values(testUsers).find((user) => user.name === role);
    if (!auth) {
      setError('Role not found');
      return;
    }

    if (auth.password !== password) {
      setError('Incorrect password');
      return;
    }

    try {
      validateToken(auth.token);
    } catch (e) {
      setError(e);
      console.error(e);
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setToken(null);
    setUser({});
  };

  const validateToken = (token) => {
    try {
      let validUser = jwt_decode(token);
      console.log(validUser);
      setLoggedIn(true);
      setToken(token);
      setUser(validUser);
    } catch (e) {
      setLoggedIn(false);
      setToken(null);
      setUser({});
      setError(e);
      console.log('Token Validation Error', e);
    }
  };

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
    validateToken(token);
  }, []);

  const values = {
    loggedIn,
    can,
    login,
    logout,
    user,
    error,
    token,
  };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
