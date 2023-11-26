import { NoFeedBack } from 'components/NoFeedBack/NoFeedback';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div>
      <h2>Statistics</h2>

      {good >= 1 || neutral >= 1 || bad >= 1 ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive Feedback: {positiveFeedback}%</li>
        </ul>
      ) : (
        <NoFeedBack />
      )}
    </div>
  );
};
