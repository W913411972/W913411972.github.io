       var swiperw=$(".swiper-container-v .swiper-wrapper")[0];
       console.log(swiperw);
       var Index = 0; 
       var Navalone = $(".Nav li");
       for (var i = 0; i < Navalone.length ; i++) {
          // 遍历
           var Navalonei = $(".Nav li")[i];          
           Navalonei.index = i ;
           Navalonei.onclick=function(){
           var a = 0 ;
           a = $(this).index();
           var scrollHeight = document.documentElement.clientHeight;
           var distance = (a-Index)*(-scrollHeight);                          
           console.log(distance); 
           swiperw.style.transform = "translate3d(0px," + distance + "px,0px) transition-duration:300ms"
           Index = this.index;        
       };  
     };