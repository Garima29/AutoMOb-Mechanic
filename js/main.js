
if((localStorage["username"] === null) || (localStorage["username"] === undefined)){
    document.getElementById("login").hidden=false;
    document.getElementById("logout").hidden=true;
}else{
    document.getElementById("login").hidden=true;
    document.getElementById("logout").hidden=false;
    document.getElementById("name").innerHTML = "Hi "+localStorage["username"] + " |";
    if(localStorage["username"] == "admin"){
        document.getElementById("reports").removeAttribute("hidden");
        document.getElementById("services").removeAttribute("hidden");
        document.getElementById("reports").onclick=function(){
                document.getElementById("reports").setAttribute("href", "reports.html");
            }
    }else{
        document.getElementById("reports").hidden=true;
        document.getElementById("services").removeAttribute("hidden");
    }

}

document.getElementById("logout").onclick=function(){
        document.getElementById("login").hidden=false;
        localStorage.clear();
        document.getElementById("name").innerHTML = "";
        document.getElementById("reports").hidden=true;
        document.getElementById("services").hidden=true;
        location.href="home.html";
    }