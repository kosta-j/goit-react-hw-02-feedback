import s from './ButtonList.module.css';
import Button from '../Button/Button';

export default function ButtonList() {
  return (
    <ul className={s.buttonList}>
      <li className={s.item}>
        <Button buttonText="Good" />
      </li>
      <li className={s.item}>
        <Button buttonText="Neutral" />
      </li>
      <li className={s.item}>
        <Button buttonText="Bad" />
      </li>
    </ul>
  );
}
