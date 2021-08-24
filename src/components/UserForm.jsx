import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import Button from './Button';

const InputContainer = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 .5rem;
  & > button {
    width: 100%;
  }
`;

export default function UserForm({ onSumbit }) {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  return (
    <form>
      <InputContainer>
        <SelectInput
          label="Avatar"
          value={avatar}
          onChange={e => setAvatar(e.target.value)}
        >
          <option value="" disabled>
            --
          </option>
          <option>🦁</option>
          <option>🦔</option>
          <option>🦝</option>
        </SelectInput>

        <TextInput
          label="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </InputContainer>
      <ButtonContainer>
        <Button
          disabled={!username || !avatar}
          onClick={() => onSumbit({ username, avatar })}
        >
          Join chat
        </Button>
      </ButtonContainer>
    </form>
  );
}
