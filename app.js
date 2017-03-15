'use strict';
//I wanted to use randomCustPerHour instead of my function.
//var randomCustPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//var avgCookHour =
var body = document.getElementByTagName('body')[0];
//var body = document.body;
//var total = 0;
var storeHours = ['','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '8pm', 'total'];
var allStores = [];
var pike = new Store('1st and Pike', 23, 65, 6.3)
var seaTac= new Store('SeaTac Airport', 3, 24, 1.2);
var seaCenter= new Store('Seattle Center', 11, 38, 3.7);
var capHill= new Store('Capitol Hill', 20, 38, 4.6);
var alki = new Store('Alki', 2, 16, 4.6);

function Store(name, minCust, maxCust, avgCookCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookCust = avgCookCust;
  this.total = 0;
  this.hourlySales = [];
  this.randomCust = function() {
    //console.log(this.randomCust());
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.cookiesHourly = function() {
    var cookiesPerHour = Math.floor(this.avgCookCust * this.random());
    for(var i = 0; i < storeHours.length - 1; i++) {
      this.hourlySales.push(Math.floor(cookiesPerHour);
      this.total += cookiesPerHour;
    }
    this.hourlySales.push(total);
    console.log(this.hourlySales);
  };
  this.createListRow = function(){
    this.cookiesHourly();
    var table = document.getElementsByTagName('table')[0];
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    var nameTD = document.createElement('td');
    tr.appendChild(nameTD);
    nameTD.innerText = this.name;
    for(var i = 0; i < storeHours.length; i++){
      var td = document.createElement('td');
      td.innerText = this.hourlySales[i];
      tr.appendChild(td);
      }
    }
  allStores.push(this);
  };
  function renderHeader (){
    var table = document.createElement('table');
    body.appendChild(table);
    var tableHead = document.createElement('thead');
    var tableBody = document.getElementsByID('table-body');
    table.appendChild(tableHead);
    var tr = document.createElement('tr');
    thead.appendChild(tr);
    var blank = document.createElement('th');
    blank.innerText = 'Store Name';
    thead.appendChild(blank);
    for(var i = 0; i < storeHours.length; i++){
      var th = document.createElement('th');
      th.innerText = storeHours[i];
      thead.appendChild(th);
    };
    var tableBody = document.createElement('tbody');
    table.appendChild('tableBody');
    tableBody.id = 'table-body';
  };
randerHeader();
for (var i = 0; i < allStores.length; i++) {
  //var thisStore = allStores[i];
  allStores[i].generateTableRow();
};
// pike.createListRow();
// seaTac.createListRow();
// seaCenter.createListRow();
// capHill.createListRow();
// alki.createListRow();
