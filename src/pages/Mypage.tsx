import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authService } from '../common/firebase';

export default function Mypage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!authService.currentUser) {
      alert('로그인이 필요합니다.');
      return navigate('/login', { state: pathname });
    }
  }, []);

  return <div>Mypage</div>;
}
