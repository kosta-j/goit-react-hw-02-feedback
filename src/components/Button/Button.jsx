import s from './Button.module.css';

export default function Button({ buttonText }) {
  return (
    <button type="button" className={s.btn}>
      {buttonText}
    </button>
  );
}
