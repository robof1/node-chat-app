
var socket = io();

socket.on('connect', function(){
	console.log('Connected to server.');
});


socket.on('disconnect', function(){
	console.log('disconnected from server');
});
 

socket.on('newMessage', (msg)=>{
	console.log('newMessage',msg);
});
		