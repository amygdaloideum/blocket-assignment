import React, { useState } from 'react';
import styled from 'styled-components';

const SystemMsg = styled.div`
  color: grey;
  padding: 0.5rem 0;
`;

const UserMsg = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const Username = styled.span`
  margin-right: 0.5rem;
`;

export default function ChatMsg({ msg, ...rest }) {
  if (msg.src == 'system') return <SystemMsg {...rest}>{msg.text}</SystemMsg>;

  return (
    <UserMsg {...rest}>
      <Avatar>{msg.user.avatar}</Avatar>
      <Username>{msg.user.username}:</Username>
      <span>{msg.text}</span>
    </UserMsg>
  );
}
