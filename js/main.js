
setUser();
document.getElementById("logout").onclick=function(){
    localStorage.clear();
    setUser();
}
function setUser(){
    if(localStorage["username"]!== null && localStorage["username"]!== undefined){
        document.getElementById("name").innerHTML = "Hi "+localStorage["username"] + " |";
        document.getElementById("services").removeAttribute("hidden");
        document.getElementById("booking").removeAttribute("hidden");
        if(localStorage["username"] == "admin"){
            document.getElementById("reports").removeAttribute("hidden");
        }    
    }else{
        document.getElementById("name").innerHTML = "";
    }
    
}
document.getElementById("reports").onclick=function(){
    if(localStorage["username"] === "Admin"){
        document.getElementById("reports").setAttribute("href", "reports.html");
    }
}

