var clockElement = document.getElementById('clock');
function clock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const time = hours + ':' + minutes + ':' + seconds;
    clockElement.textContent = time;
}
setInterval(clock, 1000);