// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}




window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".js-background-color").style.backgroundColor = "#ffffff ";
        document.querySelectorAll('.nav-link').forEach(el=>{
            el.classList.add('text-dark');
        })
    } else {
        document.querySelector(".js-background-color").style.backgroundColor = "";
        document.querySelectorAll('.nav-link').forEach(el=>{
            el.classList.remove('text-dark');
        })
    }

}





// window.onscroll = function () { move() };
// var i = 0;
// function move() {
//     if (i == 0) {
//         i = 1;
//         var elem = document.getElementById("myBar");
//         var width = 1;
//         var id = setInterval(frame, 10);
//         function frame() {
//             if (width >= 90) {
//                 clearInterval(id);
//                 i = 0;
//             } else {
//                 width++;
//                 elem.style.width = width + "%";
//             }
//         }
//     }
// }
