//I wanted to use randomCustPerHour instead of my function.
//var randomCustPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//var avgCookHour =
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '8pm', 'total'];

var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookCust: 6.3,
  hourlySales: [],
  random: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesHourly: function() {
    var randomCookies = Math.round(this.avgCookCust * this.random());
    for(var i = 0; i <=14; i++) {
      this.hourlySales.push(Math.round(randomCookies);
    };
  }
}
var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookCust: 1.2,
  random: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)
  },
  cookiesHourly: function() {
    var randomCookies = Math.round(this.avgCookCust * this.random);
    for(var i = 0; i <=14; i++) {
      return randomCookies;
    };
  }
}
var seaCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookCust: 3.7,
  random: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)
  },
  cookiesHourly: function() {
    var randomCookies = Math.round(this.avgCookCust * this.random);
    for(var i = 0; i <=14; i++) {
      return randomCookies;
    };
  }
}
var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookCust: 4.6,
  random: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)
  },
  cookiesHourly: function() {
    var randomCookies = Math.round(this.avgCookCust * this.random);
    for(var i = 0; i <=14; i++) {
      return randomCookies;
    };
  }
}
var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookCust: 4.6,
  random: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)
  },
  cookiesHourly: function() {
    var randomCookies = Math.round(this.avgCookCust * this.random);
    for(var i = 0; i <=14; i++) {
      return randomCookies;
    };
  }
}
