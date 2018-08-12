$(document).ready(function () {
    'use strict';
    paper.install(window); // paper.js를 전역에 설치
    paper.setup(document.getElementById('mainCanvas')); // 그림을 그릴 수 있게 세팅.

    /* 원 하나 그리는 코드
    var c = Shape.Circle(200, 200, 50);
    c.fillColor = 'green';
    */

    /* 바둑판을 그리는 코드
    var c;
    for (var x = 25; x < 400; x += 50) {
        for (var y = 25; y < 400; y += 50) {
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'green';
        }
    }
    */
   /* 터치 이벤트시 나타나는 코드
   var tool = new Tool();
   tool.onMouseDown = function(event){
       var c = Shape.Circle(event.point.x, event.point.y, 20);
       c.fillColor = 'green';
   }
    */

    var c = Shape.Circle(200,200,80);
    c.fillColor = 'black';
    var text = new PointText(200,200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';


    paper.view.draw();
    console.log('main.js loaded')
});