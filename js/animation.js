var x = window.matchMedia("(max-width: 578px)");
function myanime(){
    if(x.matches){
        var element2= document.getElementById("circle1");
        element2.classList.toggle("circle1-active")
        var element1= document.getElementById("circle2");
        element1.classList.toggle("circle2-active")
        var element3= document.getElementById("circleimg");
        element3.classList.toggle("circleimg-active")
        var element1= document.getElementById("info_arbalit1");
        element1.classList.toggle("info_arbalit1-active")
        var element1= document.getElementById("info_arbalit2");
        element1.classList.toggle("info_arbalit2-active")
        var element1= document.getElementById("info_arbalit3");
        element1.classList.toggle("info_arbalit3-active")
        var element1= document.getElementById("info_arbalit4");
        element1.classList.toggle("info_arbalit4-active")
    }else{
    var element1= document.getElementById("container__animation");
    element1.classList.toggle("container__animation-active")
    var element1= document.getElementById("info_arbalit1");
    element1.classList.toggle("info_arbalit1-active")
    var element1= document.getElementById("info_arbalit2");
    element1.classList.toggle("info_arbalit2-active")
    var element1= document.getElementById("info_arbalit3");
    element1.classList.toggle("info_arbalit3-active")
    var element1= document.getElementById("info_arbalit4");
    element1.classList.toggle("info_arbalit4-active")
    }
}