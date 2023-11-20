function createList(_json) {
	let target = document.getElementById("panelList");
	_json.forEach(data => {
		var currentDate = new Date();
		var openDate = new Date(data.open);
		var closeDate = new Date(data.close);
		closeDate.setDate(closeDate.getDate() + 1);
		//if (openDate <= currentDate && currentDate <= closeDate) 
		createFrame(target, `${data.name}\n(${data.open} ~ ${data.close})`, data.url);
	});
	if (target.children.length <= 0) createFrame(target, "滑走可能なゲレンデはありません。", null);
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
	p.innerText = _name;
	_parent.appendChild(p);
}

function createIframeBlock(_parent, _url) {
	let div = document.createElement("div");
	div.classList.add("iframe_block");
	_parent.appendChild(div);

	let iframe = document.createElement("iframe");
	iframe.src = _url+"#tenki-tbl-margin";
	iframe.frameBorder = "0";
	iframe.scrolling = "no";
	div.appendChild(iframe);
}
