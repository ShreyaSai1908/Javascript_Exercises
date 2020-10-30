var today=new Date();
var christmasDate = new Date(today.getFullYear(),11,25);
var daysToChristmas=Math.abs(christmasDate - today)/(86400*1000);
//var daysToChristmas=christmasDate-today;
document.getElementById("printResult").innerHTML=daysToChristmas;