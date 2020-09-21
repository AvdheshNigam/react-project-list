import React, { useState } from 'react';
import './App.css';
import userList from './data.js';
import UserTable from './tables/userTable';
import AddUserForm from './forms/AddUserForm';

const App = () => {

  const [users, setUsers] = useState(userList);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>React Crud app with hooks</h1>
      <div className="row">
        <div className="five columns">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="seven columns">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
