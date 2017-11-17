window.onload = function () {
	/**
	 * 这里写拖拽的代码
	 */
	var oDiv = document.getElementById('div1');
	var disX = 0;
	var disY = 0;
	oDiv.onmousedown = function (ev) {
		var oEvent = ev || window.event;
		disX = oEvent.clientX - oDiv.offsetLeft;
		disY = oEvent.clientY - oDiv.offsetTop;
		document.onmousemove = function (ev) {
			var oEvent = ev || window.event;
			var l = oEvent.clientX - disX;
			var t = oEvent.clientY - disY;
			// 限制范围
			// 横向限制
			if (l < 0) {
				l = 0;
			} else if (l > document.documentElement.clientWidth - oDiv.offsetWidth) {
				l = document.documentElement.clientWidth - oDiv.offsetWidth;
			}
			
			// 纵向限制
			if (t < 0) {
				t = 0;
			} else if (t > document.documentElement.clientHeight - oDiv.offsetHeight) {
				t = document.documentElement.clientHeight - oDiv.offsetHeight;
			}
			
			oDiv.style.left = l + 'px';
			oDiv.style.top = t + 'px';
		};
		
		document.onmouseup = function () {
			document.onmousemove = null;
			document.onmouseup = null;
		};
		
		// 阻止冒泡 + 阻止默认行为
		return false;
	};
};
