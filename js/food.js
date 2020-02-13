;(function () {
var arr = [];

function Food(parent,option) {
    var option = option || {};
    this.width = option.width || 20;
    this.height = option.height || 20;
    this.color = option.color || 'green';
    this.x = option.x || 0;
    this.y = option.y || 0;
}
window.Food = Food;
Food.prototype.init = function (parent) {     //注意 写在prototype中的方法this指向的是构造函数的原型
    remove();
    var div = document.createElement('div');
    parent.appendChild(div);
    arr.push(div);
    this.x = tools.getRandom(0,parent.offsetWidth / this.width - 1) * 20;
    this.y = tools.getRandom(0,parent.offsetHeight / this.height - 1) * 20;
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.position = 'absolute';   
}
function remove() {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i].parentNode.removeChild(arr[i]);
        arr.splice(i,1);
    }
}
})()