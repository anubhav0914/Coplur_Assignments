import React, { useEffect, useState } from 'react';
import '/home/anubhav/Coplur_Course/Assignment/RestAPi_assignment_3/user-management-app/src/UserList.css'

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5034/api/UserControllers/getAll') 
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error fetching users:', err));
      console.log(users)
  }, []);

  return (
     <div className="user-list-container">
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Address</th>

          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="3" className="no-data">No users found</td>
            </tr>
          ) : (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>

              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
