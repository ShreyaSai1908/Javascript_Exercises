function age()
{
    var birthYear= document.getElementById("txtAge").value;
    var currentYear = new Date().getFullYear();
    var currentAge= currentYear- birthYear;
    

    document.getElementById("printResult").innerHTML= currentAge;
} 