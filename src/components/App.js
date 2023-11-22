import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood(evt) {
    this.state.good += evt;
    console.log(this.state.good);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Plese leave Feedback</h1>
          <button
            type="button"
            onClick={evt => {
              return this.incrementGood(1);
            }}
          >
            Good {this.state.good}
          </button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}
