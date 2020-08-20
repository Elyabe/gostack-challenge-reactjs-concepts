import React, { useEffect, useState } from "react";
import api from './services/api';

import Repository from './components/Repository';

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
    await api.delete(`/repositories/${id}`);

    const repositoriesUpdated = repositories.filter( repository => repository.id !== id );

    setRepositories(repositoriesUpdated);
  }

  return (
    <div>
      <ul data-testid="repository-list">
          {repositories.map( repository => {
            return (
                <li key={repository.id}>
                  <Repository 
                    id={repository.id}
                    title={repository.title}
                    url={repository.url}
                    techs={repository.techs}
                    handleRemoveRepository={handleRemoveRepository}
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
