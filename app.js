'use strict';
//I wanted to use randomCustPerHour instead of my function.
//var randomCustPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//var avgCookHour =
var body = document.getElementByTagName('body')[0];
var total = 0;
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '8pm', 'total'];

<<<<<<< HEAD
function Store(minCust, maxCust, avgCookCust, name) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookCust = avgCookCust;
  this.name = name;
  this.hourlySales = [];
  this.randomCust = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.cookiesHourly = function() {
=======
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
>>>>>>> dff2b7bdfe4379d7c4bc828c167710e2e8cfe86b
    var cookiesPerHour = Math.floor(this.avgCookCust * this.random());
    for(var i = 0; i < storeHours.length - 1; i++) {
      this.hourlySales.push(Math.floor(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
<<<<<<< HEAD
  }
  this.createListItems = function(){
=======
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

pike.createListItems();
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
      this.hourlySales.push(Math.floor(cookiesPerHour);
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
      this.hourlySales.push(Math.floor(cookiesPerHour);
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
  seaCenter.createListItems();
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
      this.hourlySales.push(Math.floor(cookiesPerHour);
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
  capHill.createListItems();
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
      this.hourlySales.push(Math.floor(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.hourlySales.push(total);
  },
  createListItems: function(){
>>>>>>> dff2b7bdfe4379d7c4bc828c167710e2e8cfe86b
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
<<<<<<< HEAD
}
var pike = new Store(23, 65, 6.3, '1st and Pike' )
var seaTac= new Store(3, 24, 1.2, 'SeaTac Airport');
var seaCenter= new Store(11, 38,3.7, 'Seattle Center');
var capHill= new Store(20, 38, 4.6, 'Capitol Hill');
var alki = new Store(2, 16, 4.6, 'Alki');
=======
  alki.createListItems();
}
>>>>>>> dff2b7bdfe4379d7c4bc828c167710e2e8cfe86b