var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

var startTimer = null;

start.addEventListener('click', function(){
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
    start.disabled=true;

})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
 
    stopInterval()
    start.disabled=false;
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        
        var delayInMilliseconds = 1000; //1 second

        setTimeout(function() {
        m.value = 60;
        dela;
        h.value--;
        }, delayInMilliseconds);
    }
    return;
}
function stopInterval() {
    clearInterval(startTimer);
}