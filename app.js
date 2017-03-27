'use strict';
//I wanted to use randomCustPerHour instead of my function.
//var randomCustPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//var avgCookHour =
var body = document.getElementById('body')[0];
var total = 0;
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '8pm', 'total'];

var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookCust: 6.3,
  hourlySales: [],
  name: '1st and Pike.',
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesHourly: function() {
    var cookiesPerHour = Math.floor(this.avgCookCust * this.randomCust());
    for(var i = 0; i < storeHours.length - 1; i++) {
      this.hourlySales.push(Math.floor(cookiesPerHour));
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  createListItems: function(){
    this.cookiesHourly();
    var newHeading = document.createElement('h2');
    newHeading.innertext = this.name;
    body.appendChild(newHeading);
    var firstUl = document.getElement('ul');
    for (var i = 0; i < storeHours.length -1; i++) {
      var newEl = document.getElement('li');
      newEl.innertext = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';
      firstUl.appendChild(newEl);
    }
    body.appendChild(firstUl);
  }
};

var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookCust: 1.2,
  hourlySales: [],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesHourly: function() {
    var cookiesPerHour = Math.floor(this.avgCookCust * this.random());
    for(var i = 0; i < storeHours.length - 1; i++) {
      this.hourlySales.push(Math.floor(cookiesPerHour));
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  createListItems: function(){
    this.cookiesHourly();
    var newHeading = document.createElement('h2');
    newHeading.innertext = this.name;
    body.appendChild(newHeading);
    var firstUl = document.getElement('ul');
    for (var i = 0; i < storeHours.length -1; i++) {
      var newEl = document.getElement('li');
      newEl.innertext = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';
      firstUl.appendChild(newEl);
    }
    body.appendChild(firstUl);
  }
}

var seaCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookCust: 3.7,
  hourlySales: [],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesHourly: function() {
    var cookiesPerHour = Math.floor(this.avgCookCust * this.random());
    for(var i = 0; i < storeHours.length - 1; i++) {
      this.hourlySales.push(Math.floor(cookiesPerHour));
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  createListItems: function(){
    this.cookiesHourly();
    var newHeading = document.createElement('h2');
    newHeading.innertext = this.name;
    body.appendChild(newHeading);
    var firstUl = document.getElement('ul');
    for (var i = 0; i < storeHours.length -1; i++) {
      var newEl = document.getElement('li');
      newEl.innertext = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';
      firstUl.appendChild(newEl);
    }
    body.appendChild(firstUl);
  }
}

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookCust: 4.6,
  total: 0,
  hourlySales: [],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesHourly: function() {
    var cookiesPerHour = Math.floor(this.avgCookCust * this.random());
    for(var i = 0; i < storeHours.length - 1; i++) {
      this.hourlySales.push(Math.floor(cookiesPerHour));
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  createListItems: function(){
    this.cookiesHourly();
    var newHeading = document.createElement('h2');
    newHeading.innertext = this.name;
    body.appendChild(newHeading);
    var firstUl = document.getElement('ul');
    for (var i = 0; i < storeHours.length -1; i++) {
      var newEl = document.getElement('li');
      newEl.innertext = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';
      firstUl.appendChild(newEl);
    }
    body.appendChild(firstUl);
  }
}

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookCust: 4.6,
  hourlySales: [],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesHourly: function() {
    var cookiesPerHour = Math.floor(this.avgCookCust * this.random());
    for(var i = 0; i < storeHours.length - 1; i++) {
      this.hourlySales.push(Math.floor(cookiesPerHour));
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  createListItems: function(){
    this.cookiesHourly();
    var newHeading = document.createElement('h2');
    newHeading.innertext = this.name;
    body.appendChild(newHeading);
    var firstUl = document.getElement('ul');
    for (var i = 0; i < storeHours.length -1; i++) {
      var newEl = document.getElement('li');
      newEl.innertext = storeHours[i] + ': ' + this.hourlySales[i] + ' cookies';
      firstUl.appendChild(newEl);
    }
    body.appendChild(firstUl);
  }
}
