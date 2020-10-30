function primeNumber()
{
    var usrNum= document.getElementById("txtNum").value;
    var msg= "";
    
    if(usrNum==2)
    {
          msg= "This number is a Prime Number";
    }

    for(i= 2; i<=usrNum-1; i++)
    {
       if(usrNum%i==0)
       {
          msg= "This number is not a Prime Number";
          break;
       }
       else
       {
           msg= "This number is a Prime Number";
       }
    }
    
    document.getElementById("printResult").innerHTML= msg;

}