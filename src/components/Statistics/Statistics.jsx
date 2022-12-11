import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const statItems = stats.map(statItem => (
    <StatisticsItem
      key={statItem.id}
      label={statItem.label}
      percentage={statItem.percentage}
    />
  ));
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>{statItems}</ul>
    </section>
  );
};

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
