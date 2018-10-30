'use strict';

describe ('Feature Thermostat', function(){
  var thermo;

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

});
