function fib()
{
    let num = document.getElementById("num").value;

    let f_series=new Array(num);
   
    f_series[0]=0;
    f_series[1]=1;

    for(let i=2;i<num;i++)
    {
        f_series[i] = f_series[i-1] + f_series[i-2];
    }

    let text = "<ul>";
    for (let i = 0; i < num; i++) {
      text += "<li>" + f_series[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById("print").innerHTML = text;
}