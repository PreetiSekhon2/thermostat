'use strict';

function Thermostat(){

  this.temp = 20;
  this.powerMode = true
  var MAX_TEMP = 32
  var MAX_TEMP_POWER = 25
  var MIN_TEMP = 10

  Thermostat.prototype.getTemp = function(){
    return this.temp;
  };

  Thermostat.prototype.up = function(){
    if ((this.powerMode === true) && (this.temp < MAX_TEMP_POWER)){
      this.temp++;
    } else if ((this.powerMode === false) && (this.temp < MAX_TEMP)){
      this.temp++;
    }
  };

  Thermostat.prototype.down = function(){
    if (this.temp > MIN_TEMP){
      this.temp--;
    }
  };

  Thermostat.prototype.getPowerMode = function(){
    return this.powerMode;
  };

  Thermostat.prototype.togglePowerMode = function(){
    this.powerMode ? this.powerMode = false : this.powerMode = true;
  };

  Thermostat.prototype.resetTemp = function(){
    this.temp = 20;
  };

  Thermostat.prototype.getUsage = function(){
    switch(true) {
      case (this.temp > 25):
        return "high";
      case (this.temp < 18):
        return "low";
      default:
        return "medium";
    };
  };

};
