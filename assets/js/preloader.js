// -----------------------
// preloader5 area here js
// ------------------------
// Updated preloader.js
$(window).on("load", function () {
  var $hashtag = $("#hashtag");
  var $learnText = $("#learnText");
  var $subtitle = $("#subtitle");
  var isHomePage = window.location.pathname.endsWith("index.html") || 
                   window.location.pathname.endsWith("/") || 
                   window.location.pathname === "";

  // Check if we're returning to homepage after preloader was shown
  if (isHomePage && sessionStorage.getItem('preloaderShown')) {
    $(".preloder").hide();
    return;
  }

  // Reset states at start
  $learnText.text("").css({ opacity: 0 });
  $subtitle.css({ opacity: 0, transform: "translateY(-12px)" });

  if (isHomePage) {
    // Full preloader animation for homepage
    sessionStorage.setItem('preloaderShown', 'true');
    
    // Step 1: let the hashtag spin once
    // Step 2: after spin, slide hashtag left
    setTimeout(function () {
      $hashtag.css({
        transform: "rotate(0deg) translateX(-1.5in)",
        transition: "transform 1s ease"
      });

      // Step 3: reveal "LEARN" letters after slide
      setTimeout(function () {
        var word = "LEARN";
        var i = 0;
        var interval = setInterval(function () {
          $learnText.append(word[i]);
          $learnText.css("opacity", 1);
          i++;
          if (i === word.length) {
            clearInterval(interval);

            // Step 4: show subtitle
            setTimeout(function () {
              $subtitle.css({ opacity: 1, transform: "translateY(0)" });
            }, 450);
          }
        }, 320);
      }, 100);
    }, 500);

    // Step 5: hide preloader after sequence
    setTimeout(function () {
      $(".preloder").fadeOut(800);
    }, 4000);
  } else {
    // Brief 1-second preloader for content pages
    $hashtag.css({
      transform: "rotate(0deg) translateX(-1.5in)",
      transition: "transform 0.5s ease"
    });
    
    $learnText.text("LEARN").css({ opacity: 1 });
    $subtitle.css({ opacity: 1, transform: "translateY(0)" });

    // Hide after 1 second
    setTimeout(function () {
      $(".preloder").fadeOut(500);
    }, 1000);
  }
});
