import styled from 'styled-components';
export const ButtonsList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;

  margin: 0 auto;

  width: 400px;
`;
export const FeedbackButton = styled.button`
  padding: 12px 24px;

  background-color: #6f6fff;

  border-radius: 16px;
  border-color: inherit;
  border-style: solid;

  font-size: 16px;
  color: white;

  &:hover,
  &:focus {
    background-color: #3c3c8f;
  }
`;
