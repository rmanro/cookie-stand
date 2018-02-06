'use strict';

const pdxAirport = {
    id: 'pdxairport',
    min: 23,
    max: 65,
    avg: 6.3,
    hourSales: [],
    hoursOfDay: ['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM:','8PM:'],
    custPerHour: function(){
        return Math.floor(Math.random () * (this.max - this.min) + this.min); //random # of customers
    },
    cookiesPerHour: function(){
        return Math.floor(this.avg * this.custPerHour()); //avg cookies per hour
    },
    cookiesEachHour: function(){    //avg cookies for each hour of workday - 15 total
        for (let i = 0; i < 15; i++){
            this.hourSales[i] = this.cookiesPerHour();
        }
    },
    renderLocation: function(){
        this.cookiesEachHour();
        for (let i = 0; i < this.hoursOfDay.length; i++)
        {
            const list = document.getElementById(this.id);
            const li = document.createElement('li');
            li.textContent = `${this.hoursOfDay[i]} ${this.hourSales[i]}`;
            console.log(li.textContent);
            list.appendChild(li);
        }
    }
};

const pioneerSquare = {
    id: 'pioneersquare',
    min: 3,
    max: 24,
    avg: 1.2,
    hourSales: [],
    hoursOfDay: ['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM:','8PM:'],
    custPerHour: function(){
        return Math.floor(Math.random () * (this.max - this.min) + this.min); //random # of customers
    },
    cookiesPerHour: function(){
        return Math.floor(this.avg * this.custPerHour()); //avg cookies per hour
    },
    cookiesEachHour: function(){    //avg cookies for each hour of workday - 15 total
        for (let i = 0; i < 15; i++){
            this.hourSales[i] = this.cookiesPerHour();
        }
    },
    renderLocation: function(){
        this.cookiesEachHour();
        for (let i = 0; i < this.hoursOfDay.length; i++)
        {
            const list = document.getElementById(this.id);
            const li = document.createElement('li');
            li.textContent = `${this.hoursOfDay[i]} ${this.hourSales[i]}`;
            console.log(li.textContent);
            list.appendChild(li);
        }
    }
};

const powells = {
    id: 'powells',
    min: 11,
    max: 38,
    avg: 3.7,
    hourSales: [],
    hoursOfDay: ['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM:','8PM:'],
    custPerHour: function(){
        return Math.floor(Math.random () * (this.max - this.min) + this.min); //random # of customers
    },
    cookiesPerHour: function(){
        return Math.floor(this.avg * this.custPerHour()); //avg cookies per hour
    },
    cookiesEachHour: function(){    //avg cookies for each hour of workday - 15 total
        for (let i = 0; i < 15; i++){
            this.hourSales[i] = this.cookiesPerHour();
        }
    },
    renderLocation: function(){
        this.cookiesEachHour();
        for (let i = 0; i < this.hoursOfDay.length; i++)
        {
            const list = document.getElementById(this.id);
            const li = document.createElement('li');
            li.textContent = `${this.hoursOfDay[i]} ${this.hourSales[i]}`;
            console.log(li.textContent);
            list.appendChild(li);
        }
    }
};

const stJohns = {
    id: 'stjohns',
    min: 20,
    max: 38,
    avg: 2.3,
    hourSales: [],
    hoursOfDay: ['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM:','8PM:'],
    custPerHour: function(){
        return Math.floor(Math.random () * (this.max - this.min) + this.min); //random # of customers
    },
    cookiesPerHour: function(){
        return Math.floor(this.avg * this.custPerHour()); //avg cookies per hour
    },
    cookiesEachHour: function(){    //avg cookies for each hour of workday - 15 total
        for (let i = 0; i < 15; i++){
            this.hourSales[i] = this.cookiesPerHour();
        }
    },
    renderLocation: function(){
        this.cookiesEachHour();
        for (let i = 0; i < this.hoursOfDay.length; i++)
        {
            const list = document.getElementById(this.id);
            const li = document.createElement('li');
            li.textContent = `${this.hoursOfDay[i]} ${this.hourSales[i]}`;
            console.log(li.textContent);
            list.appendChild(li);
        }
    }
};

const waterfront = {
    id: 'waterfront',
    min: 2,
    max: 16,
    avg: 4.6,
    hourSales: [],
    hoursOfDay: ['6AM:','7AM:','8AM:','9AM:','10AM:','11AM:','12PM:','1PM:','2PM:','3PM:','4PM:','5PM:','6PM:','7PM:','8PM:'],
    custPerHour: function(){
        return Math.floor(Math.random () * (this.max - this.min) + this.min); //random # of customers
    },
    cookiesPerHour: function(){
        return Math.floor(this.avg * this.custPerHour()); //avg cookies per hour
    },
    cookiesEachHour: function(){    //avg cookies for each hour of workday - 15 total
        for (let i = 0; i < 15; i++){
            this.hourSales[i] = this.cookiesPerHour();
        }
    },
    renderLocation: function(){
        this.cookiesEachHour();
        for (let i = 0; i < this.hoursOfDay.length; i++)
        {
            const list = document.getElementById(this.id);
            const li = document.createElement('li');
            li.textContent = `${this.hoursOfDay[i]} ${this.hourSales[i]}`;
            console.log(li.textContent);
            list.appendChild(li);
        }
    }
};


pdxAirport.renderLocation();
pioneerSquare.renderLocation();
powells.renderLocation();
stJohns.renderLocation();
waterfront.renderLocation();

