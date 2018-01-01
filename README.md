imooc-list
==========
这是一个用于练习`Vue`的小项目

主要功能
-------
* 利用第三方 `API` ，获取慕课网课程列表，前台用 `Vue` 实现展示
* 支持分页加载，支持路由的前进后退
* 支持直接在浏览器地址栏修改传参加载数据
* 页面布局支持响应式

技术栈
------
* Vue
* vue-router 2
* axios
* iView

安装
----
```bash
git clone https://github.com/funlee/imooc-list.git
cd imooc-list
npm install
npm run dev
```
然后在浏览器里输入：http:localhost:8080 即可访问

在线访问：http://show.funlee.cn/imooc-list

踩坑记录
-------
1.`vue-cli` 打包过后，上传 `github page` 并不能预览，会出现`无法加载静态资源`，解决办法：
* 更改根目录 `config` 下的 `index.js` 文件，将将 `assetsPublicPath: '/'`,　改为　`assetsPublicPath: './'`

![](https://raw.github.com/funlee/imooc-list/master/src/assets/bug1.jpg "解决无法加载静态资源")

2.页面中用 `background` 加载的图片可以正常显示，但是所有的字体图标都不能正常显示，解决方法：
* 更改根目录下 `build` 中的 `utils.js` 文件，在控制 `build` 样式文件代码中添加　`publicPath: '../../'`

![](https://raw.github.com/funlee/imooc-list/master/src/assets/bug2.jpg "解决无法加载字体图标")

3.在 `Vue2.0` 中使用 `iView` 时，控制给了如下警告，这是由于 `Vue` 升级后，对组件命名有了要求后导致的,有两种解决办法：

![](https://raw.github.com/funlee/imooc-list/master/src/assets/bug3.png "解决使用iview的警告")

* 在 `main.js` 里面添加代码

![](https://raw.github.com/funlee/imooc-list/master/src/assets/fixbug3.jpg "解决使用iview的警告")

* 第二种解决办法是使用 [iview-loader](https://www.npmjs.com/package/iview-loader)


