## 开发笔记
1. 项目目录
```
- css
  -- index.css
  -- index.less
- font
  -- DS-DIGIT.TTF
- images
  -- 相关图片资源
- js
  -- echarts.min.js
  -- flexible.js
  -- jquery.js
  -- index.js
index.html
```
2. 项目初始化
* css 样式初始化
* 使用less书写样式，由VScode扩展插件（Easy LESS）使less文件实时生成css代码
* 引入flexible.js
* 开发编辑器添加cssrem插件，安装后修改设置参数为80
3. 页面布局
* 上下结构 => 上方头部header；下方内容section
* 内容部分 => 左中右结构（使用flex布局，column比例3:5:3）
* 公共盒子模板panel制作
* 中间部分（上下结构） no模块制作、地图模块
* echart图表绘制

## Echarts使用五部曲
* 1. 下载并引入echarts.js文件
* 2. 准备一个具备大小的DOM容器
* 3. 初始化echarts实例对象
* 4. 指定配置项和数据（option）
* 5. 将配置项设置给echarts实例对象

#### Echarts文档
[参考文档](https://www.echartsjs.com/zh/tutorial.html)

#### 注意：
> VS code 安装完插件或设置后需要重启软件后设置及功能才能使用