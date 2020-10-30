function textManipulation2()
{
    var usrText= document.getElementById("txtText").value;
    var text= usrText.split('').sort().join('');

    document.getElementById("printResult").innerHTML= text;

}