import React from "react";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Ul } from "./Statistics/Statistics.styled";
import PropTypes from "prop-types";

export class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    return Object.values( this.state ).reduce( ( total, item ) => {
      return total + item;
    }, 0 )
  }
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return ( ( good * 100 ) / this.countTotalFeedback() ).toFixed( 0 ) + '%';
  }

  handleCLick = ( event ) => {
    const { target } = event;
    this.setState( prevState => {
      return {
        [target.innerHTML]: prevState[target.innerHTML] + 1
      }
    } )
  }

  render() {
    const options = Object.keys( this.state );
    return (
      <div
        style={ {
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        } }
      >

        <Section title="Please Leave feedback" />
        <Ul>
          <FeedbackOptions options={ options } onLeaveFeedback={ this.handleCLick } />
        </Ul>
        <Section title="Statistics" />
        {this.countTotalFeedback() ? <Statistics good={ this.state.good } neutral={ this.state.neutral } bad={ this.state.bad }
                      total={ this.countTotalFeedback }
                      positivePercentage={ this.countPositiveFeedbackPercentage } /> :
          <Notification message="There is no feedback" /> }
      </div>
    );
  }
}

App.propTypes = {
  title:PropTypes.string,
  options:PropTypes.array,
  onLeaveFeedback:PropTypes.func,
  good:PropTypes.number,
  neutral:PropTypes.number,
  bad:PropTypes.number,
  total:PropTypes.func,
  positivePercentage:PropTypes.func,
  message:PropTypes.string
}
