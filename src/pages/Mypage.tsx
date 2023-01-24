import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { authService } from '../common/firebase';

export default function Mypage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(authService).then(() => {
      alert('로그아웃 되었습니다. 다시 만나요!');
      navigate('/', { replace: true });
    });
  };

  return (
    <div>
      Mypage
      <p onClick={handleLogout}>로그아웃</p>
    </div>
  );
}
