(function(exports) {

  'use strict';

  var browserSyncConnect = function(host, version, port) {

    var id = '__bs_script__';

    if (document.getElementById(id)) {
      return;
    }

    host = host || window.location.hostname;
    port = port || 3000;
    version = version || '1.3.6';

    var clientUrl = '//' + host + ':' + port;

    var script = document.createElement('script');
    script.src = clientUrl + '/browser-sync-client.' + version + '.js';
    script.async = true;
    script.id = id;

    var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
    head.appendChild(script);
  };


  (typeof module !== 'undefined' && module.exports) ? (module.exports = browserSyncConnect) : (typeof define === 'function' && define.amd ? (define([], function() {
    return browserSyncConnect;
  })) : (exports.browserSyncConnect = browserSyncConnect));

}(this));
