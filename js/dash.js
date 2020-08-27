$(() => {
    ///////////////////// Loading Page ////////////////
    $(window).on("load", function () {
        $(".loadingPage").fadeOut(300);
    });

    //variables
    const headerHeight = $('.header').innerHeight();
    const wrapper = $('.wrapper');
    const windowWidth = $(window).innerWidth();
    const asideWidth = $(".side_navbar").innerWidth();
    const aside = $(".side_navbar");
    const content = $(".content_side");
    const toggleBtn = $(".toggle_btn");
    //init content height
    wrapper.css({
        "marginTop" : headerHeight
    })
    //init content width
    content.css({
        "width":  windowWidth - asideWidth,
        "marginLeft": asideWidth,
    })
    //toggle btn
    toggleBtn.on("click", () => {
        aside.toggleClass("active"); 
        if (aside.hasClass("active")) {
            content.css({
                "width":  windowWidth - 80,
                "marginLeft": 80,
            })
        }else {
            content.css({
                "width":  windowWidth - 200,
                "marginLeft": 200,
            })
        }
        
    })

    //init skills add buttons
    $('.add_skill').on('click', () => {
        $('.skill_form').css('display', 'flex');
    })
    $('.exitBtn').on('click', (e)=> {
        e.preventDefault();
        $('.skill_form').css('display', 'none');

    })

    //init porto add buttons
    $('.add_project').on('click', () => {
        $('.porto_form').css('display', 'flex');
    })
    $('.exitPortoBtn').on('click', (e)=> {
        e.preventDefault();
        $('.porto_form').css('display', 'none');

    })

    //init article add buttons
    $('.add_article').on('click', () => {
        $('.article_form').css('display', 'flex');
    })
    $('.exitArticleBtn').on('click', (e)=> {
        e.preventDefault();
        $('.article_form').css('display', 'none');

    })

    //start links sync
    var navLinks = $(".side_navs .navs a");

    navLinks.on("click", function (e) {
      e.preventDefault();
  
      $("html,body").animate(
        {
          scrollTop: $($(this).data("scroll")).offset().top - 50,
        },
        800
      );
      $(this).parent().toggleClass("active");
      $(this).parent().siblings().removeClass("active");
    });

})