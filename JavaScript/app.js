// toggling navigation screen on and off when on mobile
//
const nav = $(".primary-navigation");
const navToggle = $(".mobile-nav-toggle");

// when someone clicks the hamburger button
navToggle.click(function() {
  const visiblity = nav.attr("data-visible");

  if (visiblity === "false") {
    // if the nav is closed, open it
    nav.attr("data-visible", "true");
    navToggle.attr("aria-expanded", "true");

  } else {
    // if the nav is open, close it
    nav.attr("data-visible", "false");
    navToggle.attr("aria-expanded", "false");

  }
});

changeSlide($(".planets-list").children(),$(".tabs").children());
changeSlide($(".crew-list").children(),$(".dot-indicators").children());
changeSlide($(".technology-list").children(),$(".number-indicators").children());

function changeSlide(list,listIndicators){

  listIndicators.click(function(){
    
    const index=$(this).index();
    const pageName=$("body").attr("class");
    const slideName=$(list[index]).attr("title");

    // hide all slide's text and demark all indicators
    for(const element of list){
      $(element).attr("hidden",true);
      $(listIndicators).attr("aria-selected","false");
    }

    // show relevant text
    $(list[index]).attr("hidden",false);

    // mark relevant indicator
    $(listIndicators[index]).attr("aria-selected","true");

    // change slide image
    if(pageName==="technology"){
      $("."+pageName+"-img").attr("src","./assets/"+pageName+"/image-"+slideName+"-portrait.jpg");
      for(const element of list){
        $("."+pageName+"-img").removeClass($(element).attr("title"));
      }
      $("."+pageName+"-img").addClass(slideName);
    } else{
      $("."+pageName+"-img").attr("src","./assets/"+pageName+"/image-"+slideName+".png");
    }
  });

}
