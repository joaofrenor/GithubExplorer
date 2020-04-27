import React from 'react';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer" />
    <Title>Explore Repositories on GitHub</Title>

    <Form>
      <input placeholder="Type repository's name" />
      <button type="submit">Search</button>
    </Form>
    <Repositories>
      <a href="test">
        <img
          src="https://avatars1.githubusercontent.com/u/37910709?s=460&v=4"
          alt="Diego"
        />
      </a>
    </Repositories>
  </>
);
export default Dashboard;
