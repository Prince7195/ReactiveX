var input = document.querySelector('input');
var observable = Rx.Observable.fromEvent(input, 'input');

observable
.pluck('target', 'value') // select particular property to emit the value
.debounceTime(500)
.distinctUntilChanged()
.subscribe({
	next: function(value) {
  	console.log(value);
  }
});