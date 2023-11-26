export const Feedback = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => {
  return (
    <>
      <div>
        <h1>Plese leave Feedback</h1>
        <button type="button" onClick={onIncrementGood}>
          Good
        </button>
        <button type="button" onClick={onIncrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={onIncrementBad}>
          Bad
        </button>
      </div>
    </>
  );
};
