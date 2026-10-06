'use strict';
$(function () {
  $('#getOptions').on('click', function () { const colors = $('#mySelect option').map(function () { return $(this).text(); }).get(); const message = colors.length + ' mục: ' + colors.join(', '); $('#optionsResult').text(message); window.alert(message); });
});
