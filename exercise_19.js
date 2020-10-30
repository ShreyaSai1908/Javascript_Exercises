function timeConvention()
{
    var num= document.getElementById("txtTimeConvention").value;
    var hours = Math.floor(num / 60); 

    var minutes = (num-(hours*60)) % 60;

    var msg = hours + " hour(s) " +  minutes + " minute(s)";


    document.getElementById("printResult").innerHTML=msg;

}