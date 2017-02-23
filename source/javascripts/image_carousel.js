$(document).ready(function(){
  function imageCarousel() {
    var currentImage = $('.images-container .image-box.active'),
    amountOfImages = $('.images-container .image-box').length;
    if(currentImage.index() == (amountOfImages - 1)) {
      var nextImage = $('.images-container .image-box').first();
    }
    else {
      var nextImage = $(currentImage).next();
    }
    completeChange(nextImage);
  }

  function completeChange(imagePosition) {
    changeImage(imagePosition);
    changeOrb($(imagePosition).index());
  }

  function changeImage(nextImage) {
    $('.images-container .image-box').removeClass('active').addClass('hidden');
    $(nextImage).addClass('active').removeClass('hidden');  
  }

  function changeOrb(index) {
    var orbQuery = '.orbs .orb:nth-child(' + ( index + 1 ) + ')'
    $('.orbs .orb').removeClass('active');
    $(orbQuery).addClass('active');
  }

  $('.orb').on('click', function(){
    var position = parseInt($(this).attr('id')),
    target = '.images-container .image-box:nth-child(' + position + ')';
    completeChange($(target));
  });

  setInterval(imageCarousel, 5000)
});