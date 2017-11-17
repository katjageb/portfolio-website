$(document).ready(function () {
  $('.project').on('mouseenter', function () {
    $(this).find('.project-details').fadeIn()
  })
  $('.project').on('mouseleave', function () {
    $(this).find('.project-details').fadeOut()
  })
})

$(document).ready(function () {
  $('#safespace').on('click', function () {
    window.location.href = 'safespace.html'
  })
})

$(document).ready(function () {
  $('#bus').on('click', function () {
    window.location.href = 'busservice.html'
  })
})
