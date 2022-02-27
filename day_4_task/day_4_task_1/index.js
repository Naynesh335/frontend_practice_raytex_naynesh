function myfunction(){
    let name =document.getElementById("name").value;
    let add =document.getElementById("address").value;
    let pn =document.getElementById("pn").value;
    let email =document.getElementById("email").value;
    let cn =document.getElementById("cn").value;
    let dep =document.getElementById("dep").value;
    document.getElementById("print1").innerHTML=name;
    document.getElementById("print2").innerHTML=add;
    document.getElementById("print3").innerHTML=pn;
    document.getElementById("print4").innerHTML=email;
    document.getElementById("print5").innerHTML=cn;
    document.getElementById("print6").innerHTML=dep;
}