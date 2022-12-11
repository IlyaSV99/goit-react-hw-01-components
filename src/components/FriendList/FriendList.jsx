import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';
import FriendListItem from './FriendListItem';

export const FriendList = ({ friends }) => {
  const items = friends.map(({ avatar, name, isOnline, id }) => (
    <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
  ));

  return <ul className={css.friendList}>{items}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
