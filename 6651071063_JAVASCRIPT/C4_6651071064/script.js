'use strict';
$(function () {
  $('#removeColor').on('click', function () { const selected = $('#colorSelect option:selected'); if (!selected.length) { $('#colorStatus').text('Danh sách đã hết màu.'); return; } const removed = selected.text(); selected.remove(); $('#colorStatus').text('Đã xóa màu ' + removed + '.'); });
});
