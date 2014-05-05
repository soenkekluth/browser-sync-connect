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
