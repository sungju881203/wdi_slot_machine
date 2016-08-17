/**
 * Created by Macbook on 6/27/16.
 */

//options
const spinArr = ["ethan", "liza", "syed"];
const imgArr = ["src/rs_ethan.jpg", "src/rs_liza.jpg", "src/rs_syed.jpg"];
const item = ["item1", "item2", "item3"];
let counter = 0;
let interval;

//start displaying
document.addEventListener("DOMContentLoaded", displayOptions);

//display function
function displayOptions() {
    const option = document.getElementById("option");
    const spinning = document.getElementById("spinning");
    for (let i = 0; i < spinArr.length; i++) {
        const li = document.createElement("li");
        const liContent = document.createTextNode(spinArr[i]);
        li.appendChild(liContent);
        spinning.appendChild(li);
    }
    const counterSpan = document.getElementById("counter");
    counterSpan.innerHTML = counter;
}

// method 1
function randomImage() {
    const randomIndex = Math.floor(Math.random() * imgArr.length);
    console.log(imgArr[randomIndex]);
    return imgArr[randomIndex];
}

function spin() {
    const item1 = document.getElementById("item1");
    item1.src = randomImage();
    const item2 = document.getElementById("item2");
    item2.src = randomImage();
    const item3 = document.getElementById("item3");
    item3.src = randomImage();
}

//spin button onclick
function startSpin() {
    interval = setInterval(spin, 100);
    const spinBtn = document.getElementById("spin-btn");
    const stopBtn = document.getElementById("stop-btn");
    spinBtn.setAttribute("hidden", true);
    stopBtn.removeAttribute("hidden");
}

// increase jackpot counter & popup modal
function jackpot() {
    const counterSpan = document.getElementById("counter");
    const modalDiv = document.querySelector(".modal");
    counter++;
    counterSpan.innerHTML = counter;
    console.log(counter);
    modalDiv.style.display = "block";
}

function closeModal() {
    const modalDiv = document.querySelector(".modal");
    modalDiv.style.display = "none";
}

//stop button onclick
function stopSpin() {
    clearInterval(interval);
    const spinBtn = document.getElementById("spin-btn");
    const stopBtn = document.getElementById("stop-btn");
    stopBtn.setAttribute("hidden", true);
    spinBtn.removeAttribute("hidden");
    console.info(item1.src);
    console.info(item2.src);
    console.info(item3.src);
    if (item1.src == item2.src && item2.src ==item3.src) {
        jackpot();
    }
}


// //method 2
// function displayNextImage() {
//     x = (x === imgArr.length - 1) ? 0 : x + 1;
//     document.getElementById("item1").src = imgArr[x];
//     document.getElementById("item2").src = imgArr[x];
//     document.getElementById("item3").src = imgArr[x];
// }
// function startSpin() {
//     var spinBtn = document.getElementById("spin-btn");
//     var stopBtn = document.getElementById("stop-btn");
//     setInterval(displayNextImage, 100);
//     spinBtn.setAttribute("hidden", true);
//     stopBtn.removeAttribute("hidden")
// }
// //stops the spinning function
// function stopSpin() {
//
// }

// method 3
// function spin1() {
//     slot1Arr.push(slot1Arr.shift());
//     return slot1Arr;
// };
// function spin2() {
//     slot2Arr.push(slot2Arr.shift());
//     return slot2Arr;
// };
// function spin3() {
//     slot3Arr.push(slot3Arr.shift());
//     return slot3Arr;
// };
// var interval1 = setInterval(spin1, 100);
// var interval2 = setInterval(spin2, 100);
// var interval3 = setInterval(spin3, 100);
//
// function startSpin() {
//     var spinBtn = document.getElementById("spin-btn");
//     var stopBtn = document.getElementById("stop-btn");
//     spinBtn.setAttribute("hidden", true);
//     stopBtn.removeAttribute("hidden");
//     //add transform css animation
// }
//
// function stopSpin() {
//     clearInterval(spin1())
// }

// // method 4
// function run1() {
//     for (i = 0; i < 3; i++) {
//         var item1 = document.querySelectorAll(".item1");
//         item1[i].setAttribute("hidden", true);
//     }
//     for (i = 0; i < 3; i++) {
//         var item2 = document.querySelectorAll(".item2");
//         item2[i].removeAttribute("hidden");
//     }
// }
//
// function run2() {
//     for (i = 0; i < 3; i++) {
//         var item2 = document.querySelectorAll(".item2");
//         item2[i].setAttribute("hidden", true);
//     }
//     for (i = 0; i < 3; i++) {
//         var item3 = document.querySelectorAll(".item3");
//         item3[i].removeAttribute("hidden");
//     }
// }
//
// function run3() {
//     for (i = 0; i < 3; i++) {
//         var item3 = document.querySelectorAll(".item3");
//         item3[i].setAttribute("hidden", true);
//     }
//     for (i = 0; i < 3; i++) {
//         var item1 = document.querySelectorAll(".item1");
//         item1[i].removeAttribute("hidden");
//     }
// }
//
