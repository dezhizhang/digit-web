import React from 'react';

const UserLayout: React.FC = (props) => {
  console.log('hello');
  return <div>{props.children}</div>;
};

export default UserLayout;
