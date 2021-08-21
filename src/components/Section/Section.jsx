import s from './Section.module.css';
import Title from '../Title/Title';
import ButtonList from '../ButtonList/ButtonList';

export default function Section() {
  return (
    <section className={s.section}>
      <p>Section:</p>
      <Title title="Please leave feedback" />
      <ButtonList />
    </section>
  );
}
