import { useState } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from 'components/Statistics/Statistics';

export const App = () => {
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);
  const handleFeedback = event => {
    if (event.target.innerText.toLowerCase() === 'good') {
      setGood(good + 1);
    } else if (event.target.innerText.toLowerCase() === 'neutral') {
      setNeutral(neutral + 1);
    } else if (event.target.innerText.toLowerCase() === 'bad') {
      setBad(bad + 1);
    } else {
      return;
    }
  };
  const countTotalFeedback = state => {
    let totalCount = 0;
    Object.values(state).map(number => (totalCount += number));
    return totalCount;
  };
  const countPositiveFeedbackPercentage = state => {
    let totalCount = 0;
    Object.values(state).map(number => (totalCount += number));
    const percentage = Math.round((state.good * 100) / totalCount) || 0;
    return percentage;
  };

  return (
    <>
      <Section title="Please leave feedback ">
        <Feedback
          handleFunction={handleFeedback}
          // handleGood={setGood}
          // handleNeutral={setNeutral}
          // handleBad={setBad}
          options={{ good, neutral, bad }}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback({
            bad,
            neutral,
            good,
          })}
          positivePercentage={countPositiveFeedbackPercentage({
            bad,
            neutral,
            good,
          })}
        />
      </Section>
    </>
  );
};
