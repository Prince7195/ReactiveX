var button = document.querySelector('button');

var obs1 = Rx.Observable.fromEvent(button, 'click');
var obs2 = Rx.Observable.interval(1000);
// emits value every 1 sec

obs1.switchMap( 
    // starts emitting values when the click event executed, for every click cancles old observable emition and starts from first
	event => {
  	return obs2
  }
).subscribe(
 (value) => console.log(value)
);

