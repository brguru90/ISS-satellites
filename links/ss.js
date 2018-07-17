//changing backgroun images with 4000
function iii()
{document.getElementById("bgimg").innerHTML="<img  class='bgimgs' src='img/20.jpg' width='1024px' height='1024px' border=1px>guru</img>";}
window.setInterval(function (){bodybgimg()},4000);
var im=1;
function bodybgimg()
{
	document.getElementById("bgimg").innerHTML="<img  class='bgimgs' src='img/"+im+".jpg' width='1024px' height='1024px' border=1px>guru</img>";
	im++;
	if(im==46)
	{im=1;}
}
//set & reset color of menues
function ch(bc)
{
	document.getElementById(bc).style.backgroundColor="pink";
}
function hc(bc)
{
	document.getElementById(bc).style.backgroundColor="purple";
}
//time & date refresh at
window.setInterval(function (){today()},0);
function today()
{
	var dt=new Date(),DayNieght;
	day=dt.getDate();
	week=dt.getDay()+1;
	switch (week)
	{
		case 1:weekname="Sunday";
		break;
		case 2:weekname="Monday";
		break;
		case 3:weekname="Tuesday";
		break;
		case 4:weekname="Wednesday";
		break;
		case 5:weekname="Thursday";
		break;
		case 6:weekname="Friday";
		break;
		case 7:weekname="Saturday";
		break;
	}
	mon=dt.getMonth()+1;
	switch (mon)
	{
		case 1:month="January";
		break;
		case 2:month="February";
		break;
		case 3:month="March";
		break;
		case 4:month="April";
		break;
		case 5:month="May";
		break;
		case 6:month="June";
		break;
		case 7:month="July";
		break;
		case 8:month="Aughust";
		break;
		case 9:month="September";
		break;
		case 10:month="October";
		break;
		case 11:month="November";
		break;
		case 12:month="December";
		break;
	}
	year=dt.getFullYear();
	hrs=dt.getHours();
	if(hrs>12)
	{hrs=hrs-12;DayNieght="PM"}
	else
	{DayNieght="AM";}
	min=dt.getMinutes();
	sec=dt.getSeconds();
	mil=dt.getMilliseconds();
	var date=(month+"  "+year+"<br>Today:"+day+"  "+weekname+"<br>time is:-"+hrs+":"+min+":"+sec+":"+DayNieght);
	document.getElementById("date").innerHTML=date;
}