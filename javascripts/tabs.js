$(document).ready(function(){
  $('.sidebar-item a').on('click', function(event){
    event.preventDefault();
    var target = $(this).data('target');

    $('.sidebar-item .underline').removeClass('active');
    $(this).siblings('.underline').addClass('active');

    $('.maintext').addClass('hidden-maintext');
    $(target).removeClass('hidden-maintext');
  });
});
