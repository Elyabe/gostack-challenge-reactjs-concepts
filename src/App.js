import React, { useEffect, useState } from "react";
import api from './services/api';

import Repositoy from './components/Repository';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then( response => {
      setRepositories(response.data);
    })
  }, [])
  
  async function handleAddRepository() {
    console.log('handleAddClicked')
  }

  async function handleRemoveRepository(id) {
    console.log('handleRemoveClicked')
  }

  return (
    <div>
      <ul data-testid="repository-list">
          {repositories.map( repository => {
            return (
                <li key={repository.id}>
                  <Repositoy 
                    onClick={handleRemoveRepository}
                  />
                </li>
            );
          })}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
