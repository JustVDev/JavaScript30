
let countdown;

function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds)

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft < 1){
            clearInterval(countdown)
        }
        displayTimeLeft(secondsLeft);
    }, 1000)
}


function displayTimeLeft(seconds){

    console.log(seconds);
}