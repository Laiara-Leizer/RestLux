import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UserDetailsPage.css';

function UserDetailsPage() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://apifakedelivery.vercel.app/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user details:', error));
  }, [id]);

  if (!user) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="user-details">
      <h1>{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Senha:</strong> {user.senha}</p>
      <p><strong>Saldo:</strong> R$: {user.saldo}</p>
    </div>
  );
}

export default UserDetailsPage;

/*

[{"id":"1",
"name":"Gabriel Souza",
"email":"gabriel@gmail.com",
"senha":"senhadogabriel",
"saldo":"0.90"}
,
{"id":"2",
"name":"Diego Candido",
"email":"diego@gmail.com",
"senha":"senhadodiego",
"saldo":"127.23"}]

id
name
email
senha
saldo


*/