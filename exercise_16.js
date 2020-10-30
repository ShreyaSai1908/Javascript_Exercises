function items()
{

    var num= new Array(6);
        num= ["1, 2, 3, 1, 4, 3"];
    var msg;   
    for(i=0; i<num.length; i++)
    {
        msg= msg+ num[i];
    }
    document.getElementById("printResult").innerHTML=msg;

}