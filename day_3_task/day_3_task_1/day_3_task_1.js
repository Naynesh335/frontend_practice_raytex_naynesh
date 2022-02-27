function prime()
{
    let prime_num=document.getElementById("num").value;

    if(prime_num<=2)
    {
        document.getElementById("print").innerHTML="the given number is prime";
    }
    
    let flag=0;
    
    for(let i=2;i<=prime_num/2;i++)
    {
        if(prime_num%i==0)
        {
            flag=1;
            break;
        }
    }

    if(flag==1)
    {
        document.getElementById("print").innerHTML="the given number is not prime";
    }
    else{
        document.getElementById("print").innerHTML="the given number is prime"
    }
}
