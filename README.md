# 💗 Project Bounce

![bounce-mockup](https://user-images.githubusercontent.com/82587107/215421989-b931e89e-64f7-44c5-ac07-bceebea8e0a4.jpg)

- 프로젝트 기간 : 2023.01.20 ~ 2023.01.30

🔗 [배포링크](https://no-sunday.vercel.app/)

🔗 [시연영상 유튜브](https://www.youtube.com/watch?v=HrjDzbOoSXA)

<br/>

### 소개

- 바운스는 아티스트와 팬을 이어주는 팬덤 라이프 플랫폼 입니다.
- 각 아티스트별로 공식 채널의 유튜브 영상 리스트를 가져옵니다.
- 사용자들은 유튜브 영상에 좋아요와 댓글을 남길 수 있습니다.

<br/>
<br/>

## 📝 회고 및 관련 기록

🎉 [프로젝트 S.A](https://www.notion.so/1-S-A-93fa52a5a2b64d05ad0175e5e203d906)

📑 [프로젝트 노션](https://www.notion.so/1-a2a5bfc926a2441da9a79b2cb7469090)

📓 [프로젝트를 마치며, KPT 회고](https://k1mwnjn.tistory.com/89)

<br/>
<br/>

## 🙌 팀원 소개

| 이름   | 깃허브                                           |
| ------ | ------------------------------------------------ |
| 김원준 | [@kimwonjuun](https://github.com/kimwonjuun)     |
| 박진양 | [@Jinyang-Park](https://github.com/Jinyang-Park) |
| 이유정 | [@yujleee](https://github.com/yujleee)           |
| 정다인 | [@dada992](https://github.com/dada992)           |

역할 분담 관련해서는 프로젝트 노션을 참고해주세요.

📑 [프로젝트 노션](https://www.notion.so/1-a2a5bfc926a2441da9a79b2cb7469090)

<br/>
<br/>

## 🖥 기술 스택

### Front-end

`React` `Redux-toolkit` `Redux-Thunk` `Axios` `TypeScript` `Styled-components`

### Back-end

`firebase`

### Deploy

`Vercel`

<br/>
<br/>

## 🗂 디렉토리 구조

```
📦public
 ┣ 📂assets
 ┣ 📂favicon
 ┗ 📜index.html
📦src
 ┣ 📂common
 ┣ 📂components
 ┃ ┣ 📂Auth
 ┃ ┣ 📂Detail
 ┃ ┣ 📂Layout
 ┃ ┣ 📂Main
 ┃ ┣ 📂Mypage
 ┃ ┣ 📜ScrollToTopButton.tsx
 ┃ ┣ 📜ScrollUpTo.tsx
 ┃ ┗ 📜SearchList.tsx
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂redux
 ┣ 📂shared
 ┣ 📂utils
 ┣ 📜App.css
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
```

- assets: 로고 및 이미지 파일들
- components:
  - common: 공통적으로 쓰이는 파일들
  - Auth: 로그인, 회원가입 관련 컴포넌트
  - Detail : 유튜브 상세페이지 관련 컴포넌트
  - Layout: 헤더, 푸터, 검색창 컴포넌트
  - Main: 메인 페이지 관련 컴포넌트
  - Mypage : 마이페이지
- hooks : 커스텀 훅 컴포넌트들
- redux : 리덕스 관련 컴포넌트들
- pages: 각 페이지 컴포넌트들
- shared: 라우터 설정 파일
- utils: 기타 공용적으로 사용하는 라이브러리 관련 파일들

<br/>
<br/>

## 🤝 규칙

- **커밋 컨벤션 (유다시티 커밋 컨벤션 참고!)**
  | 키워드 | 설명 |
  | --- | --- |
  | feat | 새로운 기능을 추가한 경우 |
  | fix | 버그를 고친 경우 |
  | refactor | 코드 리팩토링 |
  | docs | 문서를 수정한 경우 |
  | perf | 성능개선 |
  | chore | 그런트 작업 업데이트, 프로덕션 코드 변경 없음 |

- **코드 컨벤션**
  - prettierrc로 prettier 설정 통일
  - 변수/함수/핸들러함수 이름 통일
    - 변수는 명사형 / 복수데이터 변수는 명사복수형
      - ex) `todo`
      - ex) `todos`
  - 핸들러함수명은 handle을 앞에 붙이기
    - ex) `handleTodoFormSubmit`

<br/>
<br/>

## 👥 깃허브 협업 방식

💡 하나의 메인 브랜치인 `main` 중점으로 운용하며 PR을 활용했습니다.

- 기능 구현을 완료하면 main 브랜치로 `Pull Request` 요청
- `Vercel`의 Countinuous Deploy를 활용해 Preview 사이트 테스트
- 팀원 1명 이상 리뷰 후 승인, Merge 진행

<br/>
<br/>

## 💡 구현 기능

- **헤더**
  - 로그인 / 비 로그인 시 아이콘, 로그인 버튼 다르게 노출
  - 각 아티스트 유튜브 목록으로 이동할 수 있는 검색 기능
- **메인페이지**
  - 파이어베이스에서 아티스트 정보 및 이미지를 로드하여 카드 생성
  - 아티스트 카드를 클릭하여 미디어 페이지로 이동
- **미디어 페이지**
  - 아티스트 클릭 시 유튜브 API로 해당 아티스트 유튜브 영상 리스트 보기
- **유튜브 영상 페이지**
  - 미디어 페이지에서 클릭한 아티스트의 유튜브 영상 보기 기능
  - 댓글 CRD 기능을 통하여 유튜브 영상에 대한 코멘트 달기 기능
  - 좋아요 기능
  - 소셜 공유 기능
  - 인기순 미디어(유튜브 영상) 표시
- **마이페이지**
  - 유저별 프로필 이미지, 닉네임 렌더링
  - 프로필 이미지 변경
  - 유저가 좋아요 한 영상들 리스트 렌더링
  - 유저가 작성한 댓글 리스트 렌더링
  - 로그아웃
- **로그인 / 회원가입 페이지**
  - 이메일 로그인, 회원가입 + 유효성검사, disabled
  - 소셜로그인

<br/>
<br/>

## 🔥 트러블 슈팅

🔗 [파이어베이스 로그인 유지 이슈](https://github.com/kimwonjuun/no-sunday/issues/52)

🔗 [좋아요 기능 구현 관련 이슈](https://github.com/kimwonjuun/no-sunday/issues/53)

이 외의 트러블 슈팅은 팀 멤버들의 블로그를 참조해주세요.

<br/>
<br/>
