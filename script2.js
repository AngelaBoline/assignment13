$(function() {

var $chili = $('#chili-image');
var $fruit = $('#fruit-image');
var $applesauce = $('#applesauce-image');
var $muffins = $('#muffin-image');
var $soup = $('#soup-image');
var $brine = $('#brine-image');
var $pork = $('#pork-image');

$chili
  .find('li')
  .colorbox({
    'href' : 'https://www.youtube.com/embed/gZ_PTdrbE80',
    'iframe' : true,
    'width' : 720,
    'height' : 480
  });

$fruit
  .find('li')
  .colorbox({
    'href' : 'https://www.youtube.com/embed/l4hMO2g6W44',
    'iframe' : true,
    'width' : 720,
    'height' : 480
  });

$applesauce
  .find('li')
  .colorbox({
    'href' : 'https://www.youtube.com/embed/VGZGjl6OKDU',
    'iframe' : true,
    'width' : 720,
    'height' : 480
  });

$muffins
  .find('li')
  .colorbox({
    'href' : 'https://www.youtube.com/embed/t8aSjlkCTrw',
    'iframe' : true,
    'width' : 720,
    'height' : 480
  });

$soup
  .find('li')
  .colorbox({
    'href' : 'https://www.youtube.com/embed/BuxF4O91Rh0',
    'iframe' : true,
    'width' : 720,
    'height' : 480
  });

$brine
  .find('li')
  .colorbox({
    'href' : 'https://www.youtube.com/embed/mMfg8Ggj7aI',
    'iframe' : true,
    'width' : 720,
    'height' : 480
  });

$pork
  .find('li')
  .colorbox({
    'href' : 'https://www.youtube.com/embed/jB6qXODpBos',
    'iframe' : true,
    'width' : 720,
    'height' : 480
  });

$(".nutrition").mouseover(function() {
$(this).children(".nutritioninfo").show();
}).mouseout(function() {
$(this).children(".nutritioninfo").hide();
});

$(".link").hide();

});
