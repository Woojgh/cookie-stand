'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '8pm'];

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
  this.total = 0;
  this.hourlySales = [];
  this.randomCust = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.hourlySales = function(){
   return Math.floor(this.randomCust() * this.avgCookCust);
  };
  this.totalSales = function(){
    for (var i = 0; i < storeHours.length; i++){
      this.hourlySales.push(hourlySales());
      this.total += this.hourlySales;
    }
  };

  this.cookiesADay();
  this.createListRow = function(){
    var tBody = document.getElementsByTagName('tbody')[0];    
    var tRow = document.createElement('tr');
    tBody.appendChild(tRow);
    var rowName = document.createElement('th');
    tRow.appendChild(rowName);
    rowName.innerText = this.name;
    tRow.appendChild(nameTD);
    var totalTag = document.createElement('th');
    totalTag.innerText = 'Total';
    tRow.appendChild(totalTag);

    for(var i = 0; i < storeHours.length; i++){
      var tToTheData = document.createElement('td');
      tToTheData.innerText = this.hourlySales[i];
      tRow.appendChild(tToTheData);
      }
  };
}

function renderHeader() {
  var storeTable = document.createElement('table');
  body.appendChild(table);
  
  var tableHead = document.createElement('thead');
  table.appendChild(tableHead);
  
  var tableHeadRow = document.createElement('tr');
  var extraSpace = document.createElement('th');
  tableHeadRow.appendChild(extraSpace);
    for (var i = 0; i < storeHours.length; i++){
      var tH = document.createElement('th');
      tH.innerText = storeHours[i];
      tableHeadRow.appendChild(tH);
    };
  var tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  var tableRow = document.createElement('tr');
  tableBody.appendChild(tableRow);
  
  createListRow(pike);
  createListRow(seaTac);
  createListRow(seaCenter);
  createListRow(capHill);
  createListRow(alki);

  var tableFoot = document.createElement('tf');
  body.appendChild(tableRow);
};

for (var i = 0; i < allStores.length; i++) {
  allStores[i].createListRow();
}
var form = document.getElementById('the-form');
 function createNewStore(event) {
  event.preventDefault();
  var storeName = event.target.elements.name;
  var storeMin = event.target.elements.minCust;
  var storeMax = event.target.elements.maxCust;
  var storeAvg = event.target.elements.avgCookCust;
  if (maxCust < minCust) {
    alert('The max number of crusties should be larger then the min number of crusties.');
  } else {
  var submitStore = new CookieStore(name.value, Math.floor(minCust.value), Math.floor(maxCust.value), Math.floor(avgCookCust.value);
  createListRow(CookieStore);

  form.reset();
  }
}
form.addEventListener('submit', createNewStore);
