import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiSearch, FiUser } from 'react-icons/fi';
import SearchInput from './SearchInput';

export default function Header() {
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // 로그인 확인을 위한 세션스토리지 키 확인. 키 존재? => 로그인 되어있음 / 없음 => 로그인 안 되어있음
  const isLoggedIn = sessionStorage.key(0);

  const goToLogin = (): void => {
    navigate('/login');
  };

  // 검색창 외부 클릭 여부 판단
  const clickOutside = (e: any) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(e.target as Node)
    ) {
      setShowSearchInput(false);
    }
  };

  // 검색창이 보여지고 있는 경우 검색창 바깥 헤더 클릭 시 이벤트 추가/삭제 하는 useEffect
  useEffect(() => {
    if (showSearchInput) {
      // 검색창 보여지고 있을 때 바깥 클릭 시 사라지는 이벤트 추가
      document.addEventListener('mouseenter', clickOutside);
    }
    return () => {
      // 이벤트 삭제
      document.removeEventListener('mouseenter', clickOutside);
    };
  }, [searchInputRef]);

  return (
    <HeaderWrapper onClick={clickOutside}>
      <Logo>
        <Link to={'/'}>
          <LogoImg src="/assets/logo.png" />
        </Link>
      </Logo>
      {/* 비 로그인 시 */}
      {!isLoggedIn && (
        <Button type="button" onClick={goToLogin}>
          로그인
        </Button>
      )}

      {/* 로그인 시 */}
      {isLoggedIn && (
        <Icons>
          {showSearchInput && (
            <SearchInput
              inputRef={searchInputRef}
              setShowSearchInput={setShowSearchInput}
            />
          )}
          <SearchIcon onClick={() => setShowSearchInput(true)} />
          <Link to={'/mypage'}>
            <UserIcon />
          </Link>
        </Icons>
      )}
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
  position: relative;
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
