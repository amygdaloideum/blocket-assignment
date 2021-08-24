import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useChat from '../hooks/useChat';
import ChatMsg from './ChatMsg';
import ChatForm from './ChatForm';

const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 25rem;
  min-width: 25rem;
  padding: 0.5rem;

  @media (max-width: 800px) {
    max-width: 100%;
    min-width: 0;
  }
`;

const ChatWindow = styled.div`
  height: 20rem;
  border: 1px solid grey;
  border-radius: 1rem;
  overflow-y: scroll;
  padding: 1rem 2rem;
`;

export default function Chat({ user }) {
  const { chat, sendMsg } = useChat(user);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  if (!chat) return null;

  return (
    <Wrapper>
      <ChatWindow>
        {chat.map((msg, i) => (
          <ChatMsg key={i} msg={msg} />
        ))}
        <div ref={messagesEndRef} />
      </ChatWindow>
      <ChatForm onSubmit={sendMsg} />
    </Wrapper>
  );
}
