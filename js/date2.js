
  function showDate() {
    var date = new Date();
    var d = date.getDate();
    var mon = 1 + date.getMonth();
    var y = date.getFullYear();
    var nd = d-1;
   
    if (nd < 10){
        nd = "0" +d;
    }

    if(mon + 1 <10){
        mon = "0" + mon;
    }
    var date = y + "-" + mon + "-" + nd;
     document.getElementById("MyDateDisplay2").innerText = date;
     //document.getElementById("MyClockDisplay").textContent = time;
     //setTimeout(showTime, 1000);
    }
showDate();