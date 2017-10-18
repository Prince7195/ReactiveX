var input = document.querySelector('input');
var observable = Rx.Observable.fromEvent(input, 'input');

observable
.map(event => event.target.value)
.debounceTime(1000) // emits value after 1 sec after the outer observable pause emitting values
.distinctUntilChanged() // checks the previous value is same and emits if it is not
.subscribe({
	next: function(value) {
  	console.log(value);
  }
});