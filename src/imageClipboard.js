/**
 * [图片粘贴板]
 * @update: 2016.07.26
 * @author: yongcheng0660@163.com
 * @github: https://github.com/bravefuture
 * html结构：
<div id="imgBox"></div>
 * 	
 * 实例化
var imageClipboard = new Enjoy.ImageClipboard('#imgBox', {
	maxWidth: 500,
	maxHeight: 400,
	marginRight: 10
});
 * 获取图片数据(数组)
imageClipboard.getImgData 
 */
class ImageClipboard {
	// 构造函数
	constructor(selector, args = {maxWidth: '100%', maxHeight: '100%', marginRight: 5}) {
		this.el = document.querySelector(selector);
		this.data = [];
		this.args = args;
		this.paste();
	}
	// 拷贝
	paste() {
		window.addEventListener('paste', (e) => {
			if (e.clipboardData && e.clipboardData.items) {
				let items = e.clipboardData.items;
				items = Array.from(items).filter((i) => {
					return i.type.indexOf('image') > -1;
				});
				items.forEach((i) => {
					var blob = i.getAsFile();
                    var rd = new FileReader();
                    rd.onloadend = () => {
                    	this.data.push(rd.result);
                        this.buildImg(rd.result);
                    };
                    rd.readAsDataURL(blob);
				});
			}
		});
	}
	// 生成图片
	buildImg(src) {
		var img = document.createElement('img');
		img.src = src;
		img.style.maxWidth = this.args.maxWidth + 'px';
		img.style.maxHeight = this.args.maxHeight + 'px';
		img.style.marginRight = this.args.marginRight + 'px';
		this.el.appendChild(img);
	}
	// 返回图片数据
	get getImgData() {
		return this.data;
	}
	// 版本号
	get version() {
		return '1.0.0';
	}
}

export default {ImageClipboard};



