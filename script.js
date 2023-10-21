let btn1 = document.querySelector(".start");
 let btn2 = document.querySelector(".stop");
let interval;
btn1.addEventListener("click", ()=>{
    // stopWatch();
    interval=setInterval(watchTime, 1000);
})
 btn2.addEventListener("click", ()=>{
      clearInterval(interval);
 })

let seconds = 0;
let minutes = 0;
let hours = 0;

let timers = document.getElementById('timer');

function watchTime(){
    console.log("called");
    seconds++ ;
    if(seconds === 60){
        minutes=minutes+1;
        seconds = 0;
        if(minutes === 60){
            hours=hours+1;
            minutes = 0;
        }
    }

    timers.innerText =`${hours} hr : ${minutes} min : ${seconds} sec`;
}



