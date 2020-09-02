import React from 'react';
import { Title, Form } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Logo - GitHub Explore" />
    <Title> Explore repositórios no GitHub </Title>
    <Form>
      <input placeholder="Digite aqui" />
      <button type="submit"> Pesquisar </button>
    </Form>
  </>
);

export default Dashboard;
