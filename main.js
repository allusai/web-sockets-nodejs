let connection = new WebSocket('ws://localhost:8080');

connection.onopen = () => {
	console.log('Connected from the frontend');
	//connection.send('hello');
}

connection.onerror = () => {
	console.log('Could not from the frontend');

}

connection.onmessage = (event) => {
	console.log('Received message', event.data);
	document.getElementById('GoogleDocText').innerHTML = event.data;
}

	// This is a key part of making the <p> tag working like a Google Doc   ***
document.getElementById('GoogleDocText').addEventListener('input', sendUpdatedText);

function sendUpdatedText() {
	console.log("Sending updated text");
	connection.send(document.getElementById('GoogleDocText').innerHTML);
}