'use strict';

var body = document.getElementsByTagName('body')[0];
var storeHours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '8pm'];
var allStores = [];

var pike = new CookieStore('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capHill = new CookieStore('Capitol Hill', 20, 38, 4.6);
var alki = new CookieStore('Alki', 2, 16, 4.6);

function CookieStore(name, minCust, maxCust, avgCookCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookCust = avgCookCust;
  this.hourlySalesArray = [];
  this.total = 0;
  this.randomCust = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };


  this.totalSales = function() {
    for (var i = 0; i < storeHours.length; i++){
      var allTheCookies = Math.floor(this.randomCust() * this.avgCookCust);
      this.hourlySalesArray.push(allTheCookies);
      this.total += allTheCookies;
    }
  };
  this.createListRow = function() {
    this.totalSales();
    var table = document.getElementsByTagName('table')[0];
    var tRow = document.createElement('tr');
    var tableBody = document.getElementById('table-body');
    tableBody.appendChild(tRow);
    var rowName = document.createElement('th');
    rowName.innerText = this.name;
    tRow.appendChild(rowName);
    for(var i = 0; i < storeHours.length - 1; i++){
      var newTD= document.createElement('td');
      newTD.innerText = this.hourlySalesArray[i];
      tRow.appendChild(newTD);
    }
  };
  allStores.push(this);
}

function crumbleTable() {
  var table = document.createElement('table');
  body.appendChild(table);
  var tableHead = document.createElement('thead');
  table.appendChild(tableHead);
  var tableRow = document.createElement('tr');
  tableHead.appendChild(tableRow);
  for (var i = 0; i < storeHours.length; i++){
    var th = document.createElement('th');
    th.innerText = storeHours[i];
    tableRow.appendChild(th);
  }
  var tableBody = document.createElement('tBody');
  table.appendChild(tableBody);
  tableBody.id = 'table-body';
}
crumbleTable();

for (var i = 0; i < allStores.length; i++) {
  allStores[i].createListRow();
}
