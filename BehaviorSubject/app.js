
var clickEmitted = new Rx.BehaviorSubject('Not clicked'); 
// emits the default value where the value changes after the event executed
var button = document.querySelector('button');
var div = document.querySelector('div');

button.addEventListener('click', () => clickEmitted.next('Clicked!'));

clickEmitted.subscribe(
	(value) => div.textContent = value
);