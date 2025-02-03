import React from 'react';
import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import './styles.css'

function App() {
  return  <h1>ciao</h1>
}


// Prendi il contenitore esistente nell'HTML
const container = document.getElementById('flights-container');

// Assicurati che il contenitore esista prima di creare il root
if (container) {
  ReactDOM.createRoot(container).render(<App />);
} else {
  console.error("Elemento #flights-container non trovato nel DOM");
}
console.log("cazzo");
export default App
