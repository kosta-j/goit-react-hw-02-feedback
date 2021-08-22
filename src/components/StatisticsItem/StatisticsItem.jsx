import s from './StatisticsItem.module.css';

export default function StatisticsItem({ name, quantity }) {
  return (
    <div className={s.statisticsItem}>
      {name}: {quantity}
    </div>
  );
}
