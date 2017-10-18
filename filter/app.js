var observable = Rx.Observable.interval(1000);
// emits value every 1 sec

observable
.filter(function(value) {
	return value % 2 == 0; // checking even
})
.subscribe({
	next: function(value) {
  	console.log(value);
  },
  error: function(error) {
  	console.log('Error: ', error);
  }
});
// output: 0,2,4,6,8,....