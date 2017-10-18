var subject = new Rx.Subject();
// creating subject constructor

subject.subscribe({
	next: function(value) {
  	console.log(value);
  },
  error: function(error) {
  	console.log(error);
  },
  complete: function() {
  	console.log('Complete');
  }
});

subject.subscribe({
	next: function(value) {
  	console.log(value);
  }
});

subject.next('A new data piece');
subject.complete();
subject.next('New value'); // not works after complete is called

// Output: 
// A new data piece
// A new data piece
// Complete