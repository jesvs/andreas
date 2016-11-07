$(document).ready(function () {
  $('html').removeClass('no-js');
  var cycle = $('#slideshow')
    .after('<div id="controls"><a id="ssprev" class="control"></a><div id="ss_caption"></div><a class="control" id="ssnext"></a></div>')
    .cycle({
      containerResize: 0,
      speed: "fast",
      next: "#ssnext",
      prev: "#ssprev",
      pauseOnPagerHover: true,
      pause: 1,
      delay: 8000,
      before: function () {
        $('#ss_caption').addClass('fade');
      },
      after: function () {
        $('#ss_caption').removeClass('fade');
        $('#ss_caption').text($(this).attr('alt'));
      }
    });
  $('.control').on('selectstart', function () { return false; });
  $('.gallery a').each(function (e) {
    $(this).attr('rel', 'gallery-1');
  })
  $('.gallery a').fancybox({
    title: function () {
      return this.context.firstChild.attributes.alt.textContent;
    }
  });
  //cycle.cycle('pause');

  var d = new Date();
  var dayOfWeek = d.getDay();

  if (dayOfWeek == 2) {
    $('#slideshow').addClass('tft');
  }
});