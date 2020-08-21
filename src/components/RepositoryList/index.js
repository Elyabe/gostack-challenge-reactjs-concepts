import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Repository from '../Repository';

import './Style.css';

function RepositoryList(){
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
  
    const repositoriesIsEmpty = repositories.length === 0;

    return (
      <div>
        { repositoriesIsEmpty && <h1>Não há repositórios :|</h1> }
        { !repositoriesIsEmpty &&
          <ul data-testid="repository-list">
              { repositories.map( repository => {
                return (
                    <li key={repository.id}>
                      <Repository 
                        data = {repository}
                        handleRemoveRepository={handleRemoveRepository}
                      />
                    </li>
                );
                })
              }
          </ul>

        }
  
        <button onClick={handleAddRepository}>Adicionar</button>
        
      </div>
  
    );
}

export default RepositoryList;