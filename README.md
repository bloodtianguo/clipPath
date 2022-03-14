# clipPath

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
# CSS样式设置
eg:
```CSS
.clip[style] {
    opacity: 0;
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
```
