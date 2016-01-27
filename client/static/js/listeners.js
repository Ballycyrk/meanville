var socket = io.connect();
socket.on('connect', function (data) {
  console.log('BROWSER::WE ARE USING SOCKETS!');
})

socket.on("serverApproval", function(socket) {
  console.log("THANK YOU SIR MAY I HAVE ANOTHER?", socket);
  this.getTimer();
})
