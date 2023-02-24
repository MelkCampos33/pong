// ball

import Ball from "./Ball.js"

const ball = new Ball(document.getElementById("ball"))

let lastTime
function update(time) {

  if (lastTime != null) { // a primeira ver que "lastTime" é chamado ele é igual a "null". Por isso deve se fazer a verificação
    const delta = time - lastTime
    ball.update(delta)
  }

  lastTime = time
  window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)