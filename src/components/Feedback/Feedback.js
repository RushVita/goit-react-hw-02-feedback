import { Statistics } from 'components/Statistics/Statistics';

export const Feedback = ({ good, neutral, bad }) => {
  return (
    <>
      <div>
        <h1>Plese leave Feedback</h1>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={1}
        positivePercentage={1}
      />
    </>
  );
};
