$(document).ready(function () {
  const starCount = 100;

  for (let i = 0; i < starCount; i++) {
    const $star = $("<div class='star'></div>");

    const top = Math.random() * 100 + "%";
    const left = Math.random() * 100 + "%";

    const size = Math.random() * 1 + 3 + "px";

    const delay = (Math.random() * 2).toFixed(2) + "s";

    $star.css({
      top: top,
      left: left,
      width: size,
      height: size,
      animationDelay: delay,
    });

    $(".stars-container").append($star);
  }
});

