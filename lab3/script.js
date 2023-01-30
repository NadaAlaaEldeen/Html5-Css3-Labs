
       //////////////// web storage /////////////////
       var btn = document.getElementById("btn");
      
        btn.addEventListener("click", function () {
        var name = document.getElementById("nme").value;
       var email = document.getElementById("mail").value;
       localStorage.setItem("username", name);
       localStorage.setItem("useremail", email);
       
      });
      //////////////////////// web worker ////////////////////
      var worker = new Worker("myworker.js"); 
      var sum = document.getElementById("sum");
      var bg = document.getElementById("bg");
      console.log(sum, bg);

      sum.onclick = function () {
       
        worker.postMessage(""); 
      };
      worker.onmessage = function (message) {
        alert(message.data);
      };
      const randColor = () =>  {
         return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        }

      bg.onclick = function () 
      {  
          document.body.style.background = randColor();
          document.body.style.color = "white";
      };
      //------------------------share location--------------------------------
      function getLoc() {
        navigator.geolocation.getCurrentPosition(showLoc, showErr, options);
      }
      function showLoc(e) {
        var long = e.coords.longitude;
        var lat = e.coords.latitude;
        console.log(e, long, lat);
        location.assign("http://maps.google.com/maps?q" + lat + ",+" + long);
      }
      function showErr(x) {
        switch (x.code) {
          case 0:
            console.log(x.message);
            break;
          case 1:
            console.log(x.message);
            break;
          case 2:
            console.log(x.message);
            break;
          case 3:
            console.log("no time");
            break;
        }
      }

      var options = {
        enableHighAccuracy:true
      };