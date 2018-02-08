'use strict';

const hoursOfDay = ['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM:','8PM:'];
const totalHourSales = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
let totalAllSales = 0;
let newFoot = false;

function Location (min, max, avg, locationName){
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.locationName = locationName;
    this.hourSales = [];
    this.totalSales = 0;
}

const location1 = new Location(23, 65, 6.3, 'PDX Airport');
const location2 = new Location(3, 24, 1.2, 'Pioneer Square');
const location3 = new Location(11, 38, 3.7, 'Powell\'s');
const location4 = new Location(20, 38, 2.3, 'St John\'s');
const location5 = new Location(2, 16, 4.6, 'Waterfront');

Location.prototype.renderLocation = function(){
    for (let i = 0; i < 15; i++){            //avg cookies for each hour of workday - 15 total
        const custPerHour = Math.floor(Math.random () * (this.max - this.min + 1)) + this.min;    //random # of customers
        const cookiesPerHour = Math.floor(this.avg * custPerHour);      //avg cookies per hour
        this.hourSales[i] = cookiesPerHour;
        this.totalSales += this.hourSales[i];
    }
    totalAllSales += this.totalSales;
    this.buildLocationRow();
};

Location.prototype.buildLocationRow = function(){   //builds rows for each location
    const tbody = document.querySelector('#sales tbody');
    const tr = document.createElement('tr');
    const loctd = document.createElement('td');
    loctd.textContent = this.locationName;
    tr.appendChild(loctd);
    for (let i = 0; i < 15; i++){
        const td = document.createElement('td');
        td.textContent = this.hourSales[i];
        tr.appendChild(td);
        totalHourSales[i] = totalHourSales[i] + this.hourSales[i];
    }
    tbody.appendChild(tr);
    const totaltd = document.createElement('td');
    totaltd.textContent = this.totalSales;
    tr.appendChild(totaltd);
};

const buildHourHeaders = function(){  //builds hour headers for table
    const theader = document.querySelector('#sales thead');
    const tr = document.createElement('tr');
    for (let i = 0; i < 15; i++){
        if (i === 0){
            const blankth = document.createElement('th');
            blankth.textContent = 'Location';
            tr.appendChild(blankth);
        }
        const th = document.createElement('th');
        th.textContent = hoursOfDay[i];
        tr.appendChild(th);
    }
    theader.appendChild(tr);
    const totalth = document.createElement('th');
    totalth.textContent = 'Daily Location Total';
    tr.appendChild(totalth);
};

const buildFooter = function(){  //builds total footer for table
    if (newFoot === true){
        const footdel = document.querySelector('#footer tr');
        const containerFoot = footdel.parentNode;
        containerFoot.removeChild(footdel);
    };
    const tfoot = document.querySelector('#sales tfoot');
    const tr = document.createElement('tr');
    const totaltd = document.createElement('td');
    totaltd.textContent = 'Totals';
    tr.appendChild(totaltd);
    for (let i = 0; i < 15; i++){
        const td = document.createElement('td');
        td.textContent = totalHourSales[i];
        tr.appendChild(td);
    }
    tfoot.appendChild(tr);
    const totalfoot = document.createElement('td');
    totalfoot.textContent = totalAllSales;
    tr.appendChild(totalfoot);
};

const buildTable = function(){
    buildHourHeaders();
    location1.renderLocation();
    location2.renderLocation();
    location3.renderLocation();
    location4.renderLocation();
    location5.renderLocation();
    buildFooter();
};

buildTable();

const form = document.querySelector('form');

form.addEventListener('submit' , function() {
    event.preventDefault();
    const storename = this.storename.value;
    const min = this.min.value;
    const max = this.max.value;
    const avg = this.avg.value;
    const newLocation = new Location(min, max, avg, storename);
    console.log(newLocation);
    newLocation.renderLocation();
    newFoot = true;
    buildFooter(newFoot);
    form.reset();
});