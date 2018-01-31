var localtunnel = require('localtunnel');
var tunnel = localtunnel(5000, { subdomain: 'fjijoafdleasdfg' }, function(
    err,
    tunnel
) {
    if (!err) {
        console.log('LT running');
    } else {
        console.log(err);
    }
});

tunnel.on('close', function() {
    console.log('closed');
});
