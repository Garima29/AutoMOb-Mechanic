let service = localStorage["service"].toLowerCase();
for(var i = 0;i < document.getElementById("selectService").length;i++){
    if(document.getElementById("selectService").options[i].value == service){
        document.getElementById("selectService").selectedIndex = i;
    }
}
document.getElementById("appointment").onclick=function(){
    var today=new Date().toISOString().slice(0,10);
    var date= document.getElementById("appointmentDate").value;
    if(today > date){
        alert("Please select future date!")
    }
    
}
