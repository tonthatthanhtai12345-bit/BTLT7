'use strict';
$(function () {
  $('#nameForm').on('submit', function (event) { event.preventDefault(); const first = $(this).find('[name="fname"]').val().trim(); const last = $(this).find('[name="lname"]').val().trim(); $('#nameResult').text((first + ' ' + last).trim() || 'Vui lòng nhập họ tên.'); });
});
