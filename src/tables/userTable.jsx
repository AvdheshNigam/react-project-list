import React from 'react';

const userTable = (props) => { 
  return (
    <table>
      <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
      </thead>
      <tbody>
        {
          // console.log(props.users),
          props.users.length > 0 ? (
            props.users.map(user => {
              const { id, name, username } = user;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>
                    <button>Delete</button>
                    <button>Edit</button>
                  </td>
                </tr>
              )
            })
          ) : (
            <tr>
              <td colSpan={4}>User not found</td>
            </tr>
          )
        }
      </tbody>
  </table>
  )
}

export default userTable;