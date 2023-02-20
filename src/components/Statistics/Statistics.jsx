import PropTypes from 'prop-types';

export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <section>
      <h2>{title}</h2>

      <ul>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id}>
              <span>{label}</span>
              <span> {percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
