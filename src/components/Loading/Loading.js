// Loading.js
import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Carregando...</p>
    </div>
  );
}

export default Loading;
