const countdown = document.querySelector('.countdown');


let timeleft = 6;
let downloadTimer = setInterval(function() {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        window.history.back();
    }
    countdown.textContent = timeleft;
    timeleft -= 1;
}, 1000);