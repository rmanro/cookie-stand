'use strict';

const pdxAirport = {
    id: 'pdxairport',
    min: 23,
    max: 65,
    avg: 6.3,
    hourSales: [],
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
    }
};
pdxAirport.cookiesEachHour();
console.log(pdxAirport.hourSales);
