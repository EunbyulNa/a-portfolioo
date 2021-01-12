$(function () {

  //WHEEL SCROLL
     var wheelDelta=0;
     var browser=0;
     var wheelEvent=false;

     $('.section').each(function(index){
         $(this).on('mousewheel DOMMouseScroll', function(event){
             event.preventDefault();
             //wheelEvent
            if(wheelEvent==true){
               return;
             }
             setTimeout(function(){wheelEvent=false;},1000);
             wheelEvent=true;
             browser=window.navigator.userAgent.toLowerCase().indexOf('firefox');

             if(browser>=0){
                 wheelDelta= -event.detail*40;
             }else{
               wheelDelta = event.originalEvent.wheelDelta;
             }
             //scroll up&down
             if(wheelDelta<0){
                 if(index< $('.section').length-1){
                     $('html,body').stop().animate({scrollTop: $(this).next().offset().top },500);

                 }
             }else{
                 if(index>0){
                     $('html, body').stop().animate({scrollTop: $(this).prev().offset().top},500);

                 }
             }
         });
     });


 //hbg_btn hover
  $('.hbg_btn').on('mouseenter', function() {
    $('.hbg_btn span:nth-child(2)').stop().animate( {width: '18px', margin: '6px 4px'}, 10)
  }).on('mouseleave', function() {
    $('.hbg_btn span:nth-child(2)').stop().animate( {width: '26px', margin: '6px 0'}, 10)
  })

  //Main hbg_btn click
   $('.hbg_btn').click(function () {

      var width = $('.left').width();
        if(width === 40){
          openMenu();
        }else {
          closeMenu();
        }
   });

//each menu click
 $('.menu_list').find('li').click(function () {
   closeMenu();
 })

 $('.mobile_menu_list').find('li').click(function () {
   closeMenu();
 })

//each menu click one scroll
 $('.section').click(function (e) {
   var des = $(this).attr('href');
   e.preventDefault();
   $('html, body').animate( {scrollTop: $(des).offset().top}, 700)
 });

    //open Menu
    function openMenu() {
     $('.hbg_btn span:nth-child(1)').css('transform', 'rotate(50deg)' )
     $('.hbg_btn span:nth-child(2)').css('opacity', '0');
     $('.hbg_btn span:nth-child(3)').css('transform', 'rotate(-50deg)')
     $('.left').stop().animate( {width: '340px'}, 300);
     $('.menu_list').slideToggle(700);
     $('.mobile_menu_list').slideToggle(700);
     $('.container').addClass('cotainerChage');
    }

    //close Menu
    function closeMenu() {
      $('.hbg_btn span:nth-child(1)').css('transform', '' )
      $('.hbg_btn span:nth-child(2)').css('opacity', '1');
      $('.hbg_btn span:nth-child(3)').css('transform', '')
      $('.left').stop().animate( {width: '40px'}, 500);
      $('.menu_list').slideToggle(90);
      $('.mobile_menu_list').toggle(500);
      $('.container').removeClass('cotainerChage');
    }

    //about
    $(window).scroll(function () {

      var sct = $(window).scrollTop();
      var about = $('.about_wrapper').offset().top;

      if(sct > about-500){
      $('.about_txt').animate( {opacity:'1', marginTop: '0'}, 800);

      }

    })



    //about cv

    $('#about_open').on('click', function () {
      $('.modal-wrapper').fadeIn();
      $('.modal').fadeIn()
    })

    $('#about_close').on('click', function () {
      $('.modal-wrapper').fadeOut();
      $('.modal').fadeOut();
    })

//skill bar
   $(window).scroll(function () {
     var sct = $(window).scrollTop();
     var skill = $('.skill_wrapper').offset().top;

     console.log('sct is ' + sct);
     console.log(skill);

     if( sct > skill-500 ) {

       var skillMain = $('.skill_list > div');

       skillMain.each(function () {
         var progressWrap = $(this).find('.gauge');
         var progressBar = progressWrap.find('.bar');
         var progressText = progressWrap.next('.percent');
         var progressNum = progressText.attr('data-num');

         progressBar.animate( { 'width': progressNum + '%'}, 2000);

         setInterval(textNum, 100);
         function textNum() {
           var currentWidth = progressBar.width() / progressWrap.width() * 100;

           progressText.text(Math.ceil(currentWidth) + '%');
         }
       });
      }
    })//skill end//


    //project swiper
    var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        });



        //contact
        $(window).scroll(function () {

          var sct = $(window).scrollTop();
          var contact = $('.contact_wrapper').offset().top;

          if(sct > contact-500) {

            $('.block').stop().animate( { width: '100%'}, 800, function () {
              $('.block').stop().animate( {width: '0', right: '0'}, function() {
                $('.contact').stop().animate( {opacity: '1'}, 900, function () {
                  $('.contact-text').stop().animate( { paddingTop: '30px', opacity: '1'}, 700)

                })
              })
            });

          }
        })











});
