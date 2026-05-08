document.addEventListener("DOMContentLoaded", function() {
  var scrollUp = document.getElementById('scroll-up');
  var scrollDown = document.getElementById('scroll-down');

  scrollUp.addEventListener('click', function() {
    window.scrollBy(0, -500); // 向上滚动
  });

  scrollDown.addEventListener('click', function() {
    window.scrollBy(0, 500); // 向下滚动
  });
});
