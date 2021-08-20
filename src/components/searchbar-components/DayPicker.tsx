import React from 'react';
import moment from 'moment';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

// @ts-ignore
import {formatDate, parseDate} from 'react-day-picker/moment';

export default class DayPicker extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: undefined,
      to: undefined,
    };
  }

  showFromMonth() {
    // @ts-ignore
    const {from, to} = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      // @ts-ignore
      this.to.getDayPicker().showMonth(from);
    }
  }

  handleFromChange(from: any) {
    // Change the from date and focus the "to" input field
    this.setState({from});
  }

  handleToChange(to: any) {
    this.setState({to}, this.showFromMonth);
  }

  render() {
    // @ts-ignore
    const {from, to} = this.state;
    const modifiers = {start: from, end: to};
    return (
      <div className="InputFromTo flex flex-1">
        <DayPickerInput
          value={from}
          placeholder="Check-in"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, {from, to}],
            disabledDays: {after: to},
            toMonth: to,
            modifiers,
            numberOfMonths: 1,
            // @ts-ignore
            onDayClick: () => this.to.getInput().focus(),
          }}
          onDayChange={this.handleFromChange}
        />
        <span className="flex items-center">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </span>

        <span className="InputFromTo-to">
          <DayPickerInput
            // @ts-ignore
            ref={el => (this.to = el)}
            value={to}
            placeholder="Check-out"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, {from, to}],
              disabledDays: {before: from},
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 1,
            }}
            onDayChange={this.handleToChange}
          />
        </span>
      </div>
    );
  }
}
