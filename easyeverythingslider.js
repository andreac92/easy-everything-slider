if ($(".easy-everything-slider")[0]){
  (function() {
    var slides = $("div.easy-everything-slider").children(".easy-slider-child");
    var show_all = false;
    var curr = 0;

    // check for a corresponding menu
    var menu_kids = $('.easy-side-menu > .sub-menu').filter(':visible').find('li');
    if (!menu_kids.length) menu_kids = $('.easy-side-menu li');

    // change the current slide
    function change_curr() {
      value = window.location.hash;
      if(value[value.length-1] == "_") {
        value = value.slice(0,-1);
      }
      if ($(value).length > 0) {
        curr = slides.index($(value));
      } else {
        curr = 0;
      }
      if (menu_kids.length) {
        menu_kids.removeClass("easy-highlight");
        menu_kids.eq(curr).addClass("easy-highlight");
      } 
    }

    // show the current slide
    function show_curr_slide(){
      slides.eq(curr).show();
        adjust_nav();
    }

    // handle hash change
    $(window).bind('hashchange', function(event){
      event.preventDefault();
      if (!show_all){
        slides.eq(curr).hide();
        change_curr();
        show_curr_slide();
      } else {
        change_curr();
      } 
    });

    // next and previous slide logic
    $( ".easy-next" ).click(function() {
        if (curr == (slides.length-1)){
          return false;
        }
        var next_id = slides.eq(curr+1).attr('id');
        window.location.hash = next_id + "_";
        return false;
    });

    $( ".easy-prev" ).click(function() {
        if (curr == 0){
          return false;
        }
        var prev_id = slides.eq(curr-1).attr('id');
        window.location.hash = prev_id + "_";
      return false;
    });

    // set current slide in navigation
    function adjust_nav(){
      if (show_all){
        $( ".easy-next" ).addClass("disabled-nav-link");
        $( ".easy-prev" ).addClass("disabled-nav-link");
      } else {
        $( ".easy-prev" ).removeClass("disabled-nav-link");
        $( ".easy-next" ).removeClass("disabled-nav-link");
        if (curr == 0){
          $( ".easy-prev" ).addClass("disabled-nav-link");
        }
        else if (curr == (slides.length-1)){
          $( ".easy-next" ).addClass("disabled-nav-link");
        }
      }
    }

    // handle 'show all'
    $( ".easy-showall" ).click(function() {
      if (show_all){
        show_all = false;
        slides.fadeOut("fast", function() {
          show_curr_slide();
        });
        $( this ).text("Show all");
      } else {
          show_all = true;
          slides.fadeIn("fast");
          $( this ).text("Show less");
          adjust_nav();
      }
    });

    // initialize slider
    slides.hide();
    change_curr();
    show_curr_slide();
  }());
}