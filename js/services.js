console.log("00000000");
document.getElementsByClassName("booking")[0].onclick=function(){
    const service=document.getElementsByTagName("h2").innerHTML;
    localStorage["service"]=service;
    console.log("service");
    location.href="booking.html";
}