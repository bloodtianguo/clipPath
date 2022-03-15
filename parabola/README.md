# 使用方式

```JavaScript
/*引入js*/
funParabola(element, target, options);
```

`element`表示移动的元素，例如 demo 中的小球球。原生 DOM 节点
`target`表示目标元素。例如 demo 中的椭圆形的大便池。原生 DOM 节点
`options`为可选参数。各个 API 名称以及含义如下：

---

`speed` 表示每帧移动的像素大小，每帧（对于大部分显示屏）大约 16~17 毫秒。默认大小是 166.67。也就是默认 10px/ms.
`curvature`可以近似理解为抛物线的开头大小，也就是曲率。正数表示开口向下。默认大小是 0.001. 数值越大，开头越小，弧度越高。因为 web 页面动辄大小几百像素，因此，曲率值较小。
`progress` 表示抛物线运动过程中的回调，支持两个参数，x, y，表示当前的坐标，您可以根据这些坐标值做一些特殊的处理。`complete` 表示抛物线运动结束后的回调。

---

# demo 中实现点击点击页面将物体抛向置顶盒子

```JavaScript
/* 元素 */
var element = document.getElementById("element"),
    target = document.getElementById("target");
// 抛物线元素的的位置标记
var parabola = funParabola(element, target).mark();
// 抛物线运动的触发
document.body.onclick = function() {
    element.style.marginLeft = "0px";
    element.style.marginTop = "0px";
    parabola.init();
};
```
