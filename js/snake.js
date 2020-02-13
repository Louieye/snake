;(function (window,undefined) {  //自调用函数需要用()包起来再调用
    var position = 'absolute';
    var element = [];
  function Snake(option) {
    var option = option || {};
    this.width = option.width || 20;
    this.height = option.height || 20;
    this.direction = option.direction || 'right';
    this.body = [
        {x: 3,y: 2,color: 'red'},
        {x: 2,y: 2,color: 'blue'},
        {x: 1,y: 2,color: 'blue'}
    ]
  }
  window.Snake = Snake;
  Snake.prototype.render = function(map){   //渲染 
    remove();
    for(var i = 0;i < this.body.length;i++){
        var div = document.createElement('div');
        map.appendChild(div);
        element.push(div);
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.position = position;
        div.style.left = this.body[i].x * this.width + 'px';
        div.style.top = this.body[i].y * this.height + 'px';
        div.style.backgroundColor = this.body[i].color;
    }
  }
  Snake.prototype.move = function(food,map){
      //控制蛇身体运动
      for(var i = this.body.length - 1;i > 0;i--){
          this.body[i].x = this.body[i - 1].x;
          this.body[i].y = this.body[i - 1].y;
      }
      var head = this.body[0];
      switch(this.direction) { 
          case 'right':
              head.x += 1;
              break;
          case 'left':
              head.x -= 1;
              break;
          case 'up':
              head.y -= 1;
              break;
          case 'bottom':
              head.y += 1;
              break;
      }
      var headX = head.x * food.width;
      var headY = head.y * food.height;
    //   console.log(headX,food.x);
    //   console.log(headY,food.y);
      if(headX == food.x && headY == food.y){
          food.init(map);
          var last = this.body[this.body.length - 1];
          var obj = {};
          extend(last,obj);
          this.body.push(obj);
      }
      function extend(parent,child) {
          for (const key in parent) {
              if (parent[key]) {
                  continue;
              }
              child[key] = parent[key];
          }
      }
    }
    function remove(){
        var length = element.length;
        for(var i = length - 1;i >= 0;i--){
            element[i].parentNode.removeChild(element[i]);
            element.splice(i,1);
        }
    }
})(window,undefined)
