function auth(){
    const uname="naynesh";
    const pass="chaudhary";
    const a=document.getElementById("uname").value;
    const b=document.getElementById("pass").value;

    if(a==uname && b==pass)
    {
        document.getElementById("print").innerHTML = "login successfully";
    }
    else{
        document.getElementById("print").innerHTML = "password is wrong";
    }
}