'use strict';

describe ('Thermostat', function(){
  var thermo;
  var i;


  beforeEach(function(){
    thermo = new Thermostat();
  });

  it("has a default temp of 20 at startup", function(){
    expect(thermo.getTemp()).toEqual(20)
  });

  it("can raise the temp up", function(){
    thermo.up();
    expect(thermo.getTemp()).toEqual(21)
  });

  it("can lower the temp up", function(){
    thermo.down();
    expect(thermo.getTemp()).toEqual(19)
  });

  it("has a power mode defaulting to TRUE", function(){
    expect(thermo.getPowerMode()).toEqual(true);
  });

  it("power mode toggled -  true -> false", function(){
    thermo.togglePowerMode();
    expect(thermo.getPowerMode()).toEqual(false);
  });

  it("power mode toggled -  true -> false -> true", function(){
    thermo.togglePowerMode();
    thermo.togglePowerMode();
    expect(thermo.getPowerMode()).toEqual(true);
  });

  it("has reset mode back to 20", function(){
    thermo.up();
    thermo.up();
    thermo.resetTemp();
    expect(thermo.getTemp()).toEqual(20);
  });

  it("has a max temprature of 25 when power saver mode is on", function(){
    expect(thermo.getPowerMode()).toEqual(true);
    for (i = 0; i<10; i++) {
      thermo.up();
    }
    expect(thermo.getTemp()).toEqual(25);
  });

  it("has a max temprature of 32 when power saver mode is off", function(){
    thermo.togglePowerMode();
    expect(thermo.getPowerMode()).toEqual(false);
    for(i = 0; i <= 20; i++){
      thermo.up();
    };
    expect(thermo.getTemp()).toEqual(32);
  });

  it("has a min temprature of 10", function(){
    for(i = 0;  i < 20; i++){
      thermo.down();
    };
    expect(thermo.getTemp()).toEqual(10);
  });

  it("energy usage returns high when greater than 25", function(){
    thermo.togglePowerMode();
    for(i = 0;  i < 10; i++){
      thermo.up();
    };
    expect(thermo.getTemp()).toBeGreaterThan(25);

    expect(thermo.getUsage()).toEqual("high")
  });

  it("energy usage returns low when less than 18", function(){
    for(i = 0;  i < 3; i++){
      thermo.down();
    };
    expect(thermo.getUsage()).toEqual("low")
  });

  it("energy usage returns medium when greater than 17 and less than 26", function(){
    thermo.down();
    thermo.down();
    thermo.down();
    for(i = 0; i < 7; i++){
      thermo.up();
      expect(thermo.getUsage()).toEqual("medium");
    };
    expect(thermo.getUsage()).toEqual("medium");

  });



});
