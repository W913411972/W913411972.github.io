          var aa = 0;
          var bb = 5;
        $(".horse_title:eq(5)").css('opacity', '1');
        $(".trans-horse").on("click",function(){
          if (bb<=0) {
            bb=5
          }else{
            bb--;
          }          
          aa = aa+60;
          $(this).css("transform","rotateY("+aa+"deg)")
        $(".horse_title:eq("+bb+")").css('opacity', '1');
        if (bb+1>=6) {
         $(".horse_title:eq(0)").css('opacity', '0')
        }else{
         $(".horse_title:eq("+(bb+1)+")").css('opacity', '0')
        }       
      })