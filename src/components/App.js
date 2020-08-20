import React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import UserList from "./UserList";
import TodoList from "./TodoList";

const App = () => (
    <>
      <UserList />
      <TodoList />
    </>
);


export default App;
