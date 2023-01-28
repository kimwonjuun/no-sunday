import styled from 'styled-components';
import { FiArrowUp } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleShowButton = () => {
    const { scrollY } = window;
    scrollY > 200 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleShowButton);

    return () => {
      window.removeEventListener('scroll', toggleShowButton);
    };
  }, []);

  return (
    <Button onClick={scrollToTop} showButton={showButton}>
      <ArrowIcon />
    </Button>
  );
};

export default ScrollToTopButton;

const Button = styled.div<{ showButton: boolean }>`
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
