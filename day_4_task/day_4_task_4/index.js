function myfunction()
{
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let address=document.getElementById("cadd").value;
    let city=document.getElementById("cCity").value;
    let state=document.getElementById("cstate").value;
    let zip=document.getElementById("czip").value;

    var table = document.getElementById("myTable");
    var a="<tr>"+"<td>"+fname+"</td>"+"<td>"+lname+"</td>"+"<td>"+address+"</td>"+"<td>"+city+"</td>"+"<td>"+state+"</td>"+"<td>"+zip+"</td>"+"</tr>";
    var r=table.insertRow(1);
    r.innerHTML=a;
}