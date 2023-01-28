import styled from 'styled-components';

const CommentItem = ({ item }: { item: any }) => {
  return (
    <ItemWrapper>
      <CommentInfo>
        <ProfileWrapper id={item.id}>
          <Profile>
            <ProfileImg src={item.profileImg} />
          </Profile>
          <Writer>{item.name ?? '익명'}</Writer>
        </ProfileWrapper>
        <CreatedAt>{new Date(item.createdAt).toLocaleString()}</CreatedAt>
      </CommentInfo>
      <CommentText>{item.comment}</CommentText>
    </ItemWrapper>
  );
};

export default CommentItem;

const ItemWrapper = styled.div`
  width: 400px;
  min-height: 140px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 28px;
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
