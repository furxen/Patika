let name = prompt("Adınızı Giriniz");
let myName = document.querySelector("#myName");
myName.innerHTML = name ; 

function date() {
    let momentary = new Date();
    let hours = momentary.getHours();
    let minutes = momentary.getMinutes();
    let seconds = momentary.getSeconds();

    let d = new Date()
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi" ]
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = hours + ":" + minutes + ":" + seconds + " " + days[d.getDay()]
}

let actual = setInterval(date,1000)
myName.classList.add('text-light');
myClock.classList.add('text-light')




f