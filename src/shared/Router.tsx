import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import ScrollToTopButton from '@/components/ScrollTopTopButton/ScrollToTopButton';
import Detail from '@/pages/Detail/Detail';
import Error from '@/pages/Error/Error';
import Login from '@/pages/Login/Login';
import Main from '@/pages/Main/Main';
import Media from '@/pages/Media/Media';
import Mypage from '@/pages/Mypage/Mypage';
import SignUp from '@/pages/SignUp/SignUp';
import ScrollUpto from '@/components/ScrollUpTo';

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
