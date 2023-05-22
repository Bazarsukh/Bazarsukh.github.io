var canvas=document.getElementById('myCanvas');
var context= canvas.getContext('2d');
var count= 2;
var bubbles=[];
var mouseX, mouseY;
var endFrame = 300;
function moveBubble(bubble){
    context.beginPath();
    context.fillStyle= bubble.color;
    context.arc(bubble.x, bubble.y, 20, 0, 2 * Math.PI);
    if(context.isPointInPath(mouseX, mouseY)) {
        bubble.removed= true;
        mouseX = null;
         mouseY = null;
    }
    context.fill();
    context.beginPath();
    context.fillStyle='#FFFFFF';
    context.arc(bubble.x-7, bubble.y-7, 5, 0, 2 * Math.PI);
    context.fill();
    if(bubble.y <= 20 || bubble.y >= canvas.height - 20 ){
        bubble.my *= -1;
    }
    if(bubble.x <= 20 || bubble.x >= canvas.width - 20) {
        bubble.mx *= -1;
    }
    bubble.x += bubble.mx;
    bubble.y += bubble.my;
}
function renderFrame(){
    context.fillStyle='#0000ff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    for(var i in bubbles) {
    moveBubble(bubbles[i]);
}
bubbles = bubbles.filter(function(bubble){return !bubble.removed});
if(bubbles.length === 0){
    count++;
    createBubbles();
    endFrame=300;
}
if (--endFrame === 0){
alert('Muu bailaa!');
}
}
function createBubbles() {
for(var i=0; i<count; i++) {
    var bubble={
        x:20+ parseInt(Math.random()*(canvas.width -40)),
        y:20+ parseInt(Math.random()*(canvas.height -40)),
        mx:parseInt( - 2 * Math.random()) + 2,
        my:parseInt( - 2 * Math.random()) + 2,
        color:'rgb('+parseInt(256 * Math.random())+','+parseInt(256 * Math.random())+','+parseInt(256 * Math.random())+')'
    }
    bubbles.push(bubble);
}
}
setInterval(renderFrame, 16);
canvas.addEventListener('mousedown', function(e){
   mouseX=e.clientX;
   mouseY=e.clientY;

});