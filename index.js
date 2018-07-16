'use strict';


if (typeof require === 'function') {
  var moment = require('moment-business-days');
}

moment.locale('ph');

moment.updateLocale('ph', {
  holidays: [
    '01/01', // New Year
    '09/04', // Araw ng Kagitingan
    '01/05', // Labor Day
    '12/06', // Independence Day
    // '', // National Heroes Day
    // '', // Maundy Thursday
    // '', // Good Friday
    // '', // Eidul Adha
    // '', // Eid'l Fitr
    '30/11', // Bonifacio Day
    '25/12', // Christmas Day
    '30/12', // Rizal Day
  ],
  holidayFormat: 'DD/MM',
  // holiday: (day) => return true
});


/**
 * Add a holiday.
 * @param dateDDMM: string rapresenting the date in DD/MM format.
 * @param holiday: holiday's name.
 */
//moment.fn.addHoliday = function(dateDDMM, holiday) {
moment.addHoliday = function(dateDDMM) {
  let locale = this.localeData();

  locale._holidays.push(dateDDMM);
};


if (typeof module != 'undefined' && module.exports) {
    module.exports = moment;
}
