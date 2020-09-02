import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

import {
  Title, Form, Repositories, Error,
} from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
    full_name: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplore:repositories');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem('@GithubExplore:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o nome do repositório');
      return;
    }

    try {
      const { data: repository } = await api.get<Repository>(
        `/repos/${newRepo}`,
      );

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro ao buscar repositorio');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Logo - GitHub Explore" />
      <Title> Explore repositórios no GitHub </Title>
      <Form onSubmit={handleAddRepository} hasError={!!inputError}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite aqui"
        />
        <button type="submit"> Pesquisar </button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <a href="/" key={repository.full_name}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.owner.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size="20" />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
