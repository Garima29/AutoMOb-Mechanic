document.getElementsByClassName("booking")[0].onclick=function(){
    const service=document.getElementsByTagName("h2")[0].innerHTML;
    localStorage["service"]=service;
    location.href="booking.html";
}
