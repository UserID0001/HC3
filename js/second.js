
  function showSecond() {
    var date = new Date();
    var s = date.getSeconds();
    if (s<10) {
        s= "0" +s;
    }
    var xxx = s;
     document.getElementById("MySecondDisplay").innerText = xxx;
     document.getElementById("MySecondDisplay").textContent = xxx;
     setTimeout(showSecond, 1000);
    }
showSecond();