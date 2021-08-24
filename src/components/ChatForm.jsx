import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';

const Wrapper = styled.form`
  display: flex;
  padding: 1rem 0;
`;

const StyledButton = styled(Button)``;

const StyledTextInput = styled(TextInput)`
  flex-grow: 1;
  padding: 0;
  margin-right: 0.3rem;
`;

export default function ChatForm({ onSubmit }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setText('');
    onSubmit(text);
  }

  return (
    <Wrapper>
      <StyledTextInput value={text} onChange={e => setText(e.target.value)} />
      <StyledButton disabled={!text} onClick={handleSubmit}>
        Send
      </StyledButton>
    </Wrapper>
  );
}
