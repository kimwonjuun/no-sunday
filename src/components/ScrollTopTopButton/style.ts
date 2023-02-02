import { FiArrowUp } from 'react-icons/fi';
import styled from 'styled-components';

export const Button = styled.div<{ showButton: boolean }>`
  width: 54px;
  height: 54px;
  border-radius: 50%;

  position: fixed;
  right: 2rem;
  bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: ${(props) => (props.showButton ? 1 : 0)};
  transition: opacity 300ms ease-in-out;

  background-image: linear-gradient(
    to bottom,
    #e32586 0%,
    #e32586 20%,
    #54bfcc 100%
  );

  &:hover {
    opacity: 0.8;
  }
`;

export const ArrowIcon = styled(FiArrowUp)`
  font-size: 28px;
  color: #fff;
  cursor: pointer;
`;
