import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Feedback } from './Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  incrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  incrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    let total = 0;
    let positiveFeedback = this.state.good;
    let negativeFeedback = this.state.neutral + this.state.bad;
    let totalFeedback = positiveFeedback + negativeFeedback;
    if (negativeFeedback !== 0) {
      total = (positiveFeedback * 100) / totalFeedback;
    }
    if (positiveFeedback > 0 && negativeFeedback === 0) {
      total = 1 * 100;
    }

    return Math.round(total);
  };

  render() {
    return (
      <div>
        <Feedback
          onIncrementGood={this.incrementGood}
          onIncrementNeutral={this.incrementNeutral}
          onIncrementBad={this.incrementBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positiveFeedback={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
