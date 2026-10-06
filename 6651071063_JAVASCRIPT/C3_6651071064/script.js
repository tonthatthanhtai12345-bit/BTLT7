'use strict';
$(function () {
  let row = 2; function updateCount() { $('#rowCount').text($('#sampleTable tbody tr').length + ' hàng'); } $('#insertRow').on('click', function () { row += 1; $('#sampleTable tbody').append('<tr><td>Row ' + row + ' · cell 1</td><td>Row ' + row + ' · cell 2</td></tr>'); updateCount(); }); updateCount();
});
