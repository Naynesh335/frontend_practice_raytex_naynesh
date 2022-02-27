function findage()
{
    const d=new Date();
    const presentdate=d.getDate();
    const presentyear=d.getFullYear();
    const presentmonth=d.getMonth();

    const b=document.getElementById("bdate").value;
    const birth=new Date(b);
    const dd=birth.getDate();
    const yy=birth.getFullYear();
    const mm=birth.getMonth();

    const agedate=presentdate-dd;
    const agemonth=Math.abs(presentmonth-mm);
    const ageyear=presentyear-yy;
    
    document.getElementById("print1").innerHTML="you are old : ";
    document.getElementById("print2").innerHTML=agedate + " days  ";
    document.getElementById("print3").innerHTML=agemonth + " months  ";
    document.getElementById("print4").innerHTML= ageyear + " years  ";
    
    console.log("you are old");
    console.log("year : " + ageyear);
    console.log("month : " + agemonth);
    console.log("day : " + agedate);
}