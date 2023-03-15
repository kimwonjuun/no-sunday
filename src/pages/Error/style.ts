import { BiMessageError } from 'react-icons/bi';
import styled from 'styled-components';
import { AuthButton } from 'components/Auth/styles';

export const Wrapper = styled.div`
  height: calc(100vh - 42px - 60px);
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorMsgWrapper = styled.section`
  flex-direction: column;
  text-align: center;
`;

export const ErrorIcon = styled(BiMessageError)`
  font-size: 12rem;
  color: #36b6c6;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  color: #555;
  font-weight: 500;
`;

export const Text = styled.p`
  color: #777;
`;

export const Button = styled(AuthButton)`
  display: block;
  margin: 3rem auto 2rem;
  width: 120px;
`;
