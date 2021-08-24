import React, { useState } from 'react';
import UserForm from './components/UserForm';
import Chat from './components/Chat';
import styled from 'styled-components';

const Layout = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  const [user, setUser] = useState(null);

  return (
    <Layout>
      <h1>Minimalist chat</h1>
      {/* Ghetto router 😎 */}
      {user ? <Chat user={user} /> : <UserForm onSumbit={setUser} />}
    </Layout>
  );
}

export default App;
