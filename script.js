const date = new Date()
// console.log(now);
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

document.querySelector("#todayDate").innerText = `${month}/${day}/${year}`

const endTimeCinnamonBun = new Date("2025-04-06T10:00:00")/1000
function setTimerCinnamon(){
    //hours left
    let elapsed = new Date() / 1000;
    let totalSec =  endTimeCinnamonBun - elapsed;
    let h = parseInt( totalSec / 3600 )
    let m = parseInt( totalSec / 60 ) % 60;
    let s = parseInt(totalSec % 60, 10);
    let result = h + " hours, " + m + " minutes " + s + " seconds";
    // document.querySelector("#cinnamonDays").innerHTML = totalSec;
    document.querySelector('#cinnamonBun').innerHTML = result;
    // setTimeout(setTimerCinnamon, 1000);
}

setTimerCinnamon()



const endSuperhero = new Date("2025-05-04T08:30:00")/1000
function setTimerSuper(){
    let elapsed = new Date() / 1000;
    let totalSec =  endSuperhero - elapsed;
    let h = parseInt( totalSec / 3600 )
    let m = parseInt( totalSec / 60 ) % 60;
    let s = parseInt(totalSec % 60, 10);
    let result = h + " hours, " + m + " minutes " + s + " seconds";
    document.querySelector('#superhero').innerHTML = result;
    // setTimeout(setTimerCinnamon, 1000);
}

setTimerSuper()