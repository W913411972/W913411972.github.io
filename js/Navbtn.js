var btn0 = $(".Nav-btn>img")[0];
      var btn1 = $(".Nav-btn>img")[1]; 
      var toggle = true;    
      $(".Nav-btn").on("click",function(){            
      if (toggle) {
        toggle = false;
        btn0.style.display = "none";
        btn1.style.display = "block";        
        $(".Nav").fadeTo("slow",0.7); 
        $(".shelter").fadeTo("slow",0.7); 
        $(".Nav").css('display', 'block');
        $(".shelter").css('display', 'block');         
      }else{
        toggle = true;
        btn0.style.display = "block";
        btn1.style.display = "none";
        $(".Nav").fadeOut("fast");
        $(".shelter").fadeOut("fast");
      }     
    })