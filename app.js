setInterval(showTime, 1000);
function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    session = "AM";

if ( hour > 12){
    hour -= 12;
    session = "PM"
}
if ( hour == 0){
    hr = 12;
    session = "AM"
}





let currentTime = hour + ":" + min + ":" + sec + " " + session;
document.getElementById("clock").innerHTML = currentTime;
console.log("currentTime")
}

