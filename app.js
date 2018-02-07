'use strict';

const hoursOfDay = ['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM:','8PM:'];
let totalHourSales = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let totalAllSales = 0;

function Location (id, min, max, avg, locationName){
    this.id = id;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.locationName = locationName;
    this.hourSales = [];
    this.totalSales = 0;
}

Location.prototype.renderLocation = function(){
    for (let i = 0; i < 15; i++){            //avg cookies for each hour of workday - 15 total
        const custPerHour = Math.floor(Math.random () * (this.max - this.min) + this.min);    //random # of customers
        const cookiesPerHour = Math.floor(this.avg * custPerHour);      //avg cookies per hour
        this.hourSales[i] = cookiesPerHour;
        this.totalSales += this.hourSales[i];
        totalAllSales += this.totalSales;
    }
    // for (let i = 0; i < this.hoursOfDay.length; i++)
    // {
    //     const list = document.getElementById(this.id);
    //     const li = document.createElement('li');
    //     li.textContent = `${this.hoursOfDay[i]} ${this.hourSales[i]}`;
    //     console.log(li.textContent);
    //     list.appendChild(li);
    // }
    // const total = document.getElementById(this.id);
    // const totalli = document.createElement('li');
    // totalli.textContent = `Total: ${this.totalSales}`;
    // total.appendChild(totalli);
};

const buildHourHeaders = function(){
    const theader = document.querySelector('#sales thead');
    const tr = document.createElement('tr');
    for (let i = 0; i < 15; i++){
        if (i === 0){
            const blankth = document.createElement('th');
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

Location.prototype.buildLocationRow = function(){
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
        console.log(totalHourSales);
    }
    tbody.appendChild(tr);
    const totaltd = document.createElement('td');
    totaltd.textContent = this.totalSales;
    tr.appendChild(totaltd);
};

const buildFooter = function(){
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

buildHourHeaders();

const location1 = new Location('pdxairport', 23, 65, 6.3, 'PDX Airport');
location1.renderLocation();
location1.buildLocationRow();

const location2 = new Location('pioneersquare', 3, 24, 1.2, 'Pioneer Square');
location2.renderLocation();
location2.buildLocationRow();

const location3 = new Location('powells', 11, 38, 3.7, 'Powell\'s');
location3.renderLocation();
location3.buildLocationRow();

const location4 = new Location('stjohns', 20, 38, 2.3, 'St John\'s');
location4.renderLocation();
location4.buildLocationRow();

const location5 = new Location('waterfront', 2, 16, 4.6, 'Waterfront');
location5.renderLocation();
location5.buildLocationRow();

buildFooter();
