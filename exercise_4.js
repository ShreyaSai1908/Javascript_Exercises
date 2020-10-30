function randomNumber()
{
    var userNum=document.getElementById("txtNumber").value;
    var scriptNum= Math.floor((Math.random()*10)+1);
    var displayMsg; 

    if(userNum==scriptNum)
    {
        displayMsg="You guessed it right!";
    }
    else
    {
        displayMsg="Sorry, your guess is wrong!";
    }
    
    document.getElementById("printResult").innerHTML= displayMsg;
}