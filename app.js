'use strict';
var div = document.getElementById('table-body');

var storeHours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '8pm', 'Total'];

var pike = new CookieStore('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capHill = new CookieStore('Capitol Hill', 20, 38, 4.6);
var alki = new CookieStore('Alki', 2, 16, 4.6);
var allStores[];
var dailySales = [];

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
  
  
  this.totalSales = function(){
  	var allTheCookies = Math.floor(this.randomCust() * this.avgCookCust);
    for (var i = 0; i < storeHours.length; i++){
      this.hourlySalesArray.push(allTheCookies);
      this.total += allTheCookies;
    }
  };
  this.createListRow = function(){
  	this.totalSales();
  	var table = document.getElementById('body');
    var tBody = document.getElementsByTagName('tbody')[0];    
    var tRow = document.createElement('tr');
    tBody.appendChild(tRow);
    var rowName = document.createElement('th');
    rowName.innerText = this.name;
    tRow.appendChild(rowName);

    for(var i = 0; i < storeHours.length; i++){
      var tToTheData = document.createElement('td');
      tToTheData.innerText = this.hourlySales[i];
      tRow.appendChild(tToTheData);
      }
     tToTheData = document.createElement('td');
     tToTheData.innerText = this.total;
     tRow.appendChild(tToTheData);
  };
  allStores.push(this);
};

function renderHeader() {
  var storeTable = document.createElement('table');
  div.appendChild(table);
  table.id = 'tBody';
  
  var tableHead = document.createElement('thead');
  table.appendChild(tableHead);
  
  var tableHeadRow = document.createElement('tr');
  tableHead.appendChile(tableHeadRow);
    for (var i = 0; i < storeHours.length - 1; i++){
      var tH = document.createElement('th');
      tH.innerText = storeHours[i];
      tableHeadRow.appendChild(tH);
    };
  var tH = document.createElement('th');
  tH.innerText = storeHours[i];
  tableHeadRow.appendChild(tH)
  var tableBody = document.createElement('tbody');
  storeTable.appendChild(tableBody);
  var tableRow = document.createElement('tr');
  tableBody.appendChild(tableRow);
  

  var tableFoot = document.createElement('tf');
  body.appendChild(tableRow);
};
function hourlyTotals() {
	var table = document.getElementById('table-body');
	var tableFoot = document.getElementById('tfoot');
	table.appndChild(tableFoot);
	var tr = document.createElement('tr');
	tableFoot.appendChild(tr);
	var th = document.createElement('th');
	tr.appendChild(th);
	for (var i = 0; i < storeHours.length - 2; i++) {
		var hrlyTtl = 0;
		for (var z = 0; z < allStores.length; x++) {
			hrlyTtl += allStores[x].hourlySalesArray[i];
		}
		var footTD = document.createElement('td');
		footTD.innerText = hrlyTtl;
		tr.appendChild(footTD);
	}
	var allTotals = 0;
	for (var i = 0; i < allStores.length; i++) {
		allTotals += allStores[i].total;
	}
	var totalTD = document.createElement('td');
	totalTD.innerText = allTotals;
	tr.appendChild(totalTD)

} 
for (var i = 0; i < allStores.length; i++) {
  allStores[i].createListRow();
}
hourlyTotals();
var form = document.getElementById('the-form');
function createNewStore(event) {
	event.preventDefault();
 	var storeName = event.target.elements.storename;
  	var storeMin = event.target.elements.minCust;
  	var storeMax = event.target.elements.maxCust;
  	var storeAvg = event.target.elements.avgCookies;
  	if (maxCust < minCust) {
    	alert('The max number of crusties should be larger then the min number of crusties.');
  	} else {
  		var submitStore = new CookieStore(name.value, Math.floor(minCust.value), Math.floor(maxCust.value), Math.floor(avgCookCust.value);
  		createListRow(CookieStore);
  		form.reset();
  	}
}
form.addEventListener('submit', createNewStore);
