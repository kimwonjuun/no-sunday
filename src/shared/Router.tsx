import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Detail from '../pages/Detail';
import Error from '../pages/Error';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Media from '../pages/Media';
import Mypage from '../pages/Mypage';
import SignUp from '../pages/SignUp';
import ScrollUpto from '../components/Mypage/ScrollUpTo';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollUpto />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:artist" element={<Media />} />
        <Route path="/:artist/:mediaId" element={<Detail />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
