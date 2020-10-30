

function myFunction() 
{
     var msg="";
    
    //note that how a id is used to get the value of the text field where user will provide the input
    var year = document.getElementById("txtYear").value;

    var leapYear = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);

    if (leapYear)
    {
         msg= year +" is a leap year";
    }
    else
    {
        msg= year +" is not a leap year";
    }

    //note that how a id is used to print the value of the msg in a HTML tag with the follwing id
    document.getElementById("printResult").innerHTML = msg;

  }