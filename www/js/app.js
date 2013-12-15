var SocketPlugin = function() {};

SocketPlugin.prototype.echo = function(msg) {
	var error = function(args) {
		alert('FEHLER');
		console.log(args);
	};
	
	var res = cordova.exec(console.log, error, "SocketPlugin", "echo", [msg]);
	
	console.log("RES", res);
};


window.plugins = window.plugins || {};
window.plugins.socketPlugin = window.plugins.socketPlugin || new SocketPlugin();
