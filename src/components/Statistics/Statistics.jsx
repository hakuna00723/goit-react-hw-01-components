import PropTypes from 'prop-types';
import {
  StatisticsBox,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsTxt,
} from './Statistics.styled';

export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <StatisticsBox>
      <StatisticsTitle>{title}</StatisticsTitle>

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id}>
              <StatisticsTxt>{label}</StatisticsTxt>
              <span> {percentage}%</span>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
