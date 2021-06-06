var count =(function () {
    var counter = 6969;
    return function () {return counter -=1;}



})();


function dispcount(){
 document.getElementById("angka").innerHTML = count();
 
}




