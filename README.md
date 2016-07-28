# EnjoyImageClipboard
## 图片粘贴板
html结构：
```html
<div id="imgBox"></div>
```

实例化：
```javascript
var imageClipboard = new Enjoy.ImageClipboard('#imgBox', {
	maxWidth: 500,
	maxHeight: 400,
	marginRight: 10
});
// 获取图片数据
var showImageData = document.querySelector('#showImageData');
showImageData.addEventListener('click', function() {
	console.log(imageClipboard.getImgData)
}, false);	 
```