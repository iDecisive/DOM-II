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
} // Can I just make a var for degrees outside this func and add 180 degress to it and then set rotate to that when you press a button?

document.addEventListener("keydown", keyDown);

let wheel = event => {

    document.querySelector(".main-navigation").style.transform = "rotate(180deg)";
    
}

document.addEventListener("wheel", wheel);

let dragDrop = event => {

    event.target.style.display = "none";
    
}

document.querySelector(".content-destination").addEventListener("drag", dragDrop);

let load = event => {

    console.log("100% Loaded");
    
}

window.addEventListener("load", load);

let focus = event => {

    event.target.style.backgroundColor = "grey";
    
}

document.querySelector(".nav-link").addEventListener("focus", focus);

let resize = event => {

    document.body.style.display = "none";
    
}

window.addEventListener("resize", resize)

let scroll = event => {

    document.querySelector(".content-section").style.flexDirection = "column";
    
}

document.addEventListener("scroll", scroll); 

let select1 = event => {

    //event.target.style.display = "none";

    alert("Selected text");
    
}

let txtarea = document.createElement("textarea");

txtarea.textContent = "Select this text";

document.querySelector(".text-content").appendChild(txtarea);

document.querySelector(".text-content").addEventListener("select", select1); //event select only works with input and text area

let dblClick = event => {

    event.target.style.fontSize = "30px";
    gsap.to(event.target, {rotation: 27, x: 100, duration: 1});

}

document.querySelector(".btn").addEventListener("dblclick", dblClick);

