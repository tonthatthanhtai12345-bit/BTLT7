'use strict';
$(function () {
  $('#styleButton').on('click', function () { $('#sampleText').css({ fontSize: '1.65rem', fontFamily: 'Georgia, serif', color: '#d04a36' }); $('#styleStatus').text('Đã cập nhật cỡ chữ, phông chữ và màu sắc.'); });
});
