
function ReverseNum()
{     
    var usrNum= document.getElementById("txtReverseNum").value;
    var revNum= String(usrNum).split("").reverse().join("");
       
    document.getElementById("printResult").innerHTML= revNum;

}
