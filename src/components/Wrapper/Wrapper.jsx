import ButtonList from '../ButtonList/ButtonList';
import Section from '../Section/Section';
import StatisticsList from '../StatisticsList/StatisticsList';
import Title from '../Title/Title';

export default function Wrapper() {
  return (
    <div>
      <Section>
        <Title title="Please leave feedback" />
        <ButtonList />
      </Section>
      <Section>
        <Title title="Statistics" />
        <StatisticsList />
      </Section>
    </div>
  );
}
