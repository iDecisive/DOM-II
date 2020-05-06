// Your code goes here

let mouseOver = event => {

    event.target.style.filter = "invert(100%)";

}

document.querySelector(".intro img").addEventListener("mouseover", mouseOver);

let keyDown = event => {

    if (document.querySelector(".logo-heading").style.transform === "rotate(180deg)") {

        document.querySelector(".logo-heading").style.transform = "rotate(360deg)"

    }else {

        document.querySelector(".logo-heading").style.transform = "rotate(180deg)";

    }
}

document.addEventListener("keydown", keyDown);

let wheel = event => {

    
}

let dragDrop = event => {

    
}

let load = event => {

    
}

let focus = event => {

    
}

let resize = event => {

    
}

let scroll = event => {

    
}

let select = event => {

    
}

let dblClick = event => {

    
}

