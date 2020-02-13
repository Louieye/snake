;(function () {
    var that;
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    Game.prototype.start = function () {
        //把蛇和食物对象渲染到地图上
        this.food.init(this.map);
        this.snake.render(this.map);
        runSnake();
        bindKey();
    }
    window.Game = Game;
    //私有方法
    function runSnake(){
        var timeId = setInterval(function(){
            that.snake.move(that.food,that.map);
            that.snake.render(that.map);
            var maxX = that.map.offsetWidth / that.snake.width;
            var maxY = that.map.offsetHeight / that.snake.height;
            var snakeX = that.snake.body[0].x;
            var snakeY = that.snake.body[0].y;
            if(snakeX < 0 || snakeX > maxX - 1){
                alert('game over');
                clearInterval(timeId);
            }
            if(snakeY < 0 || snakeY > maxY - 1){
                alert('game over');
                clearInterval(timeId);
            }
        },100)
    }
    function bindKey(){
        document.addEventListener('keydown',function(e){
            switch (e.keyCode) {
                case 37:
                    that.snake.direction = 'left';
                    break;
                case 38:
                    that.snake.direction = 'up';
                    break;
                case 39:
                    that.snake.direction = 'right';
                    break;
                case 40:
                    that.snake.direction = 'bottom';
                    break;
            }
        },false);
    }
})()
//测试
