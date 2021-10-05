document.getElementById("loginBtn").onclick=function(){
    const name=document.getElementById("uname").value;
    const pass=document.getElementById("pwd").value;
    fetch("/js/users.json")
    .then(response => response.json())
    .then(data => {
        const users= data;
        var userExists=false;
        for(var value in users){
            if((users[value].username == name) && (users[value].password == pass)){
                userExists = true;
                break;
            }
        }
        if(userExists){
            alert("Logged in successfully");
            localStorage["username"]=name;
            location.href="home.html";
        }
        else{
            alert("Invalid Credentials");
        }
        })
}
