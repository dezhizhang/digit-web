import React, { useEffect } from 'react';
import { history } from 'umi';

const Auth: React.FC = (props) => {
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    // window.localStorage.setItem('token', '123');
    if (token) {
      history.push('/');
    } else {
      history.push('/user/login');
    }
  }, []);
  return <div>{props.children}</div>;
};

export default Auth;
