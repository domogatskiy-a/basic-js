const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  console.log('===', date);
  if(date === undefined){
    return 'Unable to determine the time of year!';
    //console.log('1--', date);
  }  
  if(!(date instanceof Date)){
    return new Error('Invalid date!');
    //console.log('2--', date);
  }
  let season = date.getMonth();
  season == 11 ? season = 0 : season += 1; 
  season = Math.trunc(season / 3);
  //console.log(season);
  if(season ==  0){return 'winter'};
  if(season ==  1){return 'spring'};
  if(season ==  2){return 'summer'};
  if(season ==  3){return 'autumn'};

}

module.exports = {
  getSeason
};

 //console.log( getSeason(1));
 //console.log(getSeason());
 console.log(getSeason(new Date('1995-01-17T03:24:00')));
 console.log(getSeason(new Date('1995-02-17T03:24:00')));
 console.log(getSeason(new Date('1995-03-17T03:24:00')));
 console.log(getSeason(new Date('1995-04-17T03:24:00')));
 console.log(getSeason(new Date('1995-05-17T03:24:00')));
 console.log(getSeason(new Date('1995-05-17T03:24:00')));
 console.log(getSeason(new Date('1995-06-17T03:24:00')));
 console.log(getSeason(new Date('1995-07-17T03:24:00')));
 console.log(getSeason(new Date('1995-08-17T03:24:00')));
 console.log(getSeason(new Date('1995-09-17T03:24:00')));
 console.log(getSeason(new Date('1995-10-17T03:24:00')));
 console.log(getSeason(new Date('1995-11-17T03:24:00')));
 console.log(getSeason(new Date('1995-12-17T03:24:00')));
 