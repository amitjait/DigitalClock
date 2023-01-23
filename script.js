let p = document.querySelector('p');


function clock(){
    let date_time = new Date();

    let hr = date_time.getHours();
    let min = date_time.getMinutes();
    let sec = date_time.getSeconds();

    if(hr.toString().length < 2){
        hr = "0"+hr;
    }
    if(min.toString().length < 2){
        min = "0"+min;
    }
    if(sec.toString().length < 2){
        sec = "0"+sec;
        // console.log(sec.length, typeof sec);
    }
    p.innerHTML = `${hr}:${min}:${sec}`;

}

setInterval(clock, 1000);