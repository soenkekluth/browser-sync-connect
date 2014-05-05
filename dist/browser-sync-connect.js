!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.out=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var browserSyncConnect = function(host, version, port) {

    'use strict';
    var id = '__bs_script__';

    if (document.getElementById(id)) {
        return;
    }

    host = host || window.location.hostname;
    port = port || 3000;
    version = version || '0.8.2';

    var socketUrl = '//' + host + ':' + port;
    var clientUrl = '//' + host + ':' + (port + 1);

    var script = document.createElement('script');
    script.src = socketUrl + '/socket.io/socket.io.js';
    script.id = id;

    script.onload = function() {

        var s = document.createElement('script');

        s.innerHTML = 'var ___socket___ = io.connect("' + socketUrl + '");';
        document.body.appendChild(s);


        s = document.createElement('script');
        s.src = clientUrl + '/client/browser-sync-client.' + version + '.js';
        document.body.appendChild(s);
    };

    document.body.appendChild(script);
};

},{}]},{},[1])
(1)
});