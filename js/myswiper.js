    var Load = $(".LOAD")[0];
    var cnt = $(".cnt")[0];
    setTimeout(function(){
      Load.style.display = "none";
      cnt.style.display = "none";
    },3000)  
    var mySwiper1 = new Swiper ('.swiper-container-v', {
    watchSlidesProgress: true,
    direction: 'vertical',
    pagination: {
    el: '.swiper-pagination',
    dynamicBullets:true,
    }, 
     mousewheel:true,
      on:{
      init: function(){
        swiperAnimateCache(this); 
        swiperAnimate(this);
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this);
      } 
     }  
    })  
      if (mySwiper1.animating){
      console.log(mySwiper1.activeIndex);
     }else{
      console.log(mySwiper1.activeIndex);
     }
   var mySwiper2 = new Swiper ('.swiper-container-h', {
    direction: 'horizontal', 
    loop: true, 
    autoplay:true,
    autoplay: {
    disableOnInteraction: false,
    },
    delay:2000,
    effect : 'fade',
  })   
