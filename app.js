'use strict';

const pdxAirport = {
    name: 'PDX Airport',
    min: 23,
    max: 65,
    avg: 6.3,
    hourSales: [],
    custPerHour: function(){
        return Math.floor(Math.random () * (this.max - this.min) + this.min);
    },
    cookiesPerHour: function(){
        return Math.floor(this.avg * this.custPerHour());
    },
    cookiesEachHour: function(){
        for (let i = 0; i < 15; i++){
            this.hourSales[i] = this.cookiesPerHour();
        }
    }
};
pdxAirport.cookiesEachHour();
console.log(pdxAirport.hourSales);