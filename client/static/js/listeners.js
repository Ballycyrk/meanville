var socket = io.connect();
socket.on('connect', function (data) {
  console.log('BROWSER::WE ARE USING SOCKETS!');
})

