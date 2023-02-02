import {
  Dispatch,
  FormEvent,
  ForwardedRef,
  SetStateAction,
  useState,
} from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { krRegex, trimmingKeyword } from '../../common/util';
import { useAppSelector } from '../../hooks/useRedux';
import { ArtistsTypes } from '../../redux/modules/ArtistsSlice';
import { Input, InputSearchIcon, SearchInputArea } from './style';

interface SearchInputProps {
  inputRef: ForwardedRef<HTMLDivElement>;
  setShowSearchInput: Dispatch<SetStateAction<boolean>>;
}

const SearchInput = ({ inputRef, setShowSearchInput }: SearchInputProps) => {
  const [keyword, setKeyword] = useState<string>('');
  const navigate = useNavigate();
  const { artists } = useAppSelector((state) => state.artists);

  // 검색결과 submit 함수
  const submitKeyword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 검색 키워드 공백제거, 소문자 변환
    const searchKeyword = trimmingKeyword(keyword);

    if (!searchKeyword) {
      alert('아티스트 이름을 입력해주세요.');
      return;
    }

    let searchResult: ArtistsTypes | null = {};

    // 한글일 경우 nameKr에서, 영문일 경우 name에서 일치하는 데이터 찾기
    if (krRegex.test(searchKeyword)) {
      searchResult =
        artists.find(
          (artist) =>
            trimmingKeyword(artist?.nameKr || '없음') === searchKeyword,
        ) ?? null;
    } else {
      searchResult =
        artists.find(
          (artist) => trimmingKeyword(artist?.name || '없음') === searchKeyword,
        ) ?? null;
    }

    // 검색결과 있을 경우 해당 아티스트 페이지로 아티스트 정보와 함께 이동
    if (searchResult) {
      navigate(`/${searchResult.channelId}`, {
        state: { item: searchResult },
      });
    } else {
      // 없으면 (searchResult === null) 에러 페이지로 이동
      navigate(`/error`, {
        state: { msg: '아티스트 검색 결과를 찾을 수 없습니다.' },
      });
    }

    setShowSearchInput(false);
  };

  return (
    <SearchInputArea ref={inputRef}>
      <InputSearchIcon />
      <Form onSubmit={submitKeyword}>
        <Input
          placeholder="아티스트 검색"
          value={keyword}
          maxLength={32}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </Form>
    </SearchInputArea>
  );
};

export default SearchInput;
