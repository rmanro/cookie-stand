'use strict';

const hoursOfDay = ['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM:','8PM:'];


function Location (id, min, max, avg){
    this.id = id;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.hourSales = [];
    this.totalSales = 0;
}

Location.prototype.renderLocation = function(){
    for (let i = 0; i < 15; i++){            //avg cookies for each hour of workday - 15 total
        const custPerHour = Math.floor(Math.random () * (this.max - this.min) + this.min);    //random # of customers
        const cookiesPerHour = Math.floor(this.avg * custPerHour);      //avg cookies per hour
        this.hourSales[i] = cookiesPerHour;
        this.totalSales += this.hourSales[i];
    }
    for (let i = 0; i < this.hoursOfDay.length; i++)
    {
        const list = document.getElementById(this.id);
        const li = document.createElement('li');
        li.textContent = `${this.hoursOfDay[i]} ${this.hourSales[i]}`;
        console.log(li.textContent);
        list.appendChild(li);
    }
    const total = document.getElementById(this.id);
    const totalli = document.createElement('li');
    totalli.textContent = `Total: ${this.totalSales}`;
    total.appendChild(totalli);
};

const buildHourHeaders = function(){
    alert('test');
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
};

buildHourHeaders();

// const location1 = new Location('pdxairport', 23, 65, 6.3);
// location1.renderLocation();

// const location2 = new Location('pioneersquare', 3, 24, 1.2);
// location2.renderLocation();

// const location3 = new Location('powells', 11, 38, 3.7);
// location3.renderLocation();

// const location4 = new Location('stjohns', 20, 38, 2.3);
// location4.renderLocation();

// const location5 = new Location('waterfront', 2, 16, 4.6);
// location5.renderLocation();

