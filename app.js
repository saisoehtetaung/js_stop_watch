const getdisplay = document.querySelectorAll('.display');
const getstartbtn = document.querySelector('.start');
const getpausebtn = document.querySelector('.pause');
const getresetbtn = document.querySelector('.reset');
const getdlpsec = document.getElementById('dlpsecond');
const getdlpmlsec = document.getElementById('dlpmillisec');
const getmodebtn = document.querySelector('.mode-btn');

// var hours = 0,
//     minutes = 0,
//     seconds = 0,
//     miliseconds = 0;


var [hours, minutes, seconds, miliseconds] = [0,0,0,0];

var setinvdisplay;
// console.log(seconds);

// getstartbtn.addEventListener('click', starttime);
// getpausebtn.addEventListener('click', pausetime);
// getresetbtn.addEventListener('click', resettime);

// function starttime() {
//     clearInterval(setinvdisplay);
//     setinvdisplay = setInterval(showdisplay, 10);
// }

// function pausetime() {
//     clearInterval(setinvdisplay);
// }

// function resettime() {
//     clearInterval(setinvdisplay);
//     [hours, minutes, seconds, miliseconds] = [0, 0, 0, 0];
//     getdisplay[idx].innerHTML = "00 : 00 : 00 : 000";
    
// }

// function showdisplay() {
//     // console.log("hay");

//     miliseconds += 10;

//     if (miliseconds === 1000) {
//         miliseconds = 0;
//         seconds++;
//         if (seconds === 60) {
//             seconds = 0;
//             minutes++;

//             if (minutes === 60) {
//                 minutes = 0;
//                 hours++;
//             }
//         }
//     }
//     // console.log(minutes);
//     // console.log(seconds);
//     // console.log(miliseconds);

//     let h = hours < 10 ? "0" + hours : hours;
//     let m = minutes < 10 ? "0" + minutes : minutes;
//     let s = seconds < 10 ? "0" + seconds : seconds;
//     let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;


//     getdisplay[idx].innerHTML = `${h} : ${m} : ${s} : ${ms}`;
// }

var idx = 0;
getdisplay[idx].style.display = "block";

getmodebtn.onclick = function () {
    reloadagain();
    [hours, minutes, seconds, miliseconds] = [0,0,0,0];

    getdisplay[idx].style.display = "none";
    idx++;

    if (idx > 1) {
        idx = 0;
    }

    getdisplay[idx].style.display = "block";


}


getstartbtn.onclick = function () {
    // console.log('hay');
    clearInterval(setinvdisplay);
    setinvdisplay = setInterval(showdisplay, 10);
}

getpausebtn.onclick = function () {
    clearInterval(setinvdisplay);
}

getresetbtn.onclick = function () {
    reloadagain();
}

function reloadagain() {
    if (idx === 0) {
        clearInterval(setinvdisplay);
        [hours, minutes, seconds, miliseconds] = [0, 0, 0, 0];
        getdisplay[idx].innerHTML = "00 : 00 : 00 : 000";
    } else {
        clearInterval(setinvdisplay);
        miliseconds = "00";
        seconds = "00";
        getdlpmlsec.innerHTML = miliseconds;
        getdlpsec.innerHTML = seconds;
    }
}

function showdisplay() {


    if (idx === 0) {
         miliseconds += 10;

        if (miliseconds === 1000) {
            miliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;

                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        // console.log(minutes);
        // console.log(seconds);
        // console.log(miliseconds);

        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;


        getdisplay[idx].innerHTML = `${h} : ${m} : ${s} : ${ms}`;
    } else {
        miliseconds++;

        if (miliseconds <= 9) {
            getdlpmlsec.innerHTML = "0" + miliseconds;

        }

        if (miliseconds > 9) {
            getdlpmlsec.innerHTML = miliseconds;
        }

        if (miliseconds > 99) {
            miliseconds = 0;
            seconds++;
            getdlpmlsec.innerHTML = "0" + 0;
            getdlpsec.innerHTML = "0" + seconds;
        }

        if (seconds > 9) {
            getdlpsec.innerHTML = seconds;
        }
    }

    
}