function List(array) {
	this.list = array || [];
	this.renderTo = (node) => {
		this.nodeName = node;
		var newUl = document.createElement('ul');
		var	newLi = document.createElement('li');

		if(node.firstElementChild === null) {
			node.insertBefore(newUl, node.firstElementChild);
			this.list.forEach((liText) => {
				newLi.textContent = liText;
				node.firstElementChild.appendChild(newLi.cloneNode(true));
			})
			return;
		};

		for(var i = 0; i <= node.children.length; i++) {
			node.removeChild(node.children[i]);
		}

		node.insertBefore(newUl, node.firstElementChild);
		this.list.forEach((liText) => {
			newLi.textContent = liText;
			node.firstElementChild.appendChild(newLi.cloneNode(true));
		})
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
var list = new List(['один', 'два', 'три']);