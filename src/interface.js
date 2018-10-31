$(document).ready(function(){

  var thermostat = new Thermostat();

  function repaint_temp(){

    $('#current-temp').text(thermostat.getTemp());

    if(thermostat.getUsage() === "high"){
      $('#current-temp').css("background-color", "red");
    } else if(thermostat.getUsage() === "low"){
      $("#current-temp").css("background-color", "green");
    } else{
      $("#current-temp").css("background-color", "pink");
    }
  }

  function repaint_mode(){
    $('#current-power-mode').text(thermostat.getPowerMode());
  }

  repaint_temp();
  repaint_mode();

  $('#temp-up').click(function(){
    thermostat.up();
    repaint_temp();
  });

  $('#temp-down').click(function(){
    thermostat.down();
    repaint_temp();
  });

  $('#reset-temp').click(function(){
    thermostat.resetTemp();
    repaint_temp();
  });

  $('#power-mode-toggle').click(function(){
    thermostat.togglePowerMode();
    repaint_mode();
  });

})
