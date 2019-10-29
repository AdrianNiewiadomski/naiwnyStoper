// alert("dzialam");
var timerIsOn = false;
var timer = 0;
var seconds = 0;
var minutes = 0;

function resetTimer(){
    timerIsOn = false;
    clearTimeout(timer);
    seconds = 0;
    document.getElementById('moj_div').innerHTML = '00 : 00';
    document.getElementById('startStop').innerHTML = 'Start';
}

function timerRun(){
    seconds++;
    if(seconds==60){
        seconds = 0;
        minutes++;
    }

    document.getElementById('moj_div').innerHTML =  minutes + " : " + seconds;

    // setTimeout("timerRun()", 1000);
    timer = setTimeout("timerRun()", 1000);
}

function toggleTimer(){
    timerIsOn = !timerIsOn;

    if(timerIsOn){
        document.getElementById('startStop').innerHTML = 'Stop';
        setTimeout('timerRun()', 1000);
    } else {
        document.getElementById('startStop').innerHTML = 'Start';
        clearTimeout(timer);
    }
}
