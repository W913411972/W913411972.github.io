      function IMGitem(a,b){

          $(".IMG").eq(a).hover(function(){
             $(this).next(".progress-bar").stop().animate({
               width: b+"px",
               opacity:"0.9",},
               1000,);
             $('canvas').stop().animate({
              opacity: '0.9',
              },
              1000,); 
              for (var i = 0; i <= (b/3); i++) {
                 var a = new settime(i);
              }
          }, function(){
            $(this).next(".progress-bar").stop().animate({
               width: "50px",
               opacity:"0",},
               1000,);
              // clearTimeout(a);
            $('canvas').stop().animate({
              opacity: '0',
              },
              1000,);  
          });
     }
      function cent(cent){             
                var width = 3*cent;  
                return width         
      }     
       var canvas = document.querySelector("canvas");
       var cxt = canvas.getContext("2d");
       function abc(a){
       cxt.clearRect(0, 0, canvas.width, canvas.height);
       cxt.fillStyle = "orange";
       cxt.strokeStyle = "black";
       cxt.save();
       cxt.translate(200, 200);
       cxt.save();
       cxt.beginPath();
       cxt.arc(0, 0, 200, 0, 2*Math.PI)     
       cxt.closePath();
       cxt.restore();
       
       cxt.save();
       cxt.rotate(-90/180*Math.PI);
       cxt.beginPath();
       cxt.moveTo(0, 0);
       cxt.lineTo(200, 0);
       cxt.arc(0, 0, 200, 0, 2*Math.PI*a/100);
       cxt.fill();
       cxt.closePath();
       cxt.restore();
       
       cxt.save();
       cxt.beginPath();
       cxt.arc(0, 0, 190, 0, 2*Math.PI);
       cxt.fillStyle = "white";
       cxt.fill();
       cxt.closePath();
       cxt.restore();
      
       cxt.restore();
       cxt.moveTo(200, 0);
       cxt.lineTo(200, 400);

       cxt.font="40px Arial";
       cxt.textAlign="center";
       cxt.fillText(a+"%",200,200);
       }
    function settime(a){
      var t = setTimeout(function(){abc(a)}, a*10)      
    }
       IMGitem(0,cent(80));
       IMGitem(1,cent(85));
       IMGitem(2,cent(87));
       IMGitem(3,cent(88));
       IMGitem(4,cent(77));
       IMGitem(5,cent(80));