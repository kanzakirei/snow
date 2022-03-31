function createList(_jsonText) {
	let target = document.getElementById("panelList");
	_jsonText.forEach(data => {
		if (data.state == "表示") createFrame(target, data.name, data.url);
	});
	if (div.children.length <= 0) createFrame(target, "滑走可能なゲレンデはありません。", null);
}

function createFrame(_parent, _name, _url) {
	let div = document.createElement("div");
	div.classList.add("frame");
	_parent.appendChild(div);

	createName(div, _name);
	if (_url) {
		createIframeBlock(div, _url);
	}
}

function createName(_parent, _name) {
	let p = document.createElement("p");
	p.textContent = _name;
	_parent.appendChild(p);
}

function createIframeBlock(_parent, _url) {
	let div = document.createElement("div");
	div.classList.add("iframe_block");
	_parent.appendChild(div);

	let iframe = document.createElement("iframe");
	iframe.src = _url;
	iframe.frameBorder = "0";
	iframe.scrolling = "no";
	div.appendChild(iframe);
}