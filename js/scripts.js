var canvas;
var ctx;
var raf;
var running = false;
var dragging = false;

function resizeCanvas()
{
  console.log("test one");
  canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  connect();
  //draw();
}

$(function()
{
  canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");

  $("#btn-color").click(function(event) {
    event.preventDefault();
    var hex = $("#color-selection").val();
    $("#current-color").html(hex);

    $('#input-card').find('div').each(function(){
        if ($(this).hasClass('card-selected')){
          $(this).css("background-color", $("#color-selection").val())
        };
    });
  });
});

function grid() {
  var w = canvas.width;
  var h = canvas.height;

  /**
  * i is used for both x and y to draw
  * a line every 5 pixels starting at
  * .5 to offset the canvas edges
  */
  for(var i = .5; i < w || i < h; i += 30) {
    // draw horizontal lines
    ctx.moveTo( i, 0 );
    ctx.lineTo( i, h);
    // draw vertical lines
    ctx.moveTo( 0, i );
    ctx.lineTo( w, i);
  }
  ctx.strokeStyle = 'hsla(0, 0%, 40%, .05)';
  ctx.stroke();
}

function clear() {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  grid();
}

function draw() {
  clear();
  raf = window.requestAnimationFrame(draw);
}

function getHexColor(){
  $("#current-color").html("dfsdfsds");
  var hex = $("#color-selection").val();
  $("#current-color").html(hex);
}
