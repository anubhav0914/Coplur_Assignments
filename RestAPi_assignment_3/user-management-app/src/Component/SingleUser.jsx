import React, { useState } from 'react';
import "/home/anubhav/Coplur_Course/Assignment/RestAPi_assignment_3/user-management-app/src/UserList.css"
const SingleUser = () => {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5034/api/UserControllers/GetById/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => {
        console.error('Not foud data for this id', err);
        setUser(null);
      });
  };

  return (
    <div className="single-user-container">
      <form onSubmit={handleSubmit} className="user-form">
        <label htmlFor="userId">Enter User ID:</label>
        <input
          id="userId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {user && (
        <table className="user-details-table">
          <thead>
            <tr>
              <th colSpan="2">User Details</th>
            </tr>
          </thead>
          <tbody>
             <tr>
              <td><strong>ID</strong></td>
              <td>{user.id}</td>
            </tr>
            <tr>
              <td><strong>Name</strong></td>
              <td>{user.fullName}</td>
            </tr>
            <tr>
              <td><strong>Email</strong></td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td><strong>Address</strong></td>
              <td>{user.address}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SingleUser;
