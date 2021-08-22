import { Component } from 'react';
import ButtonList from '../ButtonList/ButtonList';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Title from '../Title/Title';

class Wrapper extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <Section>
          <Title title="Please leave feedback" />
          <ButtonList />
        </Section>
        <Section>
          <Title title="Statistics" />
          <Statistics />
        </Section>
      </div>
    );
  }
}

export default Wrapper;
