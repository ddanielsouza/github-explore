import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface Repository {
  fullname: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState< Repository[] >([]);
  const [newRepo, setNewRepo] = useState('');

  async function handleAddRepository(event: React.FormEvent<HTMLFormElement>):Promise<void> {
    event.preventDefault();

    const { data: repository } = await api.get(`/repos/${newRepo}`);
    setRepositories([...repositories, repository]);
  }

  return (
    <>
      <img src={logoImg} alt="Logo - GitHub Explore" />
      <Title> Explore repositórios no GitHub </Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite aqui"
        />
        <button type="submit"> Pesquisar </button>
      </Form>

      <Repositories>
        <a href="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Teste"
          />

          <div>
            <strong> Auuuuuuuuuuuuuuuuuuuu </strong>
            <p>ggdrnjsksjn</p>
          </div>
          <FiChevronRight size="20" />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
