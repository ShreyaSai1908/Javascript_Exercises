function oddEvenNum()
{
    
    var msg= "";

    for(i=0; i<=15; i++)
    {
        if(i%2==0)
        {
           msg=msg+ "<br>" + i + " is an even number";
        }
        else
        {
            msg=msg+ "<br>" + i + " is an odd number";
        }

        
    }
    document.getElementById("printResult").innerHTML= msg;
}