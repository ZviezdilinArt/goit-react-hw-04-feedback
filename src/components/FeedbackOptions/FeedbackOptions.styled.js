import styled from 'styled-components';
export const List = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  gap: 40px;
`;

export const Button = styled.button`
  padding: 15px 10px;
  min-width: 100px;
  border-radius: 5px;
  border: 1px solid bclack;
  background-color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 400ms linear;
  color: black;
  &:hover {
    background-color: blue;
  }
  `;