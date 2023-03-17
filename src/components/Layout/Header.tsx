import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchInput from './SearchInput';
import {
  Button,
  HeaderWrapper,
  Icons,
  Logo,
  LogoImg,
  SearchIcon,
  UserIcon,
} from './style';

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
  }, [searchInputRef, showSearchInput]);

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
