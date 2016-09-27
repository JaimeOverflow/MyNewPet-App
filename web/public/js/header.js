
function showLogin(login) {
	document.getElementById('login').style.display = "block";
	document.getElementById('loginContent').style.display = "block";
	document.getElementById('signUpSection').style.display = "none";

}

function signUpContent() {
	document.getElementById('loginContent').style.display = "none";
	document.getElementById('signUpSection').style.display = "block";

}

function sendEmailSignUp() {
	var email = document.getElementById('emailRegisterInput');
	var title = document.getElementById('emailRegisterTitle');
	var registerButton = document.getElementById('registerButtonSignUp');
 
	if (email.value.length > 0) {
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					if (this.responseText != 'FAIL') {
						title.innerHTML = 'Introduce el ';
						var wordCode = document.createTextNode('código ');
						var lastWords = document.createTextNode('envia a tu correo electrónico: ');

						var textLastWords = document.createElement('span');
						textLastWords.style.color = 'black';
						textLastWords.style.fontWeight = 'normal';
						textLastWords.appendChild(lastWords);					

						var text = document.createElement('span');
						
						text.style.color = 'red';
						text.style.fontWeight = 'bold';
						text.appendChild(wordCode);
						text.appendChild(textLastWords);
						title.appendChild(text);

						email.value = '';
						email.setAttribute('placeholder', 'Código');

						registerButton.setAttribute('onclick', 'sendCodeSignUp()');
					}
				}
		}
		xmlhttp.open('GET', 'sendemail?email='+email.value, true);
		xmlhttp.send();
	} else {
		window.alert('Correo electrónico no válido, vuelvalo a intentar.');
	}
}

function sendCodeSignUp() {

}


window.onclick = function(event) {
	var login = document.getElementById('login');
	if (event.target == login) {
		login.style.display = "none";
	}
}




