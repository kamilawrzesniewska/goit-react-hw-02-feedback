import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = (good, total) => {
    const positivePercentage = Math.round((good / total) * 100);
    return isNaN(positivePercentage) ? 0 : positivePercentage;
  };

  TotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  OnLeaveFeedback = state => {
    switch (state) {
      case 'good':
        this.setState(state => ({ good: state.good + 1 }));
        break;
      case 'neutral':
        this.setState(state => ({ neutral: state.neutral + 1 }));
        break;
      case 'bad':
        this.setState(state => ({ bad: state.bad + 1 }));
        break;
      default:
        return 0;
    }
  };
  render() {

    const { good, neutral, bad } = this.state;
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
        justifyContent: 'center',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.feedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {this.TotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.TotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
    );
  }
}
