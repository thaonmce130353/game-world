"use strict";
var is_fullscreen = false;

function open_fullscreen() {
    let game = document.getElementById("game-area");
    if (is_fullscreen) {
        // Exit fullscreen
        is_fullscreen = false;
        if (game.requestFullscreen) {
            game.requestFullscreen();
        } else if (game.mozRequestFullScreen) { /* Firefox */
            game.mozRequestFullScreen();
        } else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            game.webkitRequestFullscreen();
        } else if (game.msRequestFullscreen) { /* IE/Edge */
            game.msRequestFullscreen();
        }
    } else {
        // Enter fullscreen
        is_fullscreen = true;
        if (game.requestFullscreen) {
            game.requestFullscreen();
        } else if (game.mozRequestFullScreen) { /* Firefox */
            game.mozRequestFullScreen();
        } else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            game.webkitRequestFullscreen();
        } else if (game.msRequestFullscreen) { /* IE/Edge */
            game.msRequestFullscreen();
        }
    }
};

function is_mobile_device() {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    } else {
        return false;
    }
}