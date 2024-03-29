import { CDP } from '../CDP-config.js';
import CalendarDates from '../lib/CalendarDates.js';
import { calendarXML } from '../icons/calendarXML.js';

export default class DateInput extends CalendarDates {
  constructor(containerSelector, initialValue = undefined) {
    super();
    this.container = document.querySelector(containerSelector);
    this.dateToday = new Date().toDateString().split(' ');
    this.initialValue = initialValue;

    this.dateInputHTMLMarkup(this.initialValue);
  }
  dateInputHTMLMarkup(value) {
    this.container.innerHTML = `
          <div class="${CDP.classNames.dateInputContainer}">
            <input type="text" class="${CDP.classNames.dateInput}" value="${value}" ${
      CDP.disableDateInput ? 'disabled' : ''
    }/>
            <div class="${CDP.classNames.openCalendarIcon}">
              ${calendarXML}
            </div>
          </div>  
        `;
  }

  static getMonthNumberFromShortName(sName) {
    for (let month of this.getMonthsList()) {
      if (month.shortName === sName) {
        return month.pos;
      }
    }
  }
}
