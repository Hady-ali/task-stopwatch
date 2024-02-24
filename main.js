window.onload = function() {
    let minutes = 0;
    let seconds = 0;
    let tens = 00;
    let appenedMinutes = document.querySelector('#minutes');
    let appenedSeconds = document.querySelector('#seconds');
    let appenedTens = document.querySelector('#tens');

    let srartBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let reastBtn = document.querySelector('#reset');
    let Interval;


    const startTimer = () => {
        tens++;
        if (tens <= 9) {
            appenedTens.innerHTML = '0' + tens;
        }
        if (tens > 9) {
            appenedTens.innerHTML = tens ;
        }

        if(tens > 99) {
            seconds++;
            appenedSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appenedTens.innerHTML = '0' + 0;
        }

        if (seconds <= 9) {
            appenedSeconds.innerHTML = '0' +seconds;
        }

        if(seconds > 59) {
            minutes++;
            appenedMinutes.innerHTML = '0' + minutes;
            tens = 0
            appenedSeconds.innerHTML = '0' + 0;
        }
    };

    srartBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);
    };

    stopBtn.onclick = () => {
        clearInterval(Interval);
    }

    reastBtn.onclick = () => {
        clearInterval(Interval);
        tens ='00';
        seconds = '00';
        minutes = '00';
        appenedTens.innerHTML = tens;
        appenedSeconds.innerHTML = seconds;
        appenedMinutes.innerHTML = minutes;
    }

}