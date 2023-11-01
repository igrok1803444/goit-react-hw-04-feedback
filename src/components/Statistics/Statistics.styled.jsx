import styled from 'styled-components';
export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 0 auto;

  & li {
    font-size: 20px;
    margin-bottom: 8px;
  }
  & li:last-child {
    margin-bottom: 0;
  }
`;
