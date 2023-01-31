// Your code here

function moveDodgerLeft(){
    const dodgerElement = document.getElementById('dodger')
    const positionString = dodgerElement.style.left.replace("px", "");
    const position = parseInt (positionString, 10);
    if (position > 0){
        dodgerElement.style.left = `${position - 1}px`
    }
}

function moveDodgerRight(){
    const dodgerElement = document.getElementById('dodger')
    const positionString = dodgerElement.style.left.replace("px", "");
    const position = parseInt (positionString, 10);
    if (position < 400-40){
        dodgerElement.style.left = `${position + 1}px`
    }
}


document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft"){
        moveDodgerLeft()
    } else if (e.key === "ArrowRight"){
        moveDodgerRight()
    }
})
