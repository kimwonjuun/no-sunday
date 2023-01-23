import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterText>Copyright 2022. Bounce All rights reserved.</FooterText>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  height: 60px;
  border-top: 1px solid #ddd;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  font-size: 0.8rem;
  color: #777;
  text-align: center;
`;
