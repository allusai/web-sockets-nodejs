let WebSocket = require('ws');

let ws_server = new WebSocket.Server( { port: process.env.PORT || 8080 } );

ws_server.on('connection', (WebSocket) => {
			WebSocket.on('message', (message) => {
						console.log(`Received message from client! ${message}`);
						
						ws_server.clients.forEach( (client) => {
								console.log("Sending message to a client");
								client.send(message);
							});
				});
				
			//setTimeout( () => {
					//WebSocket.send('Hello!');
				//}, 2000);

		});