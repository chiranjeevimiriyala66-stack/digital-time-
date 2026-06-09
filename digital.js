function clock(){
    const now= new Date();
    let hour=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();

    hour=hour<10?"0"+hour:hour;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    let period="AM";
    if(hour>12){
        period="PM";
        hour=hour-12;

    }
    hour = hour < 10 ? "0" + hour : hour;

    const current_Time=`${hour}:${min}:${sec} ${period}`;
    document.getElementById("clockdiv").innerHTML=current_Time;
}
setInterval(clock, 1000);
clock();