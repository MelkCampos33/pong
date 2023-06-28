// exportando o canvas e definindo seu campo como 2D
const canvas = document.getElementById('game')
const context = canvas.getContext('2d')

// altura e largura do canvas
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// definições do projeto
const paddleWidth = 18,
paddleHeight = 120,
paddleSpeed = 8,

ballRadius = 12,
initialBallSpeed = 8,
maxBallSpeed = 40,

netWidth = 5,
netColor = 'WHITE';


// desenhando no canvas

function drawNet() {

    for(let i = 0; i <= canvas.height; i += 15) {
        drawNet(canvas.width / 2 - netWidth / 2, i, netWidth, 10, netColor)
    }
}

// desenhando retangulo no canvas
function drawReact(x, y, width, height, color) {
    context.fillStyle = color
    context.fillReact(x, y, width, height)
}

// desenhando o circulo no canvas
function drawCircle(x, y, radius, color) {

    context.fillStyle = color

    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI * 2, false)
    context.closePat()

    context.fill()
}

// desenhando o texto no canvas
function drawText(text, x, y, color, fontSize = 60,
    fontWeight = 'bold', font = 'Courier New') {

        context.fillStyle = color
        context.font = '${fontSize}px ${font}'
        context.textAlign = 'center'
        context.fillText(text, x, y)
    }

// barra

function createBall(x, y, radius, velocityX, velocityY, color) {
    return { x, y, radius, velocityX, velocityY, color, speed: initialBallSpeed }
}

// define o a barra do usuario e do computador
const user = createPaddle(0, canvas.height / 2 - paddleHeight / 2, paddleWidth, paddleHeight, 'WHITE')

const computer = createPaddle(canvas.width - paddleWidth, canvas.height / 2 - paddleHeight / 2,
paddleWidth, paddleHeight, 'WHITE')

// definindo a bola
const ball = createBall = createBall(canvas.width) 

function movePaddle(event) {
    const rect = canvas.getBoundingClientRect()
    user.y = event.clinetY - rect.top - user.height / 2
}

