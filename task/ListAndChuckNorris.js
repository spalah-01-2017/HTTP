function List(array) {
	this.list = array || [];
	this.renderTo = (node) => {
		this.nodeName = node;
		var newUl = document.createElement('ul');
		var	newLi = document.createElement('li');
		var listClone = this.list.slice();

		function makeContent() {
			node.insertBefore(newUl, node.firstElementChild);
			listClone.forEach((liText) => {
				newLi.textContent = liText;
				node.firstElementChild.appendChild(newLi.cloneNode(true));
			})
		}

		if (node.children.length === 0) {
			makeContent();
		} else {
			for(var i = 0; i <= node.children.length; i++) {
				node.removeChild(node.children[i]);
			}
			makeContent();
		}
	};
	this.add = (liText) => {
		var	newLi = document.createElement('li');
		this.list.push(liText);
		newLi.textContent = liText;
		this.nodeName.firstElementChild.appendChild(newLi.cloneNode(true));
	};
	this.setItems = (newList) => {
		this.list = newList;
	}
}
var list = new List();

function ChuckNorris(List, nod) {
	this.jokes = [];
	this.nod = nod;
	this.callBack = (data) => {
		console.log(data);
	};
	this._getJokes = function(n, fn) {
		var req = new XMLHttpRequest();
		var num = n;
		if (num > 0) {
			req.open('get', `http://api.icndb.com/jokes/random/${num}`);
			req.addEventListener('load', () => {
				this.callBack(JSON.parse(req.responseText).value);
				list.list = [];
				JSON.parse(req.responseText).value.forEach((obj) => {
					list.list.push(obj.joke);
				});
			});
		} else {
			req.open('get', `http://api.icndb.com/jokes/random`);
			req.addEventListener('load', () => {
				list.list = [];
				this.callBack(JSON.parse(req.responseText).value);
				list.list.push(JSON.parse(req.responseText).value.joke);
			});
		}
		req.send();
	}
	this.showJokes = function(n) {
		this._getJokes(n);
		list.renderTo(nod);
	};
	this.sayJoke = function() {
		this._getJokes();
		list.renderTo(nod);
	}
};
var chuck = new ChuckNorris(list, document.body);