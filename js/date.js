
  function showDate() {
    var date = new Date();
    var d = date.getDate();
    var mon = 1 + date.getMonth();
    var y = date.getFullYear();

   
    if (d < 10){
        d = "0" +d;
    }

    if(mon + 1 <10){
        mon = "0" + mon;
    }
    var date = y + "-" + mon + "-" + d;
     document.getElementById("MyDateDisplay").innerText = date;
     //document.getElementById("MyClockDisplay").textContent = time;
     //setTimeout(showTime, 1000);
    }
showDate();