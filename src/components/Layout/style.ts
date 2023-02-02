import { FiSearch, FiUser } from 'react-icons/fi';
import styled from 'styled-components';

// 푸터

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 60px;
  border-top: 1px solid #ddd;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.p`
  font-size: 0.8rem;
  color: #777;
  text-align: center;
`;

// 헤더

export const HeaderWrapper = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  padding: 10px 8%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  width: 180px;
  margin-right: auto;
`;

export const LogoImg = styled.img`
  width: 90%;
`;

export const Button = styled.button`
  width: 100px;
  height: 42px;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  background-color: #54bfcc;

  &:hover {
    background-color: #36b6c6;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchIcon = styled(FiSearch)`
  font-size: 26px;
  margin-right: 26px;
  cursor: pointer;
`;

export const UserIcon = styled(FiUser)`
  font-size: 26px;
  padding-top: 10px;
  cursor: pointer;
`;

// 검색창

export const SearchInputArea = styled.div`
  position: absolute;
  width: 260px;
  height: 42px;
  top: 0;
  right: 3rem;
`;

export const Input = styled.input`
  width: 260px;
  height: 42px;
  box-sizing: border-box;
  border-radius: 42px;
  background-color: #f1f1f1;
  padding: 0 10px 0 46px;
  font-size: 0.9rem;
  color: #555;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const InputSearchIcon = styled(FiSearch)`
  position: absolute;
  top: 8px;
  left: 10px;
  font-size: 24px;
  color: #bbb;
`;

export const Form = styled.form``;
