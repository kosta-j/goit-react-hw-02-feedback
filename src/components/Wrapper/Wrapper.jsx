import { Component } from 'react';
import ButtonList from '../ButtonList/ButtonList';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Title from '../Title/Title';

class Wrapper extends Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    if (total < 1) {
      return 0;
    }

    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section>
          <Title title="Please leave feedback" />
          <ButtonList />
        </Section>
        <Section>
          <Title title="Statistics" />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default Wrapper;
