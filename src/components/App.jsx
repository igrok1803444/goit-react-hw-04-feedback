import { Component } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  feedbackHandle = event => {
    this.setState(prevState => {
      const option = event.target.innerText;

      return { [option]: prevState[event.target.innerText] + 1 };
    });
  };
  countTotalFeedback = state => {
    let totalCount = 0;
    Object.values(state).map(number => (totalCount += number));
    return totalCount;
  };
  countPositiveFeedbackPercentage = state => {
    let totalCount = 0;
    Object.values(state).map(number => (totalCount += number));
    const percentage = Math.round((state.good * 100) / totalCount) || 0;
    return percentage;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(this.state);
    return (
      <>
        <Section title="Please leave feedback ">
          <Feedback handleFunction={this.feedbackHandle} options={this.state} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}
