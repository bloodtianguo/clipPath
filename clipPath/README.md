# <a src="./clipPath.html" style="color:skyblue">clipPath</a>

图片碎片化特效

# 函数使用

clipPath(ele) <span style="color:red">ele 为需要碎片化的 dom</span>
eg:

```JavaScript
var eleText = document.getElementById('text'),
    eleImage = document.getElementById('image');

// 碎片特效初始化
clipPath(eleText);
clipPath(eleImage);
```

# CSS 代码：

```CSS
.clip[style] {
    opacity: 0;
}
.active .clip:not([style]) {
    opacity: 0;
    animation: fadeIn .1s .4s both;
}
.active .clip[style] {
    will-change: transform;
    animation: noTransform .5s both;
}

@keyframes noTransform {
    to {
        opacity: 1;
        transform: translate3d(0, 0, 0) rotate(0);
    }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.box { height: 190px; }
.text { position: absolute; width: 300px; }
.image { position: absolute; }
```

# HTML 代码：

```HTML
<strong>1. 普通带文本的元素</strong>
<div class="box active">
    <p id="text" class="text clip">魔兽要上映了...</p>
</div>

<strong>2. 替换元素如图片</strong>
<div class="box active">
    <img id="image" class="image clip" src="//image.zhangxinxu.com/image/study/s/s256/mm1.jpg">
</div>
```

# JS 代码：

```JavaScript
<script src="clipPath-min.js"></script>
<script>
var eleText = document.getElementById('text'),
    eleImage = document.getElementById('image');

// 碎片特效初始化
clipPath(eleText);
clipPath(eleImage);
```
