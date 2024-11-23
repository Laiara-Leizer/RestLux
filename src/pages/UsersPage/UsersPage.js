import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UsersPage.css';

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://apifakedelivery.vercel.app/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="users-page">
      <h1>Users</h1>
      <ul className="users-list">
        {users.map(user => (
          <li key={user.id} className="user-item">
            <Link to={`/users/${user.id}`}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;

