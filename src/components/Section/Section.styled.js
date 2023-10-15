import styled from 'styled-components';

export const Container = styled.section`
  padding: 0px 70px;
  width: 600px;

  &:not(:last-child) {
    margin-bottom: 70px;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
`;