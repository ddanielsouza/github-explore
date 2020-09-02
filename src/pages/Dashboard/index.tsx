import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Logo - GitHub Explore" />
    <Title> Explore repositórios no GitHub </Title>
    <Form>
      <input placeholder="Digite aqui" />
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

export default Dashboard;
