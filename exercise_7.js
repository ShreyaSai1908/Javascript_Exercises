function textManipulation1()
{
    var usrText= document.getElementById("txtText").value;
    var text=  document.getElementById("printResult").innerHTML= usrText.charAt(0);
    document.getElementById("printResult").innerHTML = text;

}