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
    const payload = {
      title: `Repository added from FrontEnd at ${Date.now()}`,
      url: "http://github.com/Elyabe",
      techs: ["NodeJS", "Tech2"]
    };

    const response = await api.post('/repositories', payload );
    const repository = response.data;

    setRepositories([...repositories, repository]);

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
                    title={repository.title}
                    url={repository.url}
                    techs={repository.techs}
                    onClick={handleRemoveRepository}
                  />
                </li>
            );
            })
          }
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
