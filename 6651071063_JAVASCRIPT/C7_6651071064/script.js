'use strict';
$(function () {
  $('#linkForm').on('submit', function (event) { event.preventDefault(); const value = $('#linkInput').val().trim(); let url; try { url = new URL(value); if (!['http:', 'https:'].includes(url.protocol)) throw new Error(); } catch { $('#linkStatus').text('Vui lòng nhập URL hợp lệ bắt đầu bằng http:// hoặc https://.'); return; } if (window.confirm('Bạn muốn chuyển đến ' + url.href + ' ?')) { window.location.assign(url.href); } else { $('#linkStatus').text('Đã hủy chuyển trang.'); } });
});
