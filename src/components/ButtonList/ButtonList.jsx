import Button from '../Button/Button';
import s from './ButtonList.module.css';

export default function ButtonList() {
  return (
    <ul className={s.buttonList}>
      <li className={s.item}>
        <Button
          buttonText="Good"
          onClick={() => {
            console.log('good clicked');
          }}
        />
      </li>
      <li className={s.item}>
        <Button
          buttonText="Neutral"
          onClick={() => {
            console.log('neutral clicked');
          }}
        />
      </li>
      <li className={s.item}>
        <Button
          buttonText="Bad"
          onClick={() => {
            console.log('bad clicked');
          }}
        />
      </li>
    </ul>
  );
}
