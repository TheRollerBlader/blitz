let shohealth = document.querySelector("#healthyou")
let monsterhealth = document.querySelector("#health")
let shoot = document.querySelector("#shoot")
let shield = document.querySelector("#shield")
let placeholder = document.querySelector("#placeholder")
let time = document.querySelector("#time")
let game = document.querySelector("#gameover")
let win = document.querySelector("#win")
let ammo = 100;
let targetStrength = 200;
let timesec = 0;
let timemin = 0;
let isGameOver = false;
window.addEventListener("load", function () {

    shoot.addEventListener("click", function () {
        if (!isGameOver) {
            placeholder.setAttribute("src", "shooting (3).png")

            let one = getRandom();
            let ten = getRandom();
            let hundred = getRandom();

            let top = `${one}${ten}${hundred}`;


            one = getRandom();
            ten = getRandom();
            hundred = getRandom();

            let left = `${one}${ten}${hundred}`;

            console.log(`left - ${left}`);
            console.log(`top - ${top}`);

            shoot.setAttribute("style", `position:absolute; top:${top}px; left: ${left}px;`)

            targetStrength = targetStrength - 5;
            ammo = ammo - 5;
        }

    })
    shield.addEventListener("click", function () {
        placeholder.setAttribute("src", "shield.png")
        let add = setInterval(() => {
            ammo = ammo + 101;
            clearInterval(add)

        }, 30500);
    })
})

function getRandom() {
    return Math.round(Math.random() * 5);
}

let monster = setInterval(() => {
    shohealth.innerHTML = ammo
    monsterhealth.innerHTML = targetStrength
}, 0);

let int = setInterval(() => {
    timesec++
}, 1000);

let intmin = setInterval(() => {
    timemin++
    timesec = 0;
    if (timemin === 1) {
        clearInterval(intmin)
        clearInterval(int)
        win.innerHTML = "you lose"
        isGameOver = true;
    }


}, 60000);

let intprint = setInterval(() => {
    time.innerHTML = `${timemin} : ${timesec}`;
});

let inthealth = setInterval(() => {
    if (targetStrength === 0) {
        clearInterval(intmin)
        clearInterval(int)
        game.innerHTML = "you win"
        isGameOver = true;
    }


    if (ammo === 0) {
        win.innerHTML = "you are a loser"
        clearInterval(intmin)
        clearInterval(int)
        isGameOver = true;
    }
    if (ammo === 0 && targetStrength === 0) {
        game.innerHTML = "you win"
        isGameOver = true;
    }
}, 0);
