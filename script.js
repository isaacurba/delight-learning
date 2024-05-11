var togglebar =document.getElementById("togglebar")
var menu = document.getElementById("menu")

//        HAMBURGER CODE

const active = ()=>{
    menu.classList.toggle("active")
}
togglebar.addEventListener("click", active)