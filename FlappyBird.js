// Link: https://chrome.google.com/webstore/detail/flappy-bird-offline-deskt/dlnkkghpoaboifilieokcpoclbhpoclo

// At the Bottom: click full
//     READ THIS MESSAGE!

// Medal
(()=>{setMedal= function() {var e = $("#medal");e.empty();e.append('<img src="helpers/medal_' + medal + '.png" alt="' + medal + '">');return !0};medal = prompt('Which Medal? bronze, silver, gold, platinum');setMedal()})()

// Score
(()=>{score=Number(prompt('what Score?'));setBigScore()})()

// Immortal (No Gravity recommended).
playerDead=function(){}

// No gravity (Immortal or No hitbox recommended)
(()=>{gravity = 0;jump=0;})()

// No Hitbox
gameloop = function () {var e = $("#player");position += velocity += gravity,updatePlayer(e);var t = document.getElementById("player").getBoundingClientRect(), o = 34 - 8 * Math.sin(Math.abs(rotation) / 90), n = (24 + t.height) / 2, s = (t.width - o) / 2 + t.left, i = (t.height - n) / 2 + t.top, a = s + o, r = i + n;if (debugmode && ((l = $("#playerbox")).css("left", s),l.css("top", i),l.css("height", n),l.css("width", o)),t.bottom >= $("#land").offset().top)playerDead();else {var p = $("#ceiling");if (i <= p.offset().top + p.height() && (position = 0),null != pipes[0]) {var l, c = pipes[0].children(".pipe_upper"), u = c.offset().top + c.height(), d = c.offset().left - 2, h = d + pipewidth, m = u + pipeheight;debugmode && ((l = $("#pipebox")).css("left", d),l.css("top", u),l.css("height", pipeheight),l.css("width", pipewidth)),!(a > d) || i > u && r < m ? s > h && (pipes.splice(0, 1),playerScore()) : null;}}}
