function numberOfDays()
{
    var year= document.getElementById("txtYear").value;
    var month= document.getElementById("txtMonth").value;

    var daysInMonth= new Date(year, month, 0).getDate();
    
   
    document.getElementById("printResult").innerHTML=daysInMonth;


}