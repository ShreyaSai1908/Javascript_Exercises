function weekDays()
{
    var msg=""; 
    
    
    var weekday= new Array(5);
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    
    
    
    for(i=0; i<weekday.length; i++)
    {
        msg= msg + weekday[i];
    }

    msg= msg+" are workdays";

    document.getElementById("printResult").innerHTML= msg;

}    
