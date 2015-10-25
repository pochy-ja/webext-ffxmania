'use strict';

/*global chrome:false */

chrome.browserAction.onClicked.addListener(function(aTab) {
  chrome.tabs.query({'url': 'http://firefoxmania.uci.cu/'}, (tabs) => {
    if (tabs.length === 0) {
      // Si no existe algun tab con esta URL la creamos y vamos a ella!
      chrome.tabs.create({'url': 'http://firefoxmania.uci.cu/', 'active': true});
    } else {
      // Si existe un tab con la URL entonces cambiamos el foco a ese tab!
      chrome.tabs.query({'url': 'http://firefoxmania.uci.cu/', 'active': true}, (active) => {
        if (active.length === 0) {
          chrome.tabs.update(tabs[0].id, {'active': true});
        }
      });
    }
  });
});