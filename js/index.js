var menu = document.querySelector(".nav");
var tEnableds = document.querySelectorAll(".t-enabled");
var menuToggle = document.querySelector("#toggle");
var menuToggleLabel = document.querySelector(".toggle");

var setTEnalbe = (elems, transform) => {
    Array.from(elems).forEach(el => {
        el.style.transform = transform;
    })
}

menuToggle.addEventListener("change", (e) => {
    var { checked } = e.currentTarget;
    var { width } = menu.getBoundingClientRect();

    menu.style.transition = ".5s";
    menuToggleLabel.style.transition = ".5s";
    menu.style.transform = checked ? "translateX(0)" : "translateX(-100%)";
    setTEnalbe(tEnableds, checked ? `translateX(${width}px)` : "translateX(0)");
})


window.addEventListener("resize", e => {
    var { matches } = window.matchMedia("(min-width: 981px)");
    
    if (matches) {
        menu.style.transform = "none";
        setTEnalbe(tEnableds, "none");
    } else {
        var { width } = menu.getBoundingClientRect();
        var { checked } = menuToggle;

        menu.style.transition = "none";
        menuToggleLabel.style.transition = "none";
        menu.style.transform = checked ? "none" : "translateX(-100%)";
        setTEnalbe(tEnableds, checked ? `translateX(${width}px)` : "translateX(0)");
    }
})
