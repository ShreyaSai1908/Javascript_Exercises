  function findDay()
  {      
    var year=document.getElementById("txtYear").value
    var date = new Date(year,0,1);

    var msg="";

    if (date.getDay()==0)
    {
        msg="1st January of "+year+" is Sunday.";
    }
    else
    {
        msg="1st January of "+year+" is not Sunday.";
    }

    document.getElementById("printResult").innerHTML=msg;

  }  
    