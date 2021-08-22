import StatisticsItem from '../StatisticsItem/StatisticsItem';
import s from './Statistics.module.css';

export default function StatisticsList() {
  return (
    <ul className={s.statisticsList}>
      <li className={s.item}>
        <StatisticsItem name="Good" quantity="3" />
      </li>
      <li className={s.item}>
        <StatisticsItem name="Neutral" quantity="2" />
      </li>
      <li className={s.item}>
        <StatisticsItem name="Bad" quantity="2" />
      </li>
    </ul>
  );
}
