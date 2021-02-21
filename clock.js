setInterval(() => {
date = new Date();
h = date.getHours();
m = date.getMinutes();
s = date.getSeconds();
ms = date.getMilliseconds();
hrot = 30*h + m/2;
mrot = 6*m + s/10;
srot = 6*s + 3*ms/500;

 document.getElementById("hour").style.transform = `rotate(${hrot}deg)`;  
 document.getElementById("minute").style.transform = `rotate(${mrot}deg)`;    
 document.getElementById("second").style.transform = `rotate(${srot}deg)`;    
}, 1);

