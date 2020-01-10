import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'spinx-date-picker',
  templateUrl: './date-picker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements ControlValueAccessor {
  /**
   * Set the value of the date set by user, notice the underscore infront of the datevalue
   */

  @Input() _dateValue: string = null;

  /**
   * Placeholder value for the material control input
   */
  @Input() public placeholder: string = null;

  @Input() public minDate = null;

  /**
   * The date format to use with default format but allowing you to pass a custom date format
   */
  @Input() private format = 'YYYY/MM/DD HH:mm:ss';

  get dateValue() {

    console.log('-----get-----dateValue-----------------');

    return moment(this._dateValue, this.format);
  }

  set dateValue(val) {

    console.log('----set------dateValue-----------------');

    this._dateValue = moment(val).format(this.format);
    this.propagateChange(this._dateValue);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log('----------addEvent-----------------');
    this.dateValue = moment(event.value, this.format);
  }

  displayDateValue(date) {
    console.log('----------displayDateValue-----------------');
    console.log(moment(date, this.format));
    return moment(date, this.format);
  }

  writeValue(value: any) {

    console.log('----------writeValue-----------------');

    if (value !== undefined) {
      this.dateValue = moment(value, this.format);
    }
  }
  propagateChange = (_: any) => {
    console.log('----------propagateChange-----------------');
  };

  registerOnChange(fn) {

    console.log('----------registerOnChange-----------------');

    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
