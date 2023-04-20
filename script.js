window.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.hwork__steps-list-item').forEach(function(tabbutn){
    tabbutn.addEventListener('click',function(event) {
        const path = event.currentTarget.dataset.path;
        console.log(path)

        document.querySelectorAll('.tab-content').forEach(function(tabCont){
            tabCont.classList.remove('tab-content-active');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
       
        });
    });
    document.querySelector('.menu-btn').addEventListener('click', function(){
      document.querySelector('.header__menu').classList.toggle('is-active')
    })
    
    
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      
    });

    $( function() {
      $( "#accordion" ).accordion();

      $( ".selector" ).accordion({
        icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
      });
      
      var icons = $( ".selector" ).accordion( "option", "icons" );
      $( ".selector" ).accordion( "option", "icons", { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" } );

      

    });
    $('#accordion').accordion ({
      collapsible: 'true',
      icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" },
      classes: {
        "ui-accordion": "highlight"
      },
      header: "h3",

    });
   

  
    

});


