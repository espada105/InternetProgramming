let box = document.getElementById("box");
let position = 0;

function MoveBox(){
    if(position < 150){
        position += 1;
        box.style.left = position + "px";
        requestAnimationFrame(MoveBox);
    } else if (position = 148 ){
        position = 1;
        box.style.left = position + "px";
        requestAnimationFrame(MoveBox);
    }
}


MoveBox();