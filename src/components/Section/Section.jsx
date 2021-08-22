import s from './Section.module.css';

export default function Section({ children }) {
  return (
    <section className={s.section}>
      <p>Section:</p>
      {children}
    </section>
  );
}
