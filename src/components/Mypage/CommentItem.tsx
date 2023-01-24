import styled from 'styled-components';

const CommentItem = () => {
  return (
    <ItemWrapper>
      <CommentInfo>
        <ProfileWrapper>
          <Profile>
            <ProfileImg src="/assets/default_profile.png" />
          </Profile>
          <Writer>작성자</Writer>
        </ProfileWrapper>
        <CreatedAt>2023.01.20 11:11</CreatedAt>
      </CommentInfo>
      <CommentText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quisquam
        minus, accusamus illum dolorem dignissimos maiores laudantium
        repudiandae doloribus dolores! Mollitia repudiandae eveniet quo fugit!
        Dolore in quas reprehenderit accusantium.
      </CommentText>
    </ItemWrapper>
  );
};

export default CommentItem;

const ItemWrapper = styled.div`
  width: 500px;
  min-height: 140px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 28px;
  margin: 0 2.5rem 2rem 0;
  cursor: pointer;

  &:nth-child(2n) {
    margin-right: 0;
  }
`;

const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Profile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
`;

const Writer = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #333;
  margin-left: 10px;
`;

const CreatedAt = styled.p`
  font-size: 14px;
  color: #777;
`;

const CommentText = styled.p`
  color: #343434;
  margin: 1rem 0;

  &:hover {
    color: #54bfcc;
  }
`;
