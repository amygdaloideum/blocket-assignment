import styled from 'styled-components';

export default styled.button`
  background: LightCoral;
  border: none;
  border-radius: 0.3rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  color: black;
  transition: all 0.2s linear;
  min-height: 2.2rem;
  height: 2.2rem;

  &:disabled {
    background: grey;
    color: darkgrey;
  }
`;
