// ==UserScript==
// @id             iitc-plugin-wetterbericht@dazz
// @name           iitc: wetterbericht
// @version        0.0.1
// @namespace      https://github.com/breunigs/ingress-intel-total-conversion
// @updateURL      https://github.com/dazz/iitc-plugins/wetterbericht/wetterbericht.user.js
// @downloadURL    https://github.com/dazz/iitc-plugins/wetterbericht/wetterbericht.user.js
// @description    wetterbericht
// @include        *://www.ingress.com/intel*
// @match          *://www.ingress.com/intel*
// ==/UserScript==

function wrapper() {
// ensure plugin framework is there, even if iitc is not yet loaded
  if(typeof window.plugin !== 'function') window.plugin = function() {};


// PLUGIN START ////////////////////////////////////////////////////////
// use own namespace for plugin
  window.plugin.wetterbericht = function() {};

  window.plugin.wetterbericht.setup = function() {
    window.plugin.wetterbericht.setupCallback();
  }
  window.plugin.wetterbericht.setupCallback = function() {
    $('#toolbox').append('<a onclick="window.plugin.wetterbericht.show()">wetterbericht</a> ');
    addHook('portalDataLoaded', window.plugin.wetterbericht.portalDataLoaded);
  }

  
  window.plugin.wetterbericht.result = {};

  window.plugin.wetterbericht.portalDataLoaded = function(data) {
    
    var p = data.portals;
    
    var citydata = window.plugin.wetterberichtportals.city['berlin']();
    var areas = citydata.areas;
    $.each(areas, function(ind, area) {
      var area_data;
      if(typeof window.plugin.wetterbericht.result[area] === "undefined") {
        area_data = {'RESISTANCE':{'portals':{},'sum':0, 'maxAP':0}, 'ALIENS':{'portals':{},'sum':0, 'maxAP':0}};
      } else {
        area_data = window.plugin.wetterbericht.result[area];
      }
      //window.plugin.wetterbericht.export.push('area:'+area+'\n');
      $.each(citydata[area].portals, function(inde, pid) {
        $.each(p, function(index, d) {
          if(d[0] === pid) {

            if(typeof window.portals[pid] !== "undefined") {
              var params = {fillColor: 'white', fillOpacity: 10};
              window.portals[pid].setStyle(params);  
            }
            
            var faction = d[2].controllingTeam.team;
            if (typeof area_data[faction] === "undefined") { return false } // the faction is undefined
            if (typeof area_data[faction]['portals'][pid] === "undefined") {
              area_data[faction]['portals'][pid] = 1;
              area_data[faction]['sum']   += window.getPortalLevel(d[2]);
              area_data[faction]['maxAP'] += window.getAttackApGain(d[2]).totalAp;
              
              //window.plugin.wetterbericht.export.add(d);  // [1] collect all portals in list to filter double entries
            }
          }
          //window.plugin.wetterbericht.export.add(d);     // [1]collect all the portals seen on map
        });
      });
      //window.plugin.wetterbericht.export.log();         // [2] dump to console

      window.plugin.wetterbericht.result[area] = area_data;

    });
    //console.log(window.plugin.wetterbericht.result);
  }

  window.plugin.wetterbericht.export = function() {}; 
  
  window.plugin.wetterbericht.export.string = ''; // le string
  window.plugin.wetterbericht.export.dump = {};   // collection of portals
    
  window.plugin.wetterbericht.export.push = function(s) {
    window.plugin.wetterbericht.export.string += s;
  }

  window.plugin.wetterbericht.export.add = function(d) {
    if(typeof window.plugin.wetterbericht.export.dump[d[0]] === "undefined"){
        window.plugin.wetterbericht.export.dump[d[0]] = 1;
        window.plugin.wetterbericht.export.string += "'"+d[0]+"', // "+d[2].portalV2.descriptiveText.TITLE+"\n";
    }
  }
  window.plugin.wetterbericht.export.log = function() {
    console.log(window.plugin.wetterbericht.export.string);
    console.log('-----------------------------\n');
    // clearing data
    window.plugin.wetterbericht.export.string = '';
    window.plugin.wetterbericht.export.dump = {};
  }
  
  // all this to show a date?
  window.plugin.wetterbericht.datetime = function() {
    var currentTime = new Date()
    var month = currentTime.getMonth() + 1
    if (month < 10){
      month = "0" + month
    }
    var day = currentTime.getDate()
    if (day < 10){
      day = "0" + day
    }
    var year = currentTime.getFullYear()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
      minutes = "0" + minutes
    }
    return day + "." + month + "." + year + ' ' + hours + ':' + minutes;
  };

  window.plugin.wetterbericht.show = function() {
    
    var factions = {'RESISTANCE':'R','ALIENS':'E'};
    var s = 'der wetterbericht für ' + window.plugin.wetterbericht.datetime() + '\n';
    $.each(window.plugin.wetterbericht.result, function(area, area_data) {
      var anzP = window.plugin.wetterberichtportals.city['berlin']()[area].portals.length;
      s += '[' + area + '|' + anzP + ']:';
      $.each(area_data, function(faction, value) {
        //console.log(value);
        var numP  = Object.keys(value.portals).length;
        var level = (numP>0) ? (value.sum/numP).toFixed(2) : '0.00';
        s += '\t' + factions[faction] + '('+numP+'): ' + level + 'L|'+ (value.maxAP/1000).toFixed(0) + 'kAP';
      });
      s += '\n';
    });
    s += '\nlink zur erklärung: http://tinyurl.com/iwb-legende';
    console.log(s);
    alert(s);
  };

  var setup = window.plugin.wetterbericht.setup;

// PLUGIN END //////////////////////////////////////////////////////////

  if(window.iitcLoaded && typeof setup === 'function') {
    setup();
  } else {
    if(window.bootPlugins)
      window.bootPlugins.push(setup);
    else
      window.bootPlugins = [setup];
  }
} // wrapper end
// inject code into site context
var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ wrapper +')();'));
(document.body || document.head || document.documentElement).appendChild(script);