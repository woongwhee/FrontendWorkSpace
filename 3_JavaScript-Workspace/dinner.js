
function setClock(){
    let dateInfo = new Date();
    let dinnerTime = new Date();
    dinnerTime.setHours(18);
    dinnerTime.setMinutes(20);
    let hour = modifyNumber(dateInfo.getHours());
    let min = modifyNumber(dateInfo.getMinutes());
    let sec = modifyNumber(dateInfo.getSeconds());
    let year = dateInfo.getFullYear();
    let month = dateInfo.getMonth()+1; //monthIndex를 반환해주기 때문에 1을 더해준다.
    let date = dateInfo.getDate();
    let dhour=modifyNumber(dinnerTime.getHours()-hour);
    let dmin=modifyNumber(dinnerTime.getMinutes()-dateInfo.getMinutes());
    let dsec=60-dateInfo.getSeconds();
    let dmsec=modifyNumber(dateInfo.getMilliseconds());
    if(dmin<0){
        dmin=60-dmin;
    }

    if(dhour<0){
        dhour=24-dhour;
    }
    document.getElementById("time").innerHTML = hour + ":" + min  + ":" + sec;
    document.getElementById("date").innerHTML = year + "년 " + month + "월 " + date + "일";
    document.getElementById("timmer").innerHTML=dhour+":" +dmin+":"+dsec+":"+dmsec;


}
function modifyNumber(time){
    if(parseInt(time)<10){
        return "0"+ time;
    }
    else
        return time;
}
window.onload = function(){
    setClock();
    setInterval(setClock,10); //1초마다 setClock 함수 실행
}