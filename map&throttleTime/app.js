var observable = Rx.Observable.interval(1000);
// emits value every 1 sec

var observer = {
	next: function(value) {
  	console.log(value);
  }
};

observable.map(function(value) { // transforms the values 
	return 'Number: ' + value;
}).throttleTime(2000) // does not emits the values at the given throttle time 
.subscribe(observer);

// output: Number: 0,Number: 2,Number: 4,.....