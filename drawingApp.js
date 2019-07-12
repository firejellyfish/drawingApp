var canvas = document.getElementById('canvas');
var btn = document.getElementById('btn');
var ctx = canvas.getContext('2d');
var mousex, mousey;
// state　が　trueの時はクリックされている状態を指す
var state = false;
var color = 0;


// canvasのサイズを画面いっぱいにする
canvas.width = window.innerWidth - 8;
canvas.height = window.innerHeight - 8;

ctx.lineWidth = 15;
ctx.lineCap = 'round';

canvas.addEventListener('mousemove',mouseMove);
canvas.addEventListener('mousedown',mouseDown);
canvas.addEventListener('mouseup',mouseUp);
btn.addEventListener('click',clearBtn);


// クリックした時の位置をmousex, mouseyと定義した
// これをmouseMoveの中ののmoveTo（初期位置）に代入する
function mouseDown(e){
 mousex = e.clientX;
 mousey = e.clientY;
 state = true;
}

function mouseUp(e){
  state = false;
}


function mouseMove(e){
  if (!state) return;

  var w = Math.random() * 51;
  ctx.lineWidth = w;

  color++;
  ctx.strokeStyle = 'hsl('+color+',100%,50%)';

  ctx.beginPath();
  ctx.moveTo(mousex,mousey);
  ctx.lineTo(e.clientX,e.clientY);
  ctx.stroke();

  // ずっとlineToのところからの線になってしまうので　↓　を書く
  mousex = e.clientX;
  mousey = e.clientY;
}


function clearBtn(){
   ctx.clearRect(0,0,canvas.width,canvas.height);
  }
