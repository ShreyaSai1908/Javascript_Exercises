function numbers()
{    
    var msg="";
    var num= document.getElementById("txtNum").value;
    
    var origNum=new Array();
    origNum=(num.split(","));

    var sortedNumbers= new Array();
    sortedNumbers= origNum.sort();

    for(i=0; i<sortedNumbers.length; i++)
    {
       msg= msg+" "+sortedNumbers[i];
    }

    document.getElementById("printResult").innerHTML=msg;
}