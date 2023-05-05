import styled from '@emotion/styled';

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  margin: 0;
  align-items: center;

  .list-item {
    display: flex;
    align-items: center;
  }
`;

const StatisticsResultUl = styled.ul`
  flex-direction: column;
  list-style-type: none;

`;

export { Ul, StatisticsResultUl };
