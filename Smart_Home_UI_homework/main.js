//                   Live time
var clockElement1 = document.getElementById('timedisplay1');
var clockElement2 = document.getElementById('timedisplay2');
var clockElement3 = document.getElementById('timedisplay3');
function clock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const time = hours + ':' + minutes;
    clockElement1.textContent = time;
    clockElement2.textContent = time;
    clockElement3.textContent = time;
}
setInterval(clock, 1000);

//                   Batttery percentage
var batteryElement1 = document.getElementById('battery1');
var batteryElement2 = document.getElementById('battery2');
var batteryElement3 = document.getElementById('battery3');
navigator.getBattery()
    .then(function(battery) {
        batteryElement1.textContent = battery.level * 100 + '%'
        batteryElement2.textContent = battery.level * 100 + '%';
        batteryElement3.textContent = battery.level * 100 + '%';
    });