(function() {
  var openComment, styles, time, writeStyleChar, writeStyles;

  styles = "Ni hao"

  openComment = false;

  writeStyleChar = function(which) {
    styles = $('#style-text').html() + which;
    $('#style-text').html(styles);
  };

  writeStyles = function(message, index, interval) {
    var pre;
    if (index < message.length) {
      pre = document.getElementById('style-text');
      pre.scrollTop = pre.scrollHeight;
      writeStyleChar(message[index++]);
      return setTimeout((function() {
        return writeStyles(message, index, interval);
      }), interval);
    }
  };
  $('div.container').append("<div id=\"style-text\"></div>");
  time = 50;
  writeStyles(styles, 0, time);
}).call(this);
