import React, { Component } from 'react';

export default class LeapYear extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: '',
      error: 'Enter a valid year.'
    };
  }

  isLeapYear = () => {
    const isDivisibleBy400 = this.yearDivisibleBy(400);
    const isDivisibleBy100 = this.yearDivisibleBy(100);
    const isDivisibleBy4 = this.yearDivisibleBy(4);

    const divisibleBy4ANdNotBy100 = isDivisibleBy4 && !isDivisibleBy100;
    const divisibleBy100ANdNotBy400 = isDivisibleBy100 && !isDivisibleBy400;

    return isDivisibleBy400 || (divisibleBy4ANdNotBy100 && !divisibleBy100ANdNotBy400);
  }

  yearDivisibleBy = (_number) => this.state.year % _number === 0;

  handleInputChange = (e) => {
    const { value } = e.target;

    if (value > 0) this.setState({ year: value, error: null });
    else this.setState({ year: value, error: 'Enter a valid year!' });
  }

  render() {
    const { year, error } = this.state;

    return (
      <div testId='wrapper'>
        <label>Enter year: </label>
        <input
          testId='enterYearInput'
          type='number'
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <span testId="resultSpan">
          {error ? error : `Entered year is ${year} is${this.isLeapYear() ? '' : ' not'} leap year.`}
        </span>
      </div>
    );
  }
}
