# 事件

事件传递流程如图：

![](../img/event_capture_buddle.jpg)



## jQuery on 源码分析

1. .live方法，将所有事件绑定到document上，会导致
2. .delegate 