import PropTypes from 'prop-types';
import css from 'components/Profile/Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt={username}
          className={css.avatar}
          width={150}
          height={150}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers.toLocaleString('en')}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views.toLocaleString('en')}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes.toLocaleString('en')}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
};

export default Profile;


