/**
 * Created by Macbook on 6/27/16.
 */
//options
var optionsArr = ["harry", "dan", "mimi", "trump", "obama"];
var spinArr = ["ethan", "liza", "syed"];
var imgArr = ["src/rs_ethan.jpg", "src/rs_liza.jpg", "src/rs_syed.jpg"];
var item = ["item1", "item2", "item3"];
var interval;
var slot1Arr = imgArr;
var slot2Arr = imgArr;
var slot3Arr = imgArr;
// var win = 0;
// var x = -1;

//start displaying
addEventListener("DOMContentLoaded", displayOptions);

//display function
function displayOptions() {
    var option = document.getElementById("option");
    var spinning = document.getElementById("spinning");
    // for (i = 0; i < optionsArr.length; i++) {
    //     var li = document.createElement("li");
    //     var liContent = document.createTextNode(optionsArr[i]);
    //     li.appendChild(liContent);
    //     option.appendChild(li);
    // }
    for (i = 0; i < spinArr.length; i++) {
        var li = document.createElement("li");
        var liContent = document.createTextNode(spinArr[i]);
        li.appendChild(liContent);
        spinning.appendChild(li);
    }
}

// //method 1
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

// method 2
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

// // method 3
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

// method 4
function random() {
    var randomIndex = Math.floor(Math.random() * imgArr.length);
    console.log(imgArr[randomIndex]);
    return imgArr[randomIndex];
}

function spin() {
    var item1 = document.getElementById("item1");
    item1.src = random();
    var item2 = document.getElementById("item2");
    item2.src = random();
    var item3 = document.getElementById("item3");
    item3.src = random();
}

//spin button onclick
function startSpin() {
    interval = setInterval(spin, 100);
    var spinBtn = document.getElementById("spin-btn");
    var stopBtn = document.getElementById("stop-btn");
    spinBtn.setAttribute("hidden", true);
    stopBtn.removeAttribute("hidden");
}

//stop button onclick
function stopSpin() {
    clearInterval(interval);
    var spinBtn = document.getElementById("spin-btn");
    var stopBtn = document.getElementById("stop-btn");
    stopBtn.setAttribute("hidden", true);
    spinBtn.removeAttribute("hidden");
}