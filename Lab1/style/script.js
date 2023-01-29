var myVideo = document.getElementById("vid"); 
            function play() { 
                if (myVideo.paused) 
                    myVideo.play();  
            } 
            function pause() { 
                if (myVideo.play) 
                    myVideo.pause();  
            } 
            function mute(){
                if(myVideo.volume)
                //Muted
                myVideo.volume = 0; 
                else 
                //UnMuted
                myVideo.volume = 1;     
            }
            function fetchvolume(){
                var getvolume = document.getElementById("volumeid").value;
                myVideo.volume = getvolume;
            }
            function fetchspeed(){
                var getspeed = document.getElementById("speedid").value;
                myVideo.playbackRate = getspeed;
            }
            function starting(){
                myVideo.currentTime = 0;
            }
            function increase_skip(){
                myVideo.currentTime-=5; 
            }
            function decrease_skip(){
                myVideo.currentTime+=5;
            }
            function ending(){
                myVideo.currentTime=myVideo.duration;
            }
        function full_screen(){
        myVideo.requestFullscreen()
            .then(function() {
                // element has entered fullscreen mode successfully
            })
            .catch(function(error) {
                // element could not enter fullscreen mode
            });}
            
            var VidRange = document.getElementById("VidRange"); 
            myVideo.addEventListener("timeupdate", function(){
                VidRange.value = myVideo.currentTime;
                document.getElementById("current").innerText= parseFloat(myVideo.currentTime/60).toFixed(2)
                document.getElementById("original").innerText= parseFloat(myVideo.duration/60).toFixed(2)
            });   
            VidRange.addEventListener("change", function(){
            myVideo.currentTime = VidRange.value;
            });

       utton.addEventListener('click', "vid.play()");

//--- part 2-----

function changecolor(){
  var text = document.getElementById("p1")
  var red_color = document.getElementById("red").value;
  var green_color = document.getElementById("green").value;
  var blue_color = document.getElementById("blue").value;
  text.style.color = `rgb(
  ${red_color},${green_color},${blue_color})`
}









