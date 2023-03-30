// Link: https://chrome.google.com/webstore/detail/flappy-bird-offline-deskt/dlnkkghpoaboifilieokcpoclbhpoclo

// At the Bottom: click full
//     READ THIS MESSAGE!

// Medal
(()=>{setMedal= function() {var e = $("#medal");e.empty();e.append('<img src="helpers/medal_' + medal + '.png" alt="' + medal + '">');return !0};medal = prompt('Which Medal? bronze, silver, gold, platinum');setMedal()})()

// Score
(()=>{score=Number(prompt('what Score?'));setBigScore()})()

// Immortal (No Gravity recommended).
playerDead=function(){}

// No gravity (Immortal recommended)
(()=>{gravity = 0;jump=0;})()
