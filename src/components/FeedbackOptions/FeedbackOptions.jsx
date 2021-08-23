import Button from '../Button/Button';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.buttonList}>
      {/* {console.log(options, onLeaveFeedback)} */}
      {options.map(option => (
        <li key={option} className={s.item}>
          <Button buttonText={option} onClick={() => onLeaveFeedback(option)} />
        </li>
      ))}
    </ul>
  );
}
