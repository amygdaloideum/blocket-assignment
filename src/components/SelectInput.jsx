import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
`;

const Input = styled.select`
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid grey;
  height: 2.2rem;
`;

export default function SelectInput({ label, ...rest }) {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Input {...rest} />
    </Wrapper>
  );
}
