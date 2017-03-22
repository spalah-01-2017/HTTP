let btn = document.querySelector('.submit');
let load = document.querySelector('.load');
let input = document.querySelector('.input');
let alert;

function btnCallback (e) {
	e.preventDefault();
	if (alert) alert.content.remove();
	Check();

	btn.setAttribute("disabled", "disabled");
	load.style.display = 'inline';
}

function Check () {
	let req = new XMLHttpRequest();
	req.open('GET', 'https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/10k_most_common.txt');
	req.addEventListener('load', function (e) {
		let passwords = req.responseText.split('\r\n');
		let password = document.querySelector('.input').value;
		let safe = `Password "${password}" is safe!`;
		let unsafe = `Password "${password}" is not safe!`;
		let msg = passwords.indexOf(password) === -1 ? safe : unsafe;		
		alert = new Message(msg);

		input.value = '';
		btn.removeAttribute("disabled");
		load.style.display = 'none';

		if (msg === safe) {
			alert.content.style.backgroundColor = 'rgba(0, 255, 0, 0.8)';
		};

		alert.render();
	})
	req.send();
}

btn.addEventListener('click', btnCallback);
