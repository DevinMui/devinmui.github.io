var circle = $('#rails').circleProgress({
  value: 1,
  size: 100,
  fill: {
    gradient: ["#66CCFF"]
  }
});

circle.on('circle-animation-progress', function(e, v) {
  var obj = $(this).data('circle-progress'),
      ctx = obj.ctx,
      s = obj.size,
      sv = (100 * v).toFixed() + "%",
      fill = obj.arcFill;

  ctx.save();
  ctx.font = s / 5 + "px sans-serif";
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = fill;
  ctx.fillText(sv, s / 2, s / 2);
  ctx.restore();
});

var circle = $('#android').circleProgress({
  value: 0.7,
  size: 100,
  fill: {
    gradient: ["#66CCFF"]
  }
});

circle.on('circle-animation-progress', function(e, v) {
  var obj = $(this).data('circle-progress'),
      ctx = obj.ctx,
      s = obj.size,
      sv = (70 * v).toFixed() + "%",
      fill = obj.arcFill;

  ctx.save();
  ctx.font = s / 5 + "px sans-serif";
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = fill;
  ctx.fillText(sv, s / 2, s / 2);
  ctx.restore();
});

var circle = $('#html').circleProgress({
  value: 1,
  size: 100,
  fill: {
    gradient: ["#66CCFF"]
  }
});

circle.on('circle-animation-progress', function(e, v) {
  var obj = $(this).data('circle-progress'),
      ctx = obj.ctx,
      s = obj.size,
      sv = (100 * v).toFixed() + "%",
      fill = obj.arcFill;

  ctx.save();
  ctx.font = s / 5 + "px sans-serif";
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = fill;
  ctx.fillText(sv, s / 2, s / 2);
  ctx.restore();
});

var circle = $('#js').circleProgress({
  value: 0.5,
  size: 100,
  fill: {
    gradient: ["#66CCFF"]
  }
});

circle.on('circle-animation-progress', function(e, v) {
  var obj = $(this).data('circle-progress'),
      ctx = obj.ctx,
      s = obj.size,
      sv = (5 * v).toFixed() + "%",
      fill = obj.arcFill;

  ctx.save();
  ctx.font = s / 5 + "px sans-serif";
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = fill;
  ctx.fillText(sv, s / 2, s / 2);
  ctx.restore();
});
