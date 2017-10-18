// var observable = Rx.Observable.of(1,2,3,4,5);

// observable
// .reduce((total, currentValue) => { 
// 	return total + currentValue;   // returns after the function completes
// }, 0)
// .subscribe({
// 	next: function(value) {
//   	console.log(value);
//   }
// });
// output: 15

var observable = Rx.Observable.of(1,2,3,4,5);

observable
.scan((total, currentValue) => {
	return total + currentValue; // emits value every changes
}, 0)
.subscribe({
	next: function(value) {
  	console.log(value);
  }
});
// output: 1,3,6,10,15