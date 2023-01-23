import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiSearch, FiUser } from 'react-icons/fi';

export default function Header() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <HeaderWrapper>
      <Logo>
        <Link to={'/'}>
          <LogoImg src="/assets/logo.png" />
        </Link>
      </Logo>
      {/* 비 로그인 시 */}
      {/* <Button type="button" onClick={goToLogin}>
        로그인
      </Button> */}

      {/* 로그인 시 */}
      <Icons>
        <SearchIcon />
        <Link to={'/mypage'}>
          <UserIcon />
        </Link>
      </Icons>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  padding: 10px 8%;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  width: 180px;
  margin-right: auto;
`;

const LogoImg = styled.img`
  width: 90%;
`;

const Button = styled.button`
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

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const SearchIcon = styled(FiSearch)`
  font-size: 26px;
  margin-right: 26px;
  cursor: pointer;
`;

const UserIcon = styled(FiUser)`
  font-size: 26px;
  padding-top: 10px;
  cursor: pointer;
`;
