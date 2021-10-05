setUser();
document.getElementById("logout").onclick=function(){
    localStorage.clear();
    setUser();
}
function setUser(){
    if(localStorage["username"]!== null && localStorage["username"]!== undefined){
        document.getElementById("name").innerHTML = "Hi "+localStorage["username"] + " |";
    }else{
        document.getElementById("name").innerHTML = "";
    }
    
}
document.getElementById("reports").onclick=function(){
    if(localStorage["username"] === "Admin"){
        document.getElementById("reports").setAttribute("href", "reports.html");
    }
}