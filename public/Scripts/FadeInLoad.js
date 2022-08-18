$(document).on("scroll", function () {
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".FadeInLoad");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom - 30) {
      $(tag).addClass("visible");
    }
  }
});

window.addEventListener("mouseover", function() {
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".FadeInLoad");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).isInViewport()) {
      $(tag).addClass("visible");
    }
  }
});

window.addEventListener("load", function() {
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".FadeInLoad");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).isInViewport()) {
      $(tag).addClass("visible");
    }
  }
});

