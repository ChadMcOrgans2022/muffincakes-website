let x, y
let position
let width = window.innerWidth - 100;
let height = window.innerHeight - 100;


function getRandom() {
    const min= 0
    const maxX = width
    const maxY = height

    x = Math.floor(Math.random() * (maxX - min + 1) + min)
    y = Math.floor(Math.random() * (maxY - min + 1) + min)
    return [x, y]
}

function getPosition() {
    const box = document.getElementById("Box1")
    position = getRandom()
    x = position[0]
    y = position[1]
    console.log(x, y)
    box.style.position = "relative"
    box.style.transform = `translate(${x}px, ${y}px)`
}

function endGame() {
    const box = document.getElementById("Box1")
    box.style.display = "none"
    const button = document.getElementById("Button1")
    button.style.display = "none"
}
