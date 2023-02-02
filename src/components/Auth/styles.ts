import styled from 'styled-components';

// Authform

export const Background = styled.div`
  height: 100vh;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const AuthWrapper = styled.section`
  width: 600px;
  min-width: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 30px;
  margin: 3rem 0;
`;

export const AuthLogo = styled.h1`
  width: 150px;
  margin: 10px auto;
`;

export const AuthLogoImg = styled.img`
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: #54bfcc;
  margin-bottom: 4rem;
`;

export const Form = styled.form``;

export const AuthButton = styled.button`
  width: 100%;
  height: 46px;
  background-image: linear-gradient(
    to right,
    #e32586 0%,
    #54bfcc 51%,
    #e32586 100%
  );
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  transition: 0.5s;
  background-size: 200% auto;
  color: #fff;
  border-radius: 10px;
  display: block;
  margin: 1rem 0 1.4rem;

  :hover {
    background-position: right center;
  }

  :disabled {
    background-image: linear-gradient(
      to right,
      #dcb8ca 0%,
      #98c3c8 51%,
      #dcb8ca 100%
    );
    cursor: no-drop;
  }
`;

export const AuthText = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: #555;
`;

export const LinkText = styled.span`
  color: #333;
  font-weight: 700;
  margin-left: 10px;
`;

// CustomInput

export const InputWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

export const Label = styled.label`
  color: #333;
  font-weight: 600;
  font-size: 0.94rem;
`;

export const Input = styled.input`
  height: 40px;
  padding: 0 4px;
  font-size: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ff0098;
  color: #555;

  ::placeholder {
    color: #999;
  }
`;

// socialLogin

export const SocialWrapper = styled.div`
  width: 100%;
  margin: 3rem 0 1rem;
`;

export const SocialTitle = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  color: #777;
  margin-bottom: 1rem;
  position: relative;

  &::before {
    width: 150px;
    height: 1px;
    background-color: #ddd;
    position: absolute;
    left: 4.2rem;
    top: 0.8rem;
    content: '';
  }

  &::after {
    width: 150px;
    height: 1px;
    background-color: #ddd;
    position: absolute;
    right: 4.2rem;
    top: 0.8rem;
    content: '';
  }
`;

export const SocialList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocicalItem = styled.li`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(2) {
    margin: 0 1.5rem;
    border: 1px solid #ddd;
  }
`;

export const Icon = styled.span`
  display: block;
`;

export const IconImg = styled.img``;
