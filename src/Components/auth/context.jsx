/** @format */

import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import fetchApi from '../../utility/fetchApi';
import { redirect, useNavigate } from 'react-router-dom';

export const LoginContext = React.createContext();

const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({ capabilities: [] });
  const [error, setError] = useState(null);

  const can = (capability) => {
    console.log(user);
    return user?.acl?.capabilities?.includes(capability);
  };

  const login = async (username, password) => {
    try {
      const data = await fetchApi(
        'https://api-js401.herokuapp.com/signin',
        null,
        'POST',
        { username, password },
      );

      console.log(data);
      if (data.token) {
        setToken(data.token);
        setLoggedIn(true);
        setUser(data.user);
        setError(null);
        cookie.save('token', data.token, { path: '/' });
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    
  };

  const logout = () => {
    setLoggedIn(false);
    setToken(null);
    setUser({ capabilities: [] });
    cookie.remove('token', { path: '/' });
  };

  useEffect(() => {
    const token = cookie.load('token');
    if (token) {
      setToken(token);
      setLoggedIn(true);
      setUser(jwt_decode(token));
    }
  }, []);

  

  return (
    <LoginContext.Provider
      value={{
        loggedIn,
        login,
        logout,
        user,
        can,
        error,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
