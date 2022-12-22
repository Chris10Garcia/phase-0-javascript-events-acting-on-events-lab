// Your code here

const dodgerItem = document.getElementById("dodger");

// dodgerItem.style.backgroundColor = "#FF69B4";
// dodgerItem.style.bottom = "100px";

function moveDodgerLeft(){
    const leftNumbers = dodgerItem.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if(left > 0) {
        dodgerItem.style.left = `${left - 1}px`
    };
};


document.addEventListener('keydown', function(e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    } else if (e.key === "ArrowRight"){
        moveDodgerRight();
    }

});

function moveDodgerRight(){
    const leftNumbers = dodgerItem.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    // const itemWidthString = dodgerItem.style.width.replace("px","")
    // const itemWidth = parseInt(itemWidthString, 10);

    if(left < 400 -40){
        dodgerItem.style.left = `${left + 1}px`
    }

};