function loadJson(_path, _onCompleted) {
	let req = new XMLHttpRequest();
	req.open("get", _path, true);
	req.send();
	req.onload = function () {
		let jsonText = JSON.parse(req.responseText);
		_onCompleted(jsonText);
	}
}