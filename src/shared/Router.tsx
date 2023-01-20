import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Media from '../pages/Media';
import Mypage from '../pages/Mypage';
import SignUp from '../pages/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:artist" element={<Media />} />
        <Route path="/:artist/:mediaId" element={<Detail />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
