import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileInfo,
  ProfileImg,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStatistics,
  ProfileStatsPart,
  ProfileStatsTittle,
  ProfileStatsQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <ProfileInfo>
        <ProfileImg src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileInfo>

      <ProfileStatistics>
        <ProfileStatsPart>
          <ProfileStatsTittle>Followers</ProfileStatsTittle>
          <ProfileStatsQuantity>{followers}</ProfileStatsQuantity>
        </ProfileStatsPart>
        <ProfileStatsPart>
          <ProfileStatsTittle>Views</ProfileStatsTittle>
          <ProfileStatsQuantity>{views}</ProfileStatsQuantity>
        </ProfileStatsPart>
        <ProfileStatsPart>
          <ProfileStatsTittle>Likes</ProfileStatsTittle>
          <ProfileStatsQuantity>{likes}</ProfileStatsQuantity>
        </ProfileStatsPart>
      </ProfileStatistics>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
