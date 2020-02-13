function Box(parent,option) {
    var option = option || {};  //设置默认值防止没传入参数出现问题
    this.backgroundColor = option.backgroundColor || 'red';
    this.width = option.width || 20;
    this.height = option.height || 20;
    this.x = option.x || 0;
    this.y = option.y || 0;
    //创建对应的div
    this.div = document.createElement('div');   //给创建对象设置div属性，方便init方法调用
    parent.appendChild(this.div);
    this.parent = parent;
    //随机生成方块，并设置样式
}
Box.prototype.init = function () {  //设置样式 在prototype创建方法减少内存占用
    var div = this.div;
    div.style.backgroundColor = this.backgroundColor;
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.position = 'absolute';
}
Box.prototype.random = function () {    //随机生成
    var x = tools.getRandom(0,this.parent.offsetWidth / this.width -1) * this.width;
    var y = tools.getRandom(0,this.parent.offsetHeight / this.height -1) * this.height;
    this.x = x;
    this.y = y;
    this.init();
}