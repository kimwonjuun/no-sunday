import {
  CommentInfo,
  CommentText,
  CreatedAt,
  ItemWrapper,
  Profile,
  ProfileImg1,
  ProfileWrapper1,
  Writer,
} from './styles';
import { timeToLocaleString } from '@/utils/Date';

const CommentItem = ({ item }: { item: any }) => {
  return (
    <ItemWrapper>
      <CommentInfo>
        <ProfileWrapper1 id={item.id}>
          <Profile>
            <ProfileImg1 src={item.profileImg} />
          </Profile>
          <Writer>{item.name ?? '익명'}</Writer>
        </ProfileWrapper1>
        <CreatedAt>{timeToLocaleString(item.createdAt)}</CreatedAt>
      </CommentInfo>
      <CommentText>{item.comment}</CommentText>
    </ItemWrapper>
  );
};

export default CommentItem;
