let countDownDate = new Date("jan 1, 2023 00:00:00").getTime();

let countDownfunction = setInterval(function() {

    let now = new Date().getTime();
    let distance = countDownDate - now;


    let days = Math.floor(distance/ (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
    days + "День  " + hours + "Час  " + minutes + "Минут  " + seconds + "Секунд";

    if (distance < 0) {
        clearInterval(countDownfunction);
        document.getElementById("timer").innerHTML = "shnorhavor nor tari"
    }
},1000)